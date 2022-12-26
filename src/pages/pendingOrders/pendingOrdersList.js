import React from "react";
import "./pendingOrdersList.css"
import print from "../../assets/print_icon.png";
import {generateMailSlip} from "../../mailslip";
import {toLocObjectArray} from "../../common";


const PendingOrdersList = (props) => {
    if (props.pendingOrdersList.length === 0) {
        return (
            <div className="pending-orders-list">
                <div className="pending-orders-list-row">
                    No Pending orders!
                </div>
            </div>
        )
    }
    const codeClassName = props.isMobile ? "pending-order-code-mobile" : "pending-order-code"
    const getQtyClassName = (qty) => {
        return parseInt(qty) === 1 ? "pending-order-qty" : "pending-order-qty alert-qty"
    }

    const getRemainingQtyClassName = (loc) => {
        const baseClassName = "pending-order-remaining-qty"
        return toLocObjectArray(loc).reduce((a, b) => a + b.qty, 0) <= 1 ? baseClassName + " alert-qty" : baseClassName
    }
    return (
        <div className="pending-orders-list">
            {props.pendingOrdersList.map((e) => {
                const id = "checkbox-" + e.row
                return (
                    <div className="pending-orders-list-row-container" key={e.row}>
                        <div className="pending-order-list-row">
                            <div className={codeClassName}>
                                {e.code}
                            </div>
                            <div className={getQtyClassName(e.qty)}>
                                {"x" + e.qty}
                            </div>
                            <div className="pending-order-name">
                                {e.name + " (" + e.boss + ")"}
                            </div>
                            <div className={getRemainingQtyClassName(e.remainingQty)}>
                                {"REMAINING STOCKS: " + e.remainingQty}
                            </div>
                        </div>
                        <div className="buttons-container">
                            <div className="checkbox-container" key={id} onClick={(cb) => props.elementOnClick({row: e.row, val: cb.target.checked})}>
                                <input type="checkbox" id={id} checked={e.selected}  className="checkbox"/>
                            </div>
                            <div className="print-mailslip-button" key={id} onClick={() => generateMailSlip([e])}>
                                <img src={print} className="print-button" alt="print"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PendingOrdersList;
