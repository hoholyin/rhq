import React from "react";
import "./inventoryList.css"
import {generateInventoryListName} from "../../common";

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
                        <div className="inventory-list-container">
                            <span className="inventory-sn">{e.sn}</span>
                            <div className="inventory-code">
                                {generateInventoryListName(e.name)}
                            </div>
                        </div>
                        {props.nameOnly
                            ? null
                            : (
                                <div className="inventory-location">
                                    {e.loc}
                                </div>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default InventoryList;
