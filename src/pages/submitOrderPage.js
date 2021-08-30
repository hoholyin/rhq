import logo from "../assets/logo_transparent.png";
import React from "react";
import "./submitOrderPage.css"
import SubmitOrderForm from "./submitOrderForm";

const SubmitOrderPage = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <div onClick={() => props.navigate("")}>
                    <img src={logo} className="submit-order-app-logo" alt="logo"/>
                </div>
                <SubmitOrderForm navigate={props.navigate}/>
            </header>
        </div>
    );
}

export default SubmitOrderPage;
