import logo from "../assets/logo_transparent.png";
import React from "react";
import "./addPurchasePage.css"
import AddPurchaseForm from "./addPurchaseForm";
import back from "../assets/back.png";

const AddPurchasePage = (props) => {
    return (
        <div className="App">
            <div className="button-containers">
                <div className="back-button-container" onClick={() => props.navigate("")}>
                    <img src={back} className="back-button interactive" alt="back"/>
                </div>
            </div>
            <div onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            <AddPurchaseForm navigate={props.navigate}/>
        </div>
    )
}

export default AddPurchasePage
