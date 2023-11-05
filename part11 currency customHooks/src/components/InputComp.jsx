import React, { useState } from "react"

function InputComp({
    isReadOnly,
    label,
    amount=0,
    currency = "usd",
    onAmountChange,
    onCurrencyChange,
    options = [],
    convertedAmount=0.00,
    convertedCurrency,
}) {
    return (
        <div className="card">
            <div className="left">
                <label htmlFor="">{label}</label>

                <input
                    readOnly={isReadOnly}
                    type="number"
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                    id="number"

                    value={amount || convertedAmount}
                />
            </div>
            <div className="right">
                <label htmlFor="">Currency Type</label>
                <select
                    value={convertedCurrency || currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {options.map((curren) => (
                        <option value={curren} id={curren} key={curren}>
                            {curren}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputComp
