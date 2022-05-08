import logo from "../assets/logo_transparent.png";
import React from "react";
import "./addPurchasePage.css"
import AddPurchaseForm from "./addPurchaseForm";

const AddPurchasePage = (props) => {
    return (
        <div className="App">
            <div onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            <AddPurchaseForm navigate={props.navigate}/>
        </div>
    )
}

export default AddPurchasePage
