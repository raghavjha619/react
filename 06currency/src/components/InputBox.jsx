import React from 'react'
import { useId } from 'react';

function InputBox({
    label="from",
    amount,
    currencyList = ["inr","usd"],
    onCurrencyChange,
    onAmountChange,
    selectCurrency= "inr",
    
    className = "",
}) {
    const amountId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex   ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/60 mb-2 inline-block  ">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-slate-100 rounded-l py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value= {selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currencyList.map( (currency) => (
                            <option key={currency}  value = {currency}>
                                {currency}
                            </option>
                        ))}
                        {/* a.map() takes a callback function as its argument.
                        This callback function is executed on each element of the array a. */}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

