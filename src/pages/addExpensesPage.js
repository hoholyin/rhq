import logo from "../assets/logo_transparent.png";
import React from "react";
import "./addExpensesPage.css"
import AddExpensesForm from "./addExpensesForm";

const AddExpensesPage = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <div onClick={() => props.navigate("")}>
                    <img src={logo} className="submit-order-app-logo" alt="logo"/>
                </div>
                <AddExpensesForm navigate={props.navigate}/>
            </header>
        </div>
    );
}

export default AddExpensesPage;
