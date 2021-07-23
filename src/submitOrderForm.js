import {
    apiEndpoint, appleCategoryList,
    appleDetailedList, defaultColorList, defaultDescList,
    generateCode,
    generateNextInvoiceNumber,
    generateTodayDate, itemExists, naCategoryList, naDetailedList, samsungCategoryList,
    samsungDetailedList
} from "./common";
import {createRequestOptions} from "./requestBuilder";
import React, {useState} from "react";
import "./submitOrderForm.css";
import {radioSelection} from "./formComponents";
import Loader from "./Loader";

const SubmitOrderForm = (props) => {
    const [customerName, setCustomerName] = useState("");
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [detailed, setDetailed] = useState("")
    const [color, setColor] = useState("")
    const [desc, setDesc] = useState("")
    const [qty, setQty] = useState("1")
    const [discount, setDiscount] = useState("$0.00")
    const [status, setStatus] = useState("")
    const [remarks, setRemarks] = useState("NA")
    const [tips, setTips] = useState("$0.00")

    const [submitting, setSubmitting] = useState(false)

    const [detailedList, setDetailedList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [colorList, setColorList] = useState([])
    const [descList, setDescList] = useState([])

    const [warningMessage, setWarningMessage] = useState("")
    const [isWarningMessageVisible, setWarningMessageVisible] = useState(false)


    const checkItemRow = async () => {
        const code = generateCode(category, brand, detailed, color,desc)
        const getItemRowRO = createRequestOptions('POST', {code: code})
        const itemRowPromise = await fetch(apiEndpoint + '/inventoryRow', getItemRowRO)
        const itemRowResult = await itemRowPromise.json()
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

    const isPrice = (price) => {
        if (!price.startsWith("$")) {
            return false
        }
        try {
            const trimmed = price.substring(1)
            if (trimmed.includes(".")) {
                const pieces = trimmed.split(".")
                if (pieces.length !== 2) {
                    return false
                }
                parseInt(pieces[0])
                parseInt(pieces[1])
                return true
            }
        } catch (err) {
            return false
        }
    }

    const submitOrder = async () => {
        setSubmitting(true)
        resetWarningMessages()
        if (!/^[1-9]\d*$/.test(qty)) {
            setWarning("Invalid quantity!")
            return
        }

        setDiscount(discount === "$" ? "$0.00" : discount)
        setTips(tips === "$" ? "$0.00" : tips)

        if (!isPrice(discount)) {
            setWarning("Invalid discount!")
            setSubmitting(false)
            return
        }

        if (!isPrice(tips)) {
            setWarning("Invalid tips!")
            setSubmitting(false)
            return
        }

        const itemRow = await checkItemRow();
        console.log(itemRow)
        if (!itemExists(itemRow)) {
            setWarning("Item does not exists")
            setSubmitting(false)
            return
        }

        const getItemQtyRO = createRequestOptions('POST', {row: itemRow})
        const itemQtyPromise = await fetch(apiEndpoint + '/inventoryQty', getItemQtyRO)
        const itemQtyResult = await itemQtyPromise.json()
        const itemQty = itemQtyResult.data
        const stockIn = parseInt(itemQty.stockIn)
        const stockOut = parseInt(itemQty.stockOut)
        if (stockIn + stockOut <= 0) {
            setWarning("Out of stock for item!")
            setSubmitting(false)
            return
        }
        const updateItemQtyRO = createRequestOptions('POST', {row: itemRow, newQty: stockOut - 1})
        await fetch(apiEndpoint + '/inventoryUpdateQty', updateItemQtyRO)

        const getOrdersInfoRO = createRequestOptions('GET')
        const ordersInfoPromise = await fetch(apiEndpoint + '/orders', getOrdersInfoRO)
        const ordersInfoResult = await ordersInfoPromise.json()
        const ordersSize = parseInt(ordersInfoResult.data.size)
        const lastInvoiceNumber = ordersInfoResult.data.lastInvoiceNumber

        const nextOrderIndex = ordersSize + 1
        const nextOrderRow = nextOrderIndex + 1

        const currInvoiceNumber = generateNextInvoiceNumber(lastInvoiceNumber)
        const today = generateTodayDate()

        const order = {
            row_number: nextOrderRow,
            customer: customerName,
            invoice_number: currInvoiceNumber,
            invoice_date: today,
            category: category,
            brand: brand,
            detailed: detailed,
            color: color,
            desc: desc,
            qty: qty,
            discount: discount,
            status: status,
            remarks: remarks,
            tips: tips,
        }
        const createOrderRO = createRequestOptions('POST', order)
        await fetch(apiEndpoint + '/order', createOrderRO)
        setSubmitting(false)
        props.navigate("orderSubmitted")
    }

    const canSubmit = () => {
        return customerName !== ""
            && brand !== ""
            && category !== ""
            && detailed !== ""
            && color !== ""
            && desc !== ""
            && status !== ""
            && submitting === false
    }

    const updateBrand = (brand) => {
        console.log("settin brand to " + brand)
        setCategoryList(["NA"])
        setDetailedList(["NA"])
        setColorList(defaultColorList)
        setDescList(["NA"])
        switch (brand) {
            case "Apple":
                setDetailedList(appleDetailedList)
                setCategoryList(appleCategoryList)
                break;
            case "Samsung":
                setDetailedList(samsungDetailedList)
                setCategoryList(samsungCategoryList)
                break;
            case "NA":
                setDetailedList(naDetailedList)
                setCategoryList(naCategoryList)
                break;
            default:
                break;
        }
        setBrand(brand)
    }

    const updateCategory = (category) => {
        category === "Screen protector" ? setColorList(["NA"]) : setColorList(defaultColorList)
        category === "Phone case" ? setDescList(defaultDescList) : setDescList(["NA"])
        setCategory(category)
    }

    const updatePrice = (price, callback) => {
        if (!price.startsWith("$")) {
            callback("$")
            return
        }
        callback(price)
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

    return (
        <div className="form">
            <span className="form-header">Order Form</span>
            <span className="form-label">Customer's name</span>
            <input className="input-box" type="text" onChange={e => setCustomerName(e.target.value)}/>
            <span className="form-label">Brand</span>
            {radioSelection("brand", ["Apple", "Samsung", "NA"], updateBrand)}
            <span className="form-label">Category</span>
            {radioSelection("category", categoryList, updateCategory)}
            <span className="form-label">Detailed</span>
            {radioSelection("detailed", detailedList, setDetailed)}
            <span className="form-label">Colour</span>
            {radioSelection("color", colorList, setColor)}
            <span className="form-label">Description</span>
            {radioSelection("desc", descList, setDesc)}
            <span className="form-label">Quantity</span>
            <input className="input-box" type="number" value={qty} onChange={e => setQty(e.target.value)}/>
            <span className="form-label">Discount</span>
            <input className="input-box" type="text" value={discount} onChange={e => updatePrice(e.target.value, setDiscount)}/>
            <span className="form-label">Status</span>
            {radioSelection("status", ["PENDING", "PAID"], setStatus)}
            <span className="form-label">Remarks</span>
            <input className="input-box" type="text" value={remarks} onChange={e => setRemarks(e.target.value)}/>
            <span className="form-label">Tips</span>
            <input className="input-box" type="text" value={tips} onChange={e => updatePrice(e.target.value, setTips)}/>
            {isWarningMessageVisible ? warningMessageComponent(warningMessage) : null}
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <Loader />
                    : inactiveButton()}
        </div>
    )
}

export default SubmitOrderForm;
