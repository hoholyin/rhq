import logo from "../assets/logo_transparent.png";
import InventoryList from "./InventoryList";
import {apiEndpoint, updatePrice} from "../common";
import {getRequest, postRequest} from "../requestBuilder";
import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import "./checkInventoryPage.css"
import back from "../assets/back.png";
import refresh from "../assets/refresh.png";
import cross from "../assets/cross.png";

const CheckInventoryPage = (props) => {
    const [inventoryList, setInventoryList] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedCode, setSelectedCode] = useState("")
    const [indicatorInformation, setIndicatorInformation] = useState([]);
    const [isLoadingSelection, setIsLoadingSelection] = useState(true);

    useEffect(() => {
        refreshInventory();
    }, [])

    const search = (searchQuery) => {
        setQuery(searchQuery)
        const allWords = searchQuery.split(" ")
        const filteredItems = allInventories.filter((e) => {
            for (const word of allWords) {
                if (!e.code.toLowerCase().includes(word.toLowerCase())) {
                    return false
                }
            }
            return true
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
        setIndicatorInformation(allIndicatorObjects)
        setSelectedCode(code);
        setIsLoadingSelection(false)
    }

    const unselectItem = () => {
        setSelectedCode("")
    }

    const selectedCodeModal = () => {
        return (
            <div className="selected-code-modal">
                <div className="selected-code-heading">
                    <span className="selected-item-name">{selectedCode}</span>
                    <div className="remove-selection" onClick={() => unselectItem()}>
                        <img src={cross} className="remove-selection-icon" alt="logo"/>
                    </div>
                </div>
                <div className="indicator-container">
                    {indicatorInformation.map((obj) => {
                        return (
                            <div className="indicator-column">
                                <div className="indicator-header">
                                    {obj.name}
                                </div>
                                <div className="indicator-value">
                                    {obj.val}
                                </div>
                            </div>
                        )
                    })}
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
            <input className="input-box" type="text" onChange={e => search(e.target.value)}/>
            {selectedCode !== ""
                ? isLoadingSelection ? <Loader /> : selectedCodeModal()
                : null }
            <div className="inventory-list-container">
                {isLoading
                    ? <Loader />
                    :<InventoryList inventoryList={inventoryList} elementOnClick={selectCode}/>}
            </div>
        </div>
    )
}

export default CheckInventoryPage;
