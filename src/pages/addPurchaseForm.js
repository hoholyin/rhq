import React, {useEffect, useState} from "react";
import {getRequest} from "../requestBuilder";
import {apiEndpoint} from "../common";
import cross from "../assets/cross.png";
import RHQLoader from "../RHQLoader";

const AddPurchaseForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
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
            desc: ""
        }]
        setItemList(newItemList)
    }

    const setProperty = (index, property, value) => {
        const oldItemList = [... itemList]
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
            </div>
        )
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={() => {}}>Submit Purchase</div>
        )
    }

    const inactiveButton = () => {
        return (
            <div className="form-button-inactive">Submit Purchase</div>
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
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <RHQLoader message={"Submitting..."}/>
                    : inactiveButton()}
        </div>
    )
}

export default AddPurchaseForm;
