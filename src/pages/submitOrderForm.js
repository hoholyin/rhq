import {
    addPrice,
    apiEndpoint,
    generateNextCashInOutIndexNumber,
    generateNextInvoiceNumber,
    generateTodayDate, isBossCorrect, isPrice, itemExists,
    toLocObjectArray, toLocString, updatePrice
} from "../common";
import tick from "../assets/tick.png";
import cross from "../assets/cross.png";
import React, {useEffect, useState} from "react";
import "./submitOrderForm.css";
import Loader from "../Loader";
import {getRequest, postRequest} from "../requestBuilder";

const SubmitOrderForm = (props) => {
    const [customerName, setCustomerName] = useState("");
    const [qty, setQty] = useState("1")
    const [amount, setAmount] = useState("$0.00")
    const [stamps, setStamps] = useState("$0.00")
    const [remarks, setRemarks] = useState("NA")
    const [tips, setTips] = useState("$0.00")
    const [bossName, setBossName] = useState("")
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [inventoryList, setInventoryList] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [isStatusMessagesVisible, setStatusMessagesVisible] = useState(false)
    const [bossCheckCorrect, setBossCheckCorrect] = useState(0)
    const [itemExistCheckCorrect, setItemExistCheckCorrect] = useState(0)
    const [itemInStockCheckCorrect, setItemInStockCheckCorrect] = useState(0)
    const [updatingInventoryCheckCorrect, setUpdatingInventoryCheckCorrect] = useState(0)
    const [submittingOrderCheckCorrect, setSubmittingOrderCheckCorrect] = useState(0)
    const [updatingAccountsCheckCorrect, setUpdatingAccountsCheckCorrect] = useState(0)

    const indicators = [
        {
            indicator: bossCheckCorrect,
            setter: setBossCheckCorrect
        },
        {
            indicator: itemExistCheckCorrect,
            setter: setItemExistCheckCorrect
        },
        {
            indicator: itemInStockCheckCorrect,
            setter: setItemInStockCheckCorrect
        },
        {
            indicator: updatingInventoryCheckCorrect,
            setter: setUpdatingInventoryCheckCorrect
        },
        {
            indicator: submittingOrderCheckCorrect,
            setter: setSubmittingOrderCheckCorrect
        },
        {
            indicator: updatingAccountsCheckCorrect,
            setter: setUpdatingAccountsCheckCorrect
        }
    ]

    const [submitting, setSubmitting] = useState(false)

    const [isWarningMessageVisible, setWarningMessageVisible] = useState(false)
    const [warningMessage, setWarningMessage] = useState("")

    useEffect(() => {
        refreshInventory()
    }, [])

    const refreshInventory = async () => {
        setIsLoading(true)
        const inventoryListObject = await getRequest(apiEndpoint + '/inventory')
        const allInventories = inventoryListObject.data.allInventories
        allInventories.map((e) => {
            e.name = e.code
            e.name = e.name.replaceAll("NA", "")
            e.name = e.name.replaceAll("Phone accessories", "")
            return e
        })
        setAllInventories(allInventories)
        setInventoryList(allInventories)
        setIsLoading(false)
    }

    const checkItemRow = async (code) => {
        const itemRowResult = await postRequest(apiEndpoint + '/inventoryRow', {code: code})
        return itemRowResult.data.row
    }

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
        setItemExistCheckCorrect(0)
        setItemInStockCheckCorrect(0)
        setUpdatingInventoryCheckCorrect(0)
        setSubmittingOrderCheckCorrect(0)
        setUpdatingAccountsCheckCorrect(0)
    }

    const submitOrder = async () => {
        try {
            setStatusMessagesVisible(false)
            setSubmitting(true)
            resetWarningMessages()
            if (!/^[1-9]\d*$/.test(qty)) {
                setWarning("Invalid quantity!")
                setSubmitting(false)
                return
            }

            setAmount(amount === "$" ? "$0.00" : amount)
            setTips(tips === "$" ? "$0.00" : tips)
            setStamps(stamps === "$" ? "$0.00" : stamps)

            if (!isPrice(amount)) {
                setWarning("Invalid amount!")
                setSubmitting(false)
                return
            }

            if (!isPrice(tips)) {
                setWarning("Invalid tips!")
                setSubmitting(false)
                return
            }

            if (!isPrice(stamps)) {
                setWarning("Invalid stamps!")
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

            const allRows = []
            for (const item in items) {
                const itemRow = await checkItemRow(item.code);
                allRows.push(itemRow)
                if (!itemExists(itemRow)) {
                    setItemExistCheckCorrect(2)
                    setSubmitting(false)
                    return
                }
            }
            setItemExistCheckCorrect(1)

            for (const itemRow in allRows) {
                const currLocationRes = await postRequest(apiEndpoint + '/inventoryGetLoc', {row: itemRow})
                const currLocation = toLocObjectArray(currLocationRes.data.inventoryLoc)
                let inStock = false
                currLocation.forEach((e) => {
                    if (e.name.toUpperCase() === bossName.toUpperCase()) {
                        inStock = e.qty >= qty
                    }
                })
                if (!inStock) {
                    setItemInStockCheckCorrect(2)
                    setSubmitting(false)
                    return
                }
                setItemInStockCheckCorrect(1)
                let updatedCurrLocation = currLocation.map((e) => {
                    if (e.name.toUpperCase() === bossName.toUpperCase()) {
                        return {
                            name: e.name,
                            qty: e.qty - qty
                        }
                    }
                    return e
                }).filter((e) => e.qty > 0)
                const updatedCurrLocationString = toLocString(updatedCurrLocation)
                await postRequest(apiEndpoint + '/inventoryUpdateLoc', {row: itemRow, location: updatedCurrLocationString})
            }
            setUpdatingInventoryCheckCorrect(1)

            const today = generateTodayDate()
            for (const item in items) {
                const getOrdersInfo = await getRequest(apiEndpoint + "/orders")
                const lastInvoiceNumber = getOrdersInfo.data.lastInvoiceNumber
                const currInvoiceNumber = generateNextInvoiceNumber(lastInvoiceNumber)
                const order = {
                    code: item.code,
                    customer: customerName,
                    invoice_number: currInvoiceNumber,
                    invoice_date: today,
                    qty: qty,
                    amt: amount,
                    tips: tips,
                    stamps: stamps,
                    remarks: remarks,
                    bossName: bossName.toUpperCase()
                }
                await postRequest(apiEndpoint + '/order', order)
                if (tips !== "$0.00") {
                    const tipsObject = {
                        customer: customerName,
                        invoice_number: currInvoiceNumber,
                        tipAmount: tips
                    }
                    await postRequest(apiEndpoint + '/addTips', tipsObject)
                }
                const getLastCashIn = await getRequest(apiEndpoint + "/cce_in")
                let lastCashInIndex = getLastCashIn.data.lastCashInIndex
                if (!lastCashInIndex.startsWith("CI")) {
                    lastCashInIndex = "CI000"
                }
                const lastCashInRow = getLastCashIn.data.row

                const currCashInIndex = generateNextCashInOutIndexNumber(lastCashInIndex)
                const cashInDescription = "Sales - " + currInvoiceNumber
                const currCashInRow = parseInt(lastCashInRow) + 1

                const createLastCashInObject = {
                    indexNumber: currCashInIndex,
                    date: today,
                    description: cashInDescription,
                    amount: addPrice(amount, tips),
                    row: currCashInRow
                }
                await postRequest(apiEndpoint + '/cce_in', createLastCashInObject)
            }
            setSubmittingOrderCheckCorrect(1)
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
        return customerName !== ""
            && amount !== ""
            && stamps !== ""
            && bossName !== ""
            && submitting === false
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
                    <span className="status-message">Item exists</span>
                    {itemExistCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {itemExistCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
                <div className="status-message-row">
                    <span className="status-message">In stock</span>
                    {itemInStockCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {itemInStockCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
                <div className="status-message-row">
                    <span className="status-message">Updating inventory</span>
                    {updatingInventoryCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {updatingInventoryCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
                <div className="status-message-row">
                    <span className="status-message">Submitting order</span>
                    {submittingOrderCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {submittingOrderCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
                <div className="status-message-row">
                    <span className="status-message">Updating accounts</span>
                    {updatingAccountsCheckCorrect === 1 && <img src={tick} className="status-icon" alt="logo"/>}
                    {updatingAccountsCheckCorrect === 2 && <img src={cross} className="status-icon" alt="logo"/>}
                </div>
            </div>
        )
    }

    const warningMessageComponent = (warningMessage) => {
        return (
            <span className="warning-message">{warningMessage}</span>
        )
    }

    const inactiveButton = () => {
       return (
           <div className="form-button-inactive">Submit Order</div>
       )
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={submitOrder}>Submit Order</div>
        )
    }

    const search = (query) => {
        setSearchQuery(query)
        const allWords = searchQuery.split(" ")
        const filteredItems = allInventories.filter((e) => {
            for (const word of allWords) {
                if (!e.code.toLowerCase().includes(word.toLowerCase())) {
                    return false
                }
            }
            if (items.filter((item) => item.code === e.code).length > 0) {
                return false
            }
            return true
        })
        setInventoryList(filteredItems)
    }

    const selectedCodeModal = () => {
        const allProcessedWords = items.map((item) => {
            const code = item.code
            let processedWord = "";
            for (let i = 0; i < code.length; i++) {
                if (processedWord.length === 0 || code.length === i + 1) {
                    processedWord += code[i]
                    continue;
                }
                const lastChar = processedWord.slice(-1);
                const nextChar = code[i];
                if (lastChar.match(/[0-9|a-z]/) && nextChar.match(/[A-Z]/)) {
                    processedWord += "\n"
                }
                processedWord += code[i]
            }
            return { processedWord: processedWord, code: code }
        })
        return (
            <div className="selected-code-list">
                {allProcessedWords.map((processedWordObj) => {
                    return (
                        <div className="selected-code-modal">
                            <div className="modal-padding"></div>
                            <span className="selected-item-name">{processedWordObj.processedWord}</span>
                            <div className="remove-selection" onClick={() => unselectItem(processedWordObj.code)}>
                                <img src={cross} className="remove-selection-icon" alt="logo"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const unselectItem = (code) => {
        const removed = items.filter((item) => item.code !== code)
        setItems(removed)
        let totalPrice = "$0.00"
        removed.forEach((item) => {
            totalPrice = addPrice(totalPrice, item.price)
        })
        updatePrice(totalPrice, setAmount)
    }

    const selectItem = (item) => {
        const added = [...items, item]
        setItems(added)
        updatePrice(addPrice(amount, item.price), setAmount)
        setSearchQuery("")
    }

    return ( isLoading ? <Loader /> : (
        <div className="form">
            <span className="form-header">Order Form</span>
            <span className="form-label">Customer's name</span>
            <input className="input-box" type="text" onChange={e => setCustomerName(e.target.value)}/>
            <span className="form-label">Item</span>
            <input className="input-box" placeholder="Start typing to search..." type="text" value={searchQuery} onChange={e => search(e.target.value)}/>
            {searchQuery !== "" && inventoryList.map((e) => {
                return (
                    <div className="search-item-row" onClick={() => selectItem(e)}>
                        <span className="search-item-name">{e.name}</span>
                    </div>
                )
            })}
            {items.length > 0 && selectedCodeModal()}
            <span className="form-label">Quantity</span>
            <input className="input-box" type="number" value={qty} onChange={e => setQty(e.target.value)}/>
            <span className="form-label">Net Amount (After discount)</span>
            <input className="input-box" type="text" value={amount} onChange={e => updatePrice(e.target.value, setAmount)}/>
            <span className="form-label">Stamp value</span>
            <input className="input-box" type="text" value={stamps} onChange={e => updatePrice(e.target.value, setStamps)}/>
            <span className="form-label">Remarks</span>
            <input className="input-box" type="text" value={remarks} onChange={e => setRemarks(e.target.value)}/>
            <span className="form-label">Tips</span>
            <input className="input-box" type="text" value={tips} onChange={e => updatePrice(e.target.value, setTips)}/>
            <span className="form-label">Boss in-charge of Sale</span>
            <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
            {isWarningMessageVisible && warningMessageComponent(warningMessage)}
            {isStatusMessagesVisible && statusMessageComponent()}
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <Loader />
                    : inactiveButton()}
        </div>
))
}

export default SubmitOrderForm;
