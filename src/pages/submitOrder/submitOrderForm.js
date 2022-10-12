import {
    addPrice,
    apiEndpoint, checkItemRow, containsWord,
    generateNextCashInOutIndexNumber,
    generateNextInvoiceNumber,
    generateTodayDate, isBossCorrect, isInteger, isPrice, matchingSn, subtractPrice,
    toLocObjectArray, toLocString, updatePrice
} from "../../common";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import React, {useEffect, useState} from "react";
import "./submitOrderForm.css";
import {getRequest, postRequest} from "../../requestBuilder";
import RHQLoader from "../../RHQLoader";

const SubmitOrderForm = (props) => {
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState("$0.00")
    const [stamps, setStamps] = useState("$0.60")
    const [remarks, setRemarks] = useState("Pending")
    const [tips, setTips] = useState("$0.00")
    const [bossName, setBossName] = useState("")
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [inventoryList, setInventoryList] = useState([]);
    const [blacklist, setBlacklist] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isInBlacklist, setIsInBlacklist] = useState(false);

    const [isStatusMessagesVisible, setStatusMessagesVisible] = useState(false)
    const [bossCheckCorrect, setBossCheckCorrect] = useState(0)
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
        setUpOrderForm()
    }, [])

    const setUpOrderForm = async () => {
        setIsLoading(true)
        const inventoryListObject = await getRequest(apiEndpoint + '/inventory')
        const allInventories = inventoryListObject.data.allInventories
        allInventories.map((e) => {
            e.name = e.code
            return e
        })
        setAllInventories(allInventories)
        setInventoryList(allInventories)
        const allNames = await getBlacklist()
        setBlacklist(allNames)
        setIsLoading(false)
    }

    const getBlacklist = async () => {
        const blacklistObject = await getRequest(apiEndpoint + '/blacklist')
        return blacklistObject.data.allNames
    }


    const setQty = (code, qty) => {
        if (!isInteger(qty) || parseInt(qty) < 0) {
            qty = 0
        }
        const oldItems = [...items]
        oldItems.map((item) => {
            if (item.obj.code === code) {
                item.qty = qty
            }
            return item
        })
        setItems(oldItems)
        let newPrice = "$0.00"
        oldItems.forEach((item) => {
            for (let i = 0; i < item.qty; i++) {
                newPrice = addPrice(newPrice, item.obj.price)
            }
        })
        updatePrice(newPrice, setAmount)
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
        setItemInStockCheckCorrect(0)
        setUpdatingInventoryCheckCorrect(0)
        setSubmittingOrderCheckCorrect(0)
        setUpdatingAccountsCheckCorrect(0)
    }

    const verifyAndSetCustomerName = (name) => {
        const inBlacklist = blacklist.map(n => n.toUpperCase()).includes(name.toUpperCase())
        setIsInBlacklist(inBlacklist);
        setCustomerName(name)
    }

    const submitOrder = async () => {
        try {
            setStatusMessagesVisible(false)
            setSubmitting(true)
            resetWarningMessages()
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                if (!/^[1-9]\d*$/.test(item.qty)) {
                    setWarning("Invalid quantity!")
                    setSubmitting(false)
                    return
                }
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

            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const itemRow = await checkItemRow(item.obj.code);
                const currLocationRes = await postRequest(apiEndpoint + '/inventoryGetLoc', {row: itemRow})
                const currLocation = toLocObjectArray(currLocationRes.data.inventoryLoc)
                let inStock = false
                let noStock = true
                currLocation.forEach((e) => {
                    if (e.name.toUpperCase() === bossName.toUpperCase()) {
                        inStock = e.qty >= item.qty
                        if (inStock) {
                            noStock = false
                        }
                    }
                })
                if (noStock) {
                    setItemInStockCheckCorrect(2)
                    setSubmitting(false)
                    return
                }
                setItemInStockCheckCorrect(1)
                let updatedCurrLocation = currLocation.map((e) => {
                    if (e.name.toUpperCase() === bossName.toUpperCase()) {
                        return {
                            name: e.name,
                            qty: e.qty - item.qty
                        }
                    }
                    return e
                }).filter((e) => e.qty > 0)
                const updatedCurrLocationString = toLocString(updatedCurrLocation)
                await postRequest(apiEndpoint + '/inventoryUpdateLoc', {row: itemRow, location: updatedCurrLocationString})
            }
            setUpdatingInventoryCheckCorrect(1)

            const today = generateTodayDate()
            console.log(items);
            const originalAmt = items.map(item => item.obj.price).reduce((a, b) => addPrice(a, b), "$0.00")
            const discount = subtractPrice(originalAmt, amount);
            const getOrdersInfo = await getRequest(apiEndpoint + "/orders")
            const lastInvoiceNumber = getOrdersInfo.data.lastInvoiceNumber
            const firstInvoiceNumber = generateNextInvoiceNumber(lastInvoiceNumber)
            let nextSalesRow = parseInt(getOrdersInfo.data.lastSalesRow) + 1;
            console.log(nextSalesRow)
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const netSalesFormula = "=M{}-R{}".replace(/{}/g, nextSalesRow.toString())
                const cogNetFormula = "=T{}*L{}".replace(/{}/g, nextSalesRow.toString())
                nextSalesRow = nextSalesRow + 1;
                const currInvoiceNumber = generateNextInvoiceNumber(lastInvoiceNumber)
                const order = {
                    code: item.obj.code,
                    customer: customerName,
                    invoice_number: currInvoiceNumber,
                    invoice_date: today,
                    qty: item.qty,
                    amt: i === 0 ? subtractPrice(item.obj.price, discount) : item.obj.price,
                    tips: tips,
                    stamps: stamps,
                    remarks: remarks,
                    bossName: bossName.toUpperCase(),
                    address: address,
                    cog: item.obj.cost,
                    netSalesFormula: netSalesFormula,
                    cogNetFormula: cogNetFormula
                }
                await postRequest(apiEndpoint + '/order', order)
            }
            if (tips !== "$0.00") {
                const tipsObject = {
                    customer: customerName,
                    invoice_number: firstInvoiceNumber,
                    tipAmount: tips,
                    date: today
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
            const cashInDescription = "Sales - " + firstInvoiceNumber
            const currCashInRow = parseInt(lastCashInRow) + 1
            const createLastCashInObject = {
                indexNumber: currCashInIndex,
                date: today,
                description: cashInDescription,
                amount: addPrice(amount, tips),
                row: currCashInRow
            }
            await postRequest(apiEndpoint + '/cce_in', createLastCashInObject)
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
            return containsWord(e, allWords) || matchingSn(e, query)
        })
        setInventoryList(filteredItems)
    }

    const selectedCodeModal = () => {
        const allProcessedWords = items.map((item) => {
            const code = item.obj.code
            const processedWord = item.obj.code.replace(/NA-/, "").replace(/-/g, "\n")
            return { processedWord: processedWord, code: code }
        })
        return (
            <div className="selected-code-list">
                {allProcessedWords.map((processedWordObj) => {
                    return (
                        <div className="selected-code-modal">
                            <div className="qty-container">
                                <span className="form-label">Name</span>
                                <span className="selected-item-name">{processedWordObj.processedWord}</span>
                            </div>
                            <div className="qty-container">
                                <span className="form-label">Qty</span>
                                <input className="qty-input" type="number" defaultValue={1} onChange={e => setQty(processedWordObj.code, e.target.value)}/>
                            </div>
                            <div className="remove-selection" onClick={() => unselectItem(processedWordObj.code)}>
                                <img src={cross} className="remove-selection-icon" alt="logo"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const noItemsModal = () => {
        return (
            <div className="selected-code-modal">
                <span className="form-label">No Items Selected!</span>
            </div>
        )
    }

    const unselectItem = (code) => {
        const removed = items.filter((item) => item.obj.code !== code)
        setItems(removed)
        let totalPrice = "$0.00"
        removed.forEach((item) => {
            totalPrice = addPrice(totalPrice, item.obj.price)
        })
        updatePrice(totalPrice, setAmount)
    }

    const selectItem = (item) => {
        const itemObj = { obj: item, qty: 1}
        const added = [...items, itemObj]
        setItems(added)
        updatePrice(addPrice(amount, item.price), setAmount)
        setSearchQuery("")
    }

    return ( isLoading ? <RHQLoader message={"Creating form..."}/> : (
        <div className="form">
            <span className="form-header">Order Form</span>
            <span className="form-label">Customer's name</span>
            <input className="input-box" type="text" onChange={e => verifyAndSetCustomerName(e.target.value)}/>
            {isInBlacklist && <span className="warning-message">Customer in blacklist!</span>}
            <span className="form-label">Mailing Address</span>
            <input className="input-box" type="text" onChange={e => setAddress(e.target.value)}/>
            <span className="form-label">Search Item</span>
            <input className="input-box" placeholder="Start typing to search..." type="text" value={searchQuery} onChange={e => search(e.target.value)}/>
            {searchQuery !== "" && inventoryList.map((e) => {
                return (
                    <div className="search-item-row" onClick={() => selectItem(e)}>
                        <div className="search-item-row-container">
                            <span className="search-item-sn">{e.sn}</span>
                            <span className="search-item-name">{e.name}</span>
                        </div>
                    </div>
                )
            })}
            <span className="form-label">Selected Items</span>
            {items.length > 0 && selectedCodeModal()}
            {items.length === 0 && noItemsModal()}
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
                    ? <RHQLoader message={"Submitting..."}/>
                    : inactiveButton()}
        </div>
))
}

export default SubmitOrderForm;
