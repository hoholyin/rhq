import logo from "./assets/logo_transparent.png";
import React from "react";

const Home = (props) => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="button" onClick={() => props.navigate("checkInventory")}>
                Check inventory
            </div>
            <div className="button" onClick={() => props.navigate("submitOrder")}>
                Submit an Order
            </div>
            <div className="button" onClick={() => props.navigate("addExpenses")}>
                Add an Expense
            </div>
        </div>
    )
}

export default Home
