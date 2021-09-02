import React from "react";

const SearchItemModal = (props) => {
    return (
        <div className="search-modal">
            {props.allItems.map((e) => {
                return (
                    <span>{e.code}</span>
                )
            })}
        </div>
    )
}

export default SearchItemModal;
