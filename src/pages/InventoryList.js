import React from "react";
import "./inventoryList.css"

const InventoryList = (props) => {
    if (props.inventoryList.length === 0) {
        return (
            <div className="inventory-list">
                <div className="inventory-list-row">
                    No results found!
                </div>
            </div>
        )
    }
    return (
        <div className="inventory-list">
            {props.inventoryList.map((e) => {
                return (
                    <div className="inventory-list-row" onClick={() => props.elementOnClick(e.code)}>
                        <div className="inventory-code">
                            {e.name}
                        </div>
                        <div className="inventory-location">
                            {e.loc}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InventoryList;
