import React, { useState } from "react"




function InputComp({ label, amount, currency,convertedAmount,convertedCurrency, onAmountChange, onCurrencyChange, options =[] }) {
    return (
        <div className="card">
            <div className="left">
                <label htmlFor="">{label}</label>
                <input
                    type="number"
                    onChange={(e) => {
                        onAmountChange(e.target.value);
                    }}
                    id="number"
                    value={amount} />
            </div>
            <div className="right">
                <label htmlFor="">Currency Type</label>
                <select>
                <option value="loo"/>
                    {options.map((curren) => {
                        <option value={curren} onChange={() => {
                    onCurrencyChange(curren)
                        }}>{ curren }</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputComp
