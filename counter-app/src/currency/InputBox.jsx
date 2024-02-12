import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();
  return (
    <>
      <div className="main">
        <div className="label">
          <label htmlFor={amountId}>{label}</label>
          <input
            id={amountId}
            type="number"
            placeholder="amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountchange && onAmountchange(Number(e.target.value))
            }
          />
        </div>
        <div className="types">
          <p>currency types</p>
          <select
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onAmountchange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
