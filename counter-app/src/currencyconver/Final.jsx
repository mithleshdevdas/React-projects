import React, { useState } from "react";
import useCurrencyinfo from "./useCurrencyinfo";
import InputBox from "./InputBox";

function Final() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertamout, setconvertamount] = useState(0);

  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertamount(amount);
    setamount(convertamout);
  };
  const convert = () => {
    setconvertamount(amount * currencyinfo[to]);
  };

  return (
    <>
      <div className="main">
        <div className="form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="inputbox">
              <InputBox
                label="From"
                amount={amount}
                currrencyOption={options}
                onCurrencyChange={(currency) => setamount(amount)}
                selectCurrency={from}
                onAmountchange={(amount) => setamount(amount)}
              />
              <button type="button" onClick={swap}>
                swap
                          </button>
                          
            </div>
            <div className="other">
              <InputBox
                label="to"
                amount={convertamout}
                currrencyOption={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={from}
         
                onAmountchange={(amount) => setamount(amount)}
              />
              <button type="submit">
                convert{from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Final;


// 