import React from "react";
import "./pendingOrdersList.css"


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
    return (
        <div className="pending-orders-list">
            {props.pendingOrdersList.map((e) => {
                const id = "checkbox-" + e.row
                return (
                    <div className="pending-orders-list-row-container">
                        <div className="pending-order-list-row">
                            <div className={codeClassName}>
                                {e.code}
                            </div>
                            <div className="pending-order-name">
                                {e.name + " (" + e.boss + ")"}
                            </div>
                        </div>
                        <div className="checkbox-container" key={id} onClick={() => props.elementOnClick(e)}>
                            <input type="checkbox" id={id} className="checkbox" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PendingOrdersList;
