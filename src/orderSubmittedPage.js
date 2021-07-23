import logo from './assets/logo_transparent.png';
import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import "./orderSubmittedPage.css";

function OrderSubmittedPage() {
    return (
        <div className="App">
            <div className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
                <span className="submitted-message">Order submitted!</span>
                <Link className="links" to="/">
                    <div className="button">Back to Homepage</div>
                </Link>
            </div>
        </div>
    );
}

export default OrderSubmittedPage;
