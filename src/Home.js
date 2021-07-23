import logo from "./assets/logo_transparent.png";
import React from "react";

const Home = (props) => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="button" onClick={() => props.navigate("submitOrder")}>
                Submit an Order
            </div>
        </div>
    )
}

export default Home
