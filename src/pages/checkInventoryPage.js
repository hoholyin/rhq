import logo from "../assets/logo_transparent.png";
import InventoryList from "./InventoryList";
import {apiEndpoint} from "../common";
import {getRequest} from "../requestBuilder";
import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import "./checkInventoryPage.css"
import back from "../assets/back.png";
import refresh from "../assets/refresh.png";

const CheckInventoryPage = (props) => {
    const [inventoryList, setInventoryList] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        refreshInventory();
    })

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
        search(query)
        setIsLoading(false)
    }

    return (
        <div className="App">
            <header className="App-header">
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
                <div className="inventory-list-container">
                    {isLoading
                        ? <Loader />
                        :<InventoryList inventoryList={inventoryList}/>}
                </div>
            </header>
        </div>
    )
}

export default CheckInventoryPage;
