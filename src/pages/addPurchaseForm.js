import React, {useEffect, useState} from "react";
import {getRequest, postRequest} from "../requestBuilder";
import {
    apiEndpoint,
    checkItemRow, codeExists,
    createCode, generateMonth, generateNextCashInOutIndexNumber,
    generateTodayDate,
    isBossCorrect,
    isInteger,
    isPrice, toLocObjectArray, toLocString,
    updatePrice
} from "../common";
import cross from "../assets/cross.png";
import RHQLoader from "../RHQLoader";

const AddPurchaseForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [bossName, setBossName] = useState("")
    const [isWarningMessageVisible, setWarningMessageVisible] = useState(false)
    const [warningMessage, setWarningMessage] = useState("")

    const [supplier, setSupplier] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [brandsList, setBrandsList] = useState([])
    const [modelsList, setModelsList] = useState([])
    const [colorsList, setColorsList] = useState([])
    const [descsList, setDescsList] = useState([])

    const [itemList, setItemList] = useState([])
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        loadDefaultProperties()
    }, [])

    const loadDefaultProperties = async () => {
        setIsLoading(true)
        const propertiesListObject = await getRequest(apiEndpoint + '/getProperties')
        const allCategories = propertiesListObject.data.allCategories
        const allBrands = propertiesListObject.data.allBrands
        const allModels = propertiesListObject.data.allModels
        const allColors = propertiesListObject.data.allColors
        const allDescs = propertiesListObject.data.allDescs
        setCategoryList(allCategories)
        setBrandsList(allBrands)
        setModelsList(allModels)
        setColorsList(allColors)
        setDescsList(allDescs)
        setIsLoading(false)
    }

    const addItem = () => {
        const oldItemList = itemList
        const newItemList = [... oldItemList, {
            index: oldItemList.length,
            category: "",
            brand: "",
            model: "",
            color: "",
            desc: "",
            total_amt: "$",
            qty: "",
        }]
        setItemList(newItemList)
    }

    const setProperty = (index, property, value) => {
        const oldItemList = [... itemList]
        if (property === "total_amt" && !isPrice(value)) {
            return
        }
        if (property === "qty" && !isInteger(value) && value !== "") {
            return
        }
        oldItemList[index][property] = value
        setItemList(oldItemList)
    }

    const propertyListComponent = (index, property, propertyList) => {
        const value = itemList[index][property]
        if (value === "" || propertyList.includes(value.toUpperCase())) {
            return
        }
        return (
            propertyList.filter((e) => e.includes(value.toUpperCase())).map((e) => {
                return (
                    <div className="search-item-row" onClick={() => setProperty(index, property, e)}>
                        <span className="search-item-name">{e}</span>
                    </div>
                )
            })
        )
    }

    const canSubmit = () => {
        const allBlanksFilled = itemList.map((e) => {
            return e.category !== "" && e.brand !== "" && e.model !== "" && e.color !== "" && e.desc !== ""
        }).filter((b) => !b).length === 0
        return itemList.length > 0 && allBlanksFilled && supplier !== "" && invoiceNumber !== ""
    }

    const deleteItem = (index) => {
        const oldItemList = [... itemList]
        const newItemList = oldItemList.filter((e) => e.index !== index).map((e) => {
            e.index = e.index > index ? e.index - 1 : e.index
            return e
        })
        setItemList(newItemList)
    }

    const itemPropertiesComponent = (index) => {
        return (
            <div>
                <div className="purchase-item-header-row">
                    <span className="purchase-item-header">{"Item #" + (index + 1)}</span>
                    <div className="remove-selection" onClick={() => {deleteItem(index)}}>
                        <img src={cross} className="remove-selection-icon" alt="logo"/>
                    </div>
                </div>
                <span className="form-label">Category</span>
                <input className="input-box" type="text" value={itemList[index].category} onChange={e => setProperty(index, "category", e.target.value)}/>
                {propertyListComponent(index, "category", categoryList)}
                <span className="form-label">Brand</span>
                <input className="input-box" type="text" value={itemList[index].brand} onChange={e => setProperty(index, "brand", e.target.value)}/>
                {propertyListComponent(index, "brand", brandsList)}
                <span className="form-label">Model</span>
                <input className="input-box" type="text" value={itemList[index].model} onChange={e => setProperty(index, "model", e.target.value)}/>
                {propertyListComponent(index, "model", modelsList)}
                <span className="form-label">Colour</span>
                <input className="input-box" type="text" value={itemList[index].color} onChange={e => setProperty(index, "color", e.target.value)}/>
                {propertyListComponent(index, "color", colorsList)}
                <span className="form-label">Description</span>
                <input className="input-box" type="text" value={itemList[index].desc} onChange={e => setProperty(index, "desc", e.target.value)}/>
                {propertyListComponent(index, "desc", descsList)}
                <span className="form-label">Total Amount</span>
                <input className="input-box" type="text" value={itemList[index].total_amt} onChange={e => setProperty(index, "total_amt", e.target.value)}/>
                <span className="form-label">Quantity</span>
                <input className="input-box" type="text" value={itemList[index].qty} onChange={e => setProperty(index, "qty", e.target.value)}/>
            </div>
        )
    }

    const submitPurchase = async () => {
        setSubmitting(true)
        const correctBoss = await isBossCorrect(bossName)
        if (!correctBoss) {
            setWarningMessage("Incorrect boss")
            setWarningMessageVisible(true)
            setSubmitting(false)
            return
        }
        const itemListCoded = itemList.map((item) => {
            item.code = createCode(item.category, item.brand, item.model, item.color, item.desc)
            return item
        })
        // update new cost first
        const today = generateTodayDate()
        for (let i = 0; i < itemListCoded.length; i++) {
            const item = itemListCoded[i]
            const itemExists = await codeExists(item.code)
            if (!itemExists) {
                const addItemObj = {
                    category: item.category.toUpperCase(),
                    brand: item.brand.toUpperCase(),
                    model: item.model.toUpperCase(),
                    color: item.color.toUpperCase(),
                    desc: item.desc.toUpperCase(),
                    month: generateMonth()
                }
                await postRequest(apiEndpoint + '/inventory', addItemObj)
            }
            const data = {
                code: item.code,
                total_amt: item.total_amt,
                newQty: item.qty
            }
            await postRequest(apiEndpoint + "/updateCost", data)
        }

        // update purchases
        for (let i = 0; i < itemListCoded.length; i++) {
            const item = itemListCoded[i]
            const data = {
                supplier: supplier,
                invoice_no: invoiceNumber,
                category: item.category,
                brand: item.brand,
                detailed: item.model,
                color: item.color,
                desc: item.desc,
                invoice_date: today,
                total_amt: item.total_amt,
                qty: item.qty
            }
            await postRequest(apiEndpoint + "/purchases", data)
        }
        // update new locations
        for (let i = 0; i < itemListCoded.length; i++) {
            const item = itemListCoded[i]
            const itemRow = await checkItemRow(item.code)
            const currLocationRes = await postRequest(apiEndpoint + '/inventoryGetLoc', {row: itemRow})
            const currLocation = toLocObjectArray(currLocationRes.data.inventoryLoc)
            let newLocations = [... currLocation, {name: "DE", qty: item.qty}]
            const updatedNewLocationsString = toLocString(newLocations)
            await postRequest(apiEndpoint + '/inventoryUpdateLoc', {row: itemRow, location: updatedNewLocationsString})
        }

        // add cce_out
        for (let i = 0; i < itemListCoded.length; i++) {
            const item = itemListCoded[i]
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
                date: today,
                description: item.code,
                amount: item.total_amt,
                remarks: "NA",
                row: currCashOutRow
            }
            await postRequest(apiEndpoint + '/cce_out', createLastCashOutObject)
        }
        props.navigate("orderSubmitted")
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={submitPurchase}>Submit Purchase</div>
        )
    }

    const inactiveButton = () => {
        return (
            <div className="form-button-inactive">Submit Purchase</div>
        )
    }

    const warningMessageComponent = (warningMessage) => {
        return (
            <span className="warning-message">{warningMessage}</span>
        )
    }

    return (
        <div className="form">
            <span className="form-header">Purchase Form</span>
            <span className="form-label">Supplier</span>
            <input className="input-box" type="text" onChange={e => setSupplier(e.target.value)}/>
            <span className="form-label">Invoice no</span>
            <input className="input-box" type="text" onChange={e => setInvoiceNumber(e.target.value)}/>
            {itemList.map((e) => {
                return itemPropertiesComponent(e.index)
            })}
            <div className="search-item-row" onClick={() => addItem()}>
                <span className="button-item-name">+ Add new item</span>
            </div>
            <span className="form-label">Boss in-charge</span>
            <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
            {isWarningMessageVisible && warningMessageComponent(warningMessage)}
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <RHQLoader message={"Submitting..."}/>
                    : inactiveButton()}
        </div>
    )
}

export default AddPurchaseForm;
