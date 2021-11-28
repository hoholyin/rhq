import logo from "../assets/logo_transparent.png";
import {apiEndpoint, isBossCorrect} from "../common";
import {getRequest, postRequest} from "../requestBuilder";
import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import "./pendingOrdersPage.css"
import back from "../assets/back.png";
import refresh from "../assets/refresh.png";
import PendingOrdersList from "./pendingOrdersList";

const PendingOrdersPage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [ordersList, setOrdersList] = useState([])
    const [bossName, setBossName] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [cbList, setCbList] = useState([])
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || document.documentElement.clientWidth < 400;

    useEffect(() => {
        refreshOrders();
    }, [])

    const refreshOrders = async () => {
        setIsLoading(true)
        const pendingOrdersObject = await getRequest(apiEndpoint + '/pendingOrders')
        const allPendingOrders = pendingOrdersObject.data.allPendingOrders
        allPendingOrders.map((o) => {
            o.selected = false
            return o
        })
        setOrdersList(allPendingOrders)
        setIsLoading(false)
    }

    const addCbToSelection = (item) => {
        setCbList([...cbList, item]);
    }

    const submitPendingOrders = async () => {
        setSubmitting(true)
        const correctBoss = await isBossCorrect(bossName)
        if (!correctBoss) {
            setSubmitting(false)
            return
        }
        const selectedRows = getSelectedOrders().map((obj) => obj.row)
        const dataObject = {
            rows: selectedRows
        }
        await postRequest(apiEndpoint + '/pendingOrders', dataObject)
        setSubmitting(false)
        props.navigate("orderSubmitted")
    }

    const getSelectedOrders = () => {
        return cbList.filter((obj) => obj.cb.target.checked)
    }

    const canSubmit = () => {
        return bossName !== "" && submitting === false && getSelectedOrders().length !== 0;
    }

    const inactiveButton = () => {
        return (
            <div className="form-button-inactive">Clear Pending Orders</div>
        )
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={submitPendingOrders}>Clear Pending Orders</div>
        )
    }

    return (
        <div className="App">
            <div className="button-containers">
                <div className="back-button-container" onClick={() => props.navigate("")}>
                    <img src={back} className="back-button interactive" alt="back"/>
                </div>
                <div className="refresh-button-container" onClick={refreshOrders}>
                    <img src={refresh} className="refresh-button interactive" alt="refresh"/>
                </div>
            </div>
            <div className="logo-container interactive" onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            <div className="pending-orders-list-container">
                {isLoading
                    ? <Loader />
                    : <PendingOrdersList pendingOrdersList={ordersList} isMobile={isMobile} elementOnClick={addCbToSelection}/>}
            </div>
            <div className="boss-container">
                <span className="form-label">Boss</span>
                <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
            </div>
            {canSubmit()
                ? activeButton()
                : submitting
                    ? <Loader />
                    : inactiveButton()}
        </div>
    )
}

export default PendingOrdersPage;
