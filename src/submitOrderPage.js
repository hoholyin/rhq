import logo from "./assets/logo_transparent.png";
import React from "react";
import {Link} from "react-router-dom";
import "./submitOrderPage.css"
import SubmitOrderForm from "./submitOrderForm";

function SubmitOrderPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">
                    <img src={logo} className="submit-order-app-logo" alt="logo"/>
                </Link>
                <SubmitOrderForm />
            </header>
        </div>
    );
}

export default SubmitOrderPage;
