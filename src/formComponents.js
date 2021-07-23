import React from "react";
import "./submitOrderForm.css"

export const radioSelection = (selectionName, options, callback) => {
    return (
        <div className="radio-row">
            {options.map(option => {
                const htmlId = selectionName + " " + option
                return (
                    <div className="radio-box" key={option}>
                        <input type="radio" className="radio-button" name={selectionName} id={htmlId}
                               onClick={() => callback(option)}/>
                        <label htmlFor={htmlId} className="radio-label">{option}</label>
                    </div>
                )
            })}
        </div>
    )
}
