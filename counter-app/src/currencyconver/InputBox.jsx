
import React, { useId} from 'react'

function Input(
  {  label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currrencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,}
) {
    const amountinputid = useId()
        

  return (
    <>
      <div className="main">
        <div className="label">
          <label htmlFor={amountinputid}>{label}</label>
                  <input
                      id={amountinputid}
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountchange && onAmountchange(Number(e.target.value))
            }
          />
        </div>
        <div className="type">
          <p>currency type</p>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currrencyOption.map((currency) => (
                <option key={currency}
                    value={ currency }>
                    {currency}
                    </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Input