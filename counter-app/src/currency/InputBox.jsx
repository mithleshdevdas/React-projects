import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencyChange,
  currencyOption = [],
  selecCurrency = 'usd',
  amountDisable,
  currencyDisable
}) {
  const amountInputId = useId()
  
  return (
    <>
      <div className="main">
        <div className="label">
          <label htmlFor={ amountInputId }>{ label }</label>
          <input
            id={amountInputId}
            type="number"
            placeholder='amount'
            disabled={ amountDisable }
            value={ amount }
            onChange={(e)=> onAmountchange && onAmountchange (Number(e.target.value))}


          />
        </div>
        <div className="type">
          <p>currency type</p>
          <select
            value={ selecCurrency }
            onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value) }
            disabled={currencyDisable}
          >
            { currencyOption.map((currency) => (
              <option
                key={ currency }
                value={currency}
              
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox