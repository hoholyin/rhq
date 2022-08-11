import logo from "../../assets/logo_transparent.png";
import React from "react";
import "./submitOrderPage.css"
import SubmitOrderForm from "./submitOrderForm";
import back from "../../assets/back.png";

const SubmitOrderPage = (props) => {
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
            <SubmitOrderForm navigate={props.navigate}/>
        </div>
    );
}

export default SubmitOrderPage;
