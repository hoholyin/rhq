import logo from '../../assets/logo_transparent.png';
import '../../Home.css';
import React, {useEffect, useState} from "react";
import "./orderSubmittedPage.css";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";
import RHQLoader from "../../RHQLoader";

const OrderSubmittedPage = (props) => {
    const [checkBalance, setCheckBalance] = useState("$0.00");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getCheckBalance();
    }, []);

    const getCheckBalance = async () => {
        setIsLoaded(false);
        const checkBalanceObj = await getRequest(apiEndpoint + '/checkBalance');
        const checkBalance = checkBalanceObj.checkBalance[0];
        setCheckBalance(checkBalance);
        setIsLoaded(true);
    }


    return (
        <div className="App">
            <div onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            <span className="submitted-message">Submitted!</span>
            <div className="check-balance-container">
                {!isLoaded && <RHQLoader message={"Retrieving check balance"} />}
                {isLoaded && <span>{"CHECK BALANCE: " + checkBalance}</span>}
            </div>
            <div onClick={() => props.navigate("")}>
                <div className="button">Back to Homepage</div>
            </div>
        </div>
    );
}

export default OrderSubmittedPage;
