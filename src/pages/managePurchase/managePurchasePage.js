import React, {useEffect, useState} from "react";
import back from "../../assets/back.png";
import refresh from "../../assets/refresh.png";
import logo from "../../assets/logo_transparent.png";
import RHQLoader from "../../RHQLoader";
import {apiEndpoint, isBossCorrect, toLocObjectArray, toLocString} from "../../common";
import {getRequest, postRequest} from "../../requestBuilder";
import PendingPurchaseList from "./pendingPurchaseList";

const ManagePurchasePage = (props) => {
    const [purchaseList, setPurchaseList] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [bossName, setBossName] = useState("")
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || document.documentElement.clientWidth < 400;

    useEffect(() => {
        refreshPurchases();
    }, [])

    const refreshPurchases = async () => {
        setIsLoading(true)
        const pendingPurchasesObject = await getRequest(apiEndpoint + '/purchases')
        const allPendingPurchases = pendingPurchasesObject.data.allPendingPurchases
        allPendingPurchases.map((o) => {
            o.selected = false
            return o
        })
        setPurchaseList(allPendingPurchases)
        setIsLoading(false)
    }

    const getSelectedPurchases = () => {
        return purchaseList.filter((obj) => obj.selected)
    }

    const submitPendingPurchases = async () => {
        setSubmitting(true)
        const correctBoss = await isBossCorrect(bossName)
        if (!correctBoss) {
            setSubmitting(false)
            return
        }
        const items = getSelectedPurchases().map((obj) => {
            let oldLoc = toLocObjectArray(obj.loc)
            const moveAmt = oldLoc.filter((obj) => obj.name === "DE")[0].qty
            // check if current boss has stock
            if (oldLoc.filter((obj) => obj.name.toUpperCase() === bossName.toUpperCase()).length === 0) {
                oldLoc.push({
                    name: bossName.toUpperCase(),
                    qty: 0
                })
            }
            const newLoc = oldLoc.filter((obj) => obj.name !== "DE")
                .map((obj) => {
                    if (obj.name.toUpperCase() === bossName.toUpperCase()) {
                        obj.qty = obj.qty + moveAmt
                    }
                    return obj
                })
            return {
                row: obj.row,
                loc: toLocString(newLoc)
            }
        })
        const dataObject = {items: items}
        await postRequest(apiEndpoint + '/deliveredPurchases', dataObject)
        setSubmitting(false)
        props.navigate("orderSubmitted")
    }

    const selectItem = (obj) => {
        const row = obj.row
        const selected = obj.val
        const updatedPurchases = purchaseList.map((o) => {
            if (o.row === row) {
                return {
                    ...o,
                    selected: selected
                }
            }
            return o
        })
        setPurchaseList(updatedPurchases)
    }

    const selectAllCheckbox = () => {
        const updatedPurchases = [...purchaseList]
        setPurchaseList(updatedPurchases.map((o) => {
            return {
                ...o,
                selected: true
            }
        }))
    }

    const canSubmit = () => {
        return bossName !== "" && submitting === false && getSelectedPurchases().length !== 0;
    }

    const inactiveButton = () => {
        return (
            <div className="form-button-inactive">Mark Purchases Delivered</div>
        )
    }

    const activeButton = () => {
        return (
            <div className="form-button" onClick={submitPendingPurchases}>Mark Purchases Delivered</div>
        )
    }

    return (
        <div className="App">
            <div className="button-containers">
                <div className="back-button-container" onClick={() => props.navigate("")}>
                    <img src={back} className="back-button interactive" alt="back"/>
                </div>
                <div className="refresh-button-container" onClick={refreshPurchases}>
                    <img src={refresh} className="refresh-button interactive" alt="refresh"/>
                </div>
            </div>
            <div className="logo-container interactive" onClick={() => props.navigate("")}>
                <img src={logo} className="submit-order-app-logo" alt="logo"/>
            </div>
            {isLoading
                ? <RHQLoader message={"Fetching pending purchases..."}/>
                : <div className="pending-orders">
                    <div className="form-button" onClick={selectAllCheckbox}>Select All Purchases</div>
                    <div className="pending-orders-list-container">
                        <PendingPurchaseList pendingPurchaseList={purchaseList} isMobile={isMobile}
                                           elementOnClick={selectItem}/>
                    </div>
                    <div className="boss-container">
                        <span className="form-label">Boss</span>
                        <input className="input-box" type="text" onChange={e => setBossName(e.target.value)}/>
                    </div>
                    {canSubmit()
                        ? activeButton()
                        : submitting
                            ? <RHQLoader message={"Marking as delivered..."}/>
                            : inactiveButton()}
                </div>
            }
        </div>
    )
}

export default ManagePurchasePage;
