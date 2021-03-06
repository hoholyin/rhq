import logo from '../assets/logo_transparent.png';
import '../Home.css';
import React from "react";
import "./orderSubmittedPage.css";

const OrderSubmittedPage = (props) => {
    return (
        <div className="App">
            <div onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            <span className="submitted-message">Submitted!</span>
            <div onClick={() => props.navigate("")}>
                <div className="button">Back to Homepage</div>
            </div>
        </div>
    );
}

export default OrderSubmittedPage;
