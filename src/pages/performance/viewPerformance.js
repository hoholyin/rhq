import back from "../../assets/back.png";
import refresh from "../../assets/refresh.png";
import logo from "../../assets/logo_transparent.png";
import RHQLoader from "../../RHQLoader";
import React, {useEffect, useState} from "react";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";
import "./viewPerformance.css";
import PerformanceGraph from "./performanceGraph";

const ViewPerformancePage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [sales, setSales] = useState(0)
    const [cog, setCog] = useState(0)
    const [profit, setProfit] = useState(0)
    const [expense, setExpense] = useState(0)
    const [netProfit, setNetProfit] = useState(0)
    const [checkBalance, setCheckBalance] = useState("$0.00");
    useEffect(() => {
        refreshSalesFigure();
    }, [])

    const refreshSalesFigure = async () => {
        setIsLoading(true)
        const salesFigureObj = await getRequest(apiEndpoint + '/salesFigure')
        const salesFigure = salesFigureObj.data.salesFigure
        setSales(salesFigure[0])
        setCog(salesFigure[1])
        setProfit(salesFigure[2])
        setExpense(salesFigure[3])
        setNetProfit(salesFigure[4])
        const checkBalanceObj = await getRequest(apiEndpoint + '/checkBalance');
        const checkBalance = checkBalanceObj.checkBalance[0];
        setCheckBalance(checkBalance);
        setIsLoading(false)
    }

    const getMonth = () => {
        const d = new Date();
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return months[d.getMonth()].toUpperCase() + " " + d.getFullYear()
    }

    const salesFigureModal = () => {
       return (
           <div className="sales-figure-modal">
               <span className="sales-figure-header">{getMonth()}</span>
               <div className="sales-figure-line"></div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Sales</span>
                   <span className="sales-figure-row-figure">${sales}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">COG</span>
                   <span className="sales-figure-row-figure">${cog}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Gross Profit</span>
                   <span className="sales-figure-row-figure">${profit}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Total expense</span>
                   <span className="sales-figure-row-figure">${expense}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Net Profit/loss</span>
                   <span className="sales-figure-row-figure">${netProfit}</span>
               </div>
           </div>
       )
    }

    return (
        <div className="App">
            <div className="button-containers">
                <div className="back-button-container" onClick={() => props.navigate("")}>
                    <img src={back} className="back-button interactive" alt="back"/>
                </div>
                <div className="refresh-button-container" onClick={refreshSalesFigure}>
                    <img src={refresh} className="refresh-button interactive" alt="refresh"/>
                </div>
            </div>
            <div className="logo-container interactive" onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            {isLoading ? <RHQLoader message={"Getting sales figures"} /> : salesFigureModal()}
            {PerformanceGraph()}
            <div className="check-balance-container">
                {isLoading && <RHQLoader message={"Retrieving check balance"} />}
                {!isLoading && <span>{"CHECK BALANCE: " + checkBalance}</span>}
            </div>
        </div>
    )
}

export default ViewPerformancePage;
