import React, {useState} from "react";
import {
    apiEndpoint,
    generateNextCashInOutIndexNumber,
    generateTodayDate, isBossCorrect,
    isPrice, updatePrice,
} from "../../common";
import {getRequest, postRequest} from "../../requestBuilder";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import RHQLoader from "../../RHQLoader";
import "./addExpensesForm.css"

const AddExpensesForm = (props) => {
    const categoryList = [
        "Advertising",
        "Postage & Packaging",
        "Office supplies",
        "Salary",
        "Transport claims",
        "Staff welfare"
    ]

    const [category, setCategory] = useState(categoryList[0])
    const [paidTo, setPaidTo] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("-")
    const [date, setDate] = useState(generateTodayDate())
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("$0.00")
    const [bossName, setBossName] = useState("")

    const [isStatusMessagesVisible, setStatusMessagesVisible] = useState(false)
    const [bossCheckCorrect, setBossCheckCorrect] = useState(0)
    const [updatingAccountsCheckCorrect, setUpdatingAccountsCheckCorrect] = useState(0)

    const indicators = [
        {
            indicator: bossCheckCorrect,
            setter: setBossCheckCorrect
        },
        {
            indicator: updatingAccountsCheckCorrect,
            setter: setUpdatingAccountsCheckCorrect
        }
    ]

    const [submitting, setSubmitting] = useState(false)

    const [isWarningMessageVisible, setWarningMessageVisible] = useState(false)
    const [warningMessage, setWarningMessage] = useState("")

    const setWarning = (warningMessage) => {
        setWarningMessage(warningMessage)
        setWarningMessageVisible(true)
    }

    const resetWarningMessages = () => {
        setWarningMessageVisible(false)
        setWarningMessage("")
    }

    const resetStatusMessages = () => {
        setStatusMessagesVisible(false)
        setBossCheckCorrect(0)
        setUpdatingAccountsCheckCorrect(0)
    }

    const updateDate = (date) => {
        if (date.split("/").length !== 3) {
            return;
        }
        setDate(date)
    }

    const submitExpense = async () => {
        try {
            setStatusMessagesVisible(false)
            setSubmitting(true)
            resetWarningMessages()
            if (!isPrice(amount)) {
                setWarning("Invalid amount!")
                setSubmitting(false)
                return
            }
            resetStatusMessages()
            setStatusMessagesVisible(true)

            const correctBoss = await isBossCorrect(bossName)
            if (!correctBoss) {
                setBossCheckCorrect(2)
                setSubmitting(false)
                return
            }
            setBossCheckCorrect(1)

            const expense = {
                category: category,
                paid_to: paidTo,
                invoice_no: invoiceNumber,
                date: date,
                description: desc,
                amount: amount
            }
            await postRequest(apiEndpoint + '/expense', expense)

            const lastCceIndexData = await getRequest(apiEndpoint + "/cce_out")
            let lastCashOutIndex = lastCceIndexData.data.lastCashOutIndex
            if (!lastCashOutIndex.startsWith("CO")) {
                lastCashOutIndex = "CO000"
            }
            const lastCashOutRow = lastCceIndexData.data.row
            const currCashOutIndex = generateNextCashInOutIndexNumber(lastCashOutIndex)
            const currCashOutRow = parseInt(lastCashOutRow) + 1

            const createLastCashOutObject = {
                indexNumber: currCashOutIndex,
                date: date,
                description: desc,
                amount: amount,
                remarks: desc,
                row: currCashOutRow
            }
            await postRequest(apiEndpoint + '/cce_out', createLastCashOutObject)
            setUpdatingAccountsCheckCorrect(1)

            setSubmitting(false)
            props.navigate("orderSubmitted")
        } catch (err) {
            for (const element in indicators) {
                if (element.indicator === 0) {
                    element.setter(2)
                    break
                }
            }
        }
    }

    const canSubmit = () => {
        return category !== ""
            && paidTo !== ""
            && desc !== ""
            && amount !== ""
            && bossName !== ""
            && submitting === false
    }

    const warningMessageComponent = (warningMessage) => {
        return (
            <span className="warning-message">{warningMessage}</span>
        )
    }

    const inactiveButton = () => {
        return (
            <div className="form-button-inactive">Submit Expense</div>
        )
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={submitExpense}>Submit Expense</div>
        )
    }

    const statusMessageComponent = () => {
        return (
            <div className="status-messages-container">
                <div className="status-message-row">
                    <span className="status-message">Boss correct</span>
                    {bossCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {bossCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
                <div className="status-message-row">
                    <span className="status-message">Updating accounts</span>
                    {updatingAccountsCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {updatingAccountsCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
            </div>
        )
    }

    return (
        <div className="form">
            <span className="form-header">Expense Form</span>
            <span className="form-label">Category</span>
            <select name="category" id="categories" onChange={e => setCategory(e.target.value)}>
                {categoryList.map((item) => {
                    return (
                        <option value={item}>{item}</option>
                    )
                })}
            </select>
            <span className="form-label">Paid To</span>
            <input className="input-box" type="text" onChange={e => setPaidTo(e.target.value)}/>
            <span className="form-label">Invoice no (If applicable)</span>
            <input className="input-box" type="text" value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)}/>
            <span className="form-label">Date</span>
            <input className="input-box" type="text" value={date} onChange={e => updateDate(e.target.value)}/>
            <span className="form-label">Description</span>
            <input className="input-box" type="text" onChange={e => setDesc(e.target.value)}/>
            <span className="form-label">Amount</span>
            <input className="input-box" type="text" value={amount} onChange={e => updatePrice(e.target.value, setAmount)}/>
            <span className="form-label">Boss in-charge</span>
            <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
            {isWarningMessageVisible && warningMessageComponent(warningMessage)}
            {isStatusMessagesVisible && statusMessageComponent()}
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <RHQLoader message={"Fetching expenses form..."} />
                    : inactiveButton()}
        </div>
    )
}

export default AddExpensesForm;
