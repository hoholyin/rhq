import logo from "../assets/logo_transparent.png";
import InventoryList from "./InventoryList";
import {apiEndpoint, containsWord, isBossCorrect, matchingSn, updatePrice} from "../common";
import {getRequest, postRequest} from "../requestBuilder";
import React, {useEffect, useState} from "react";
import "./checkInventoryPage.css"
import back from "../assets/back.png";
import refresh from "../assets/refresh.png";
import cross from "../assets/cross.png";
import RHQLoader from "../RHQLoader";

const CheckInventoryPage = (props) => {
    const [inventoryList, setInventoryList] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedCode, setSelectedCode] = useState("")
    const [selectedSn, setSelectedSn] = useState("")
    const [indicatorInformation, setIndicatorInformation] = useState([]);
    const [isLoadingSelection, setIsLoadingSelection] = useState(true);
    const [sellingPrice, setSellingPrice] = useState("$")
    const [oldSellingPrice, setOldSellingPrice] = useState("$")
    const [bossName, setBossName] = useState("")
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        refreshInventory();
    }, [])

    const search = (searchQuery) => {
        setQuery(searchQuery)
        if (searchQuery === "") {
            return
        }
        const allWords = searchQuery.split(" ")
        const filteredItems = allInventories.filter((e) => {
            return containsWord(e, allWords) || matchingSn(e, searchQuery)
        })
        setInventoryList(filteredItems)
    }

    const refreshInventory = async () => {
        setIsLoading(true)
        const inventoryListObject = await getRequest(apiEndpoint + '/inventory')
        const allInventories = inventoryListObject.data.allInventories
        allInventories.map((e) => {
            e.name = e.code
            e.name = e.name.replaceAll("NA", "")
            e.name = e.name.replaceAll("Phone accessories", "")
            e.name = e.name.replaceAll("Airpods case", "")
            e.name = e.name.replaceAll("Phone case", "")
            return e
        })
        setAllInventories(allInventories)
        setInventoryList(allInventories)
        setIsLoading(false)
    }

    const selectCode = async (code) => {
        setSelectedCode("a")
        setIsLoadingSelection(true)
        const requestObj = {
            code: code
        }
        const sn = allInventories.filter(e => e.code === code)[0].sn
        setSelectedSn(sn)
        const allIndicatorsObject = await postRequest(apiEndpoint + '/indicator', requestObj)
        const allIndicators = allIndicatorsObject.data.allIndicators.map((x) => {
            return x.replaceAll(/\s/g, '').length === 0 ? 0 : x;
        })
        const allIndicatorObjects = [
            {
                name: 'Units Sold',
                val: allIndicators[0]
            },
            {
                name: 'Stock in Qty Units',
                val: allIndicators[1]
            },
            {
                name: 'Restock Count',
                val: allIndicators[2]
            },
            {
                name: 'Margin',
                val: allIndicators[3]
            }
        ];
        const sellingPriceRequestObj = {
            code: code
        }
        const sellingPriceObj = await postRequest(apiEndpoint + '/getSellingPrice', sellingPriceRequestObj)
        const sellingPrice = sellingPriceObj.data.sellingPrice
        setSellingPrice(sellingPrice)
        setOldSellingPrice(sellingPrice)
        setIndicatorInformation(allIndicatorObjects)
        setSelectedCode(code);
        setIsLoadingSelection(false)
    }

    const unselectItem = () => {
        setSelectedCode("")
    }

    const updateSellingPrice = async () => {
        setSubmitting(true)
        const correctBoss = await isBossCorrect(bossName)
        if (!correctBoss) {
            setSubmitting(false)
            return
        }
        const dataObject = {
            code: selectedCode,
            sellingPrice: sellingPrice
        }
        await postRequest(apiEndpoint + "/setSellingPrice", dataObject)
        const sellingPriceRequestObj = {
            code: selectedCode
        }
        const sellingPriceObj = await postRequest(apiEndpoint + '/getSellingPrice', sellingPriceRequestObj)
        const localSellingPrice = sellingPriceObj.data.sellingPrice
        setSellingPrice(localSellingPrice)
        setOldSellingPrice(localSellingPrice)
        setSubmitting(false)
    }

    const confirmationContainer = () => {
        return (
            <div className="confirmation-container">
                <span className="form-label">Boss</span>
                <div className="confirmation-input-row">
                    <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
                    {submitting ? <RHQLoader message={""}/> : <div className="form-button-confirmation" onClick={updateSellingPrice}>Update Price</div> }
                </div>
            </div>
        )
    }

    const selectedCodeModal = () => {
        return (
            <div className="inv-selected-code-modal">
                <span className="inv-selected-code-sn">{selectedSn}</span>
                <div className="inv-selected-code-heading">
                    <span className="inv-selected-item-name">{selectedCode}</span>
                    <div className="inv-remove-selection" onClick={() => unselectItem()}>
                        <img src={cross} className="remove-selection-icon" alt="logo"/>
                    </div>
                </div>
                <div className="indicator-container">
                    {indicatorInformation.map((obj) => {
                        return (
                            <div className="indicator-column">
                                <div className="indicator-header">{obj.name}</div>
                                <div className="indicator-value">{obj.val}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="selling-price-container">
                    <span className="selling-price-header">SELLING PRICE</span>
                    <input className="input-box" type="text" value={sellingPrice} onChange={e => updatePrice(e.target.value, setSellingPrice)}/>
                    {sellingPrice !== oldSellingPrice && confirmationContainer()}
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            <div className="button-containers">
                <div className="back-button-container" onClick={() => props.navigate("")}>
                    <img src={back} className="back-button interactive" alt="back"/>
                </div>
                <div className="refresh-button-container" onClick={refreshInventory}>
                    <img src={refresh} className="refresh-button interactive" alt="refresh"/>
                </div>
            </div>
            <div className="logo-container interactive" onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            {!isLoading && <input className="input-box" type="text" onChange={e => search(e.target.value)}/>}
            {selectedCode !== ""
                ? isLoadingSelection ? <RHQLoader message={"Can wait abit anot..."}/> : selectedCodeModal()
                : null }
            <div className="inventory-list-container">
                {isLoading
                    ? <RHQLoader message={"Getting inventory list..."}/>
                    : <InventoryList inventoryList={inventoryList} elementOnClick={selectCode} nameOnly={false}/>}
            </div>
        </div>
    )
}

export default CheckInventoryPage;
