import React from "react";
import {toLocObjectArray, toLocString} from "../common";

const PendingPurchaseList = (props) => {
    if (props.pendingPurchaseList.length === 0) {
        return (
            <div className="pending-orders-list">
                <div className="pending-orders-list-row">
                    No Pending orders!
                </div>
            </div>
        )
    }
    const codeClassName = props.isMobile ? "pending-order-code-mobile" : "pending-order-code"
    return (
        <div className="pending-orders-list">
            {props.pendingPurchaseList.map((e) => {
                const id = "checkbox-" + e.row
                return (
                    <div className="pending-orders-list-row-container" key={e.row}>
                        <div className="pending-order-list-row">
                            <div className={codeClassName}>
                                {e.code}
                            </div>
                            <div className="pending-order-qty">
                                {toLocString(toLocObjectArray(e.loc))}
                            </div>
                        </div>
                        <div className="buttons-container">
                            <div className="checkbox-container" key={id} onClick={(cb) => props.elementOnClick({row: e.row, val: cb.target.checked})}>
                                <input type="checkbox" id={id} checked={e.selected}  className="checkbox"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PendingPurchaseList;
