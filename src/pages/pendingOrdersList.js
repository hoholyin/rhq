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
    return (
        <div className="pending-orders-list">
            {props.pendingOrdersList.map((e) => {
                const row_class = e.selected ? "pending-orders-list-row-selected" : "pending-orders-list-row"
                return (
                    <div className={row_class} onClick={() => props.elementOnClick(e)}>
                        <div className="pending-order-code">
                            {e.code}
                        </div>
                        <div className="pending-order-name">
                            {e.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PendingOrdersList;
