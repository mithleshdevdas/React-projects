// @ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenter() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
// usereff
  const passwordRef = useRef(null)

  const copybtn = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)
  },[password])
  

  const PasswordsGenter = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  useEffect(() => {
  PasswordsGenter()
},[length,numAllowed,charAllowed,PasswordGenter])

  return (
    <>
      <div className="main">
        <h1>password genetor</h1>

        <div className="input">
          <input type="text" value={ password } placeholder="password" readOnly 
            ref={passwordRef}
          />
          <button onClick={copybtn}>copy</button>
        </div>
        <div className="funinput">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length {length}</label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>char</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGenter;


// 
