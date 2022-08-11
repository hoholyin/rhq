import logo from "./assets/logo_transparent.png";
import React, {useEffect} from "react";
import {createRequestOptions} from "./requestBuilder";
import {apiEndpoint} from "./common";

const Home = (props) => {
    useEffect(() => {
        triggerBackend();
    })

    const triggerBackend = async () => {
        const getBossNamesRO = createRequestOptions('GET')
        await fetch(apiEndpoint + '/bossNames', getBossNamesRO)
    }

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="button" onClick={() => props.navigate("viewPerformance")}>
                View Performance
            </div>
            <div className="button" onClick={() => props.navigate("checkInventory")}>
                Check inventory
            </div>
            <div className="button" onClick={() => props.navigate("pendingOrders")}>
                Pending Orders
            </div>
            <div className="button" onClick={() => props.navigate("submitOrder")}>
                Submit an Order
            </div>
            <div className="button" onClick={() => props.navigate("addExpenses")}>
                Add an Expense
            </div>
            <div className="button" onClick={() => props.navigate("addPurchase")}>
                Add a Purchase
            </div>
            <div className="button" onClick={() => props.navigate("managePurchase")}>
                Manage Purchases
            </div>
        </div>
    )
}

export default Home
