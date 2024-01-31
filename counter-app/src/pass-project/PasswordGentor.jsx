import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGentor() {
    const [lengh, setlengh] = useState(8);
    const [num, setnum] = useState(false)
    const [char, setchar] = useState(false)
    const [password, setPassword] = useState(' ')
        const passref = useRef(null);
    const copy = useCallback(() => {
        // @ts-ignore
        passref.current?.select();
      
      window.navigator.clipboard.writeText(password);
    }, [password]);
    // pass genred
    const passgenter = useCallback(() => {
        let pas = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstvuwxyz'
        if (num) str += '0123456789'
        if (char) str += '!@#$%&*()'
        
        for (let i = 1; i <lengh; i++){
            let chr = Math.floor(Math.random() * str.length + 1)
            pas +=str.charAt(chr)
        }
        setPassword(pas)
    }, [lengh, num, char, setPassword])
    useEffect(() => {
        passgenter()
    }, [lengh, num, char, passgenter])
    
    // ref

    // copy btn
    

  return (
    <>
      <h1>
        <b>PasswordGentor</b>
      </h1>

              <input type="text" className="border border-gray-800" placeholder="password"
                  value={ password }
                  readOnly
                  ref={passref}
              />
              <button onClick={ copy }>copy</button> <br />
              <input
                  type="range"
                  min={ 6 }
                   max={ 20 }
                  value={ lengh }
                  onChange={ (e) => {
                      // @ts-ignore
                      setlengh(e.target.value);
                  } }
              /> <label>lengh { lengh }</label>{ " " }
              <label>number</label>
              <input type="checkbox"
                  defaultChecked={ num }
                  onChange={()=>{setnum((prev)=>!prev)}}
                  
              />
              <label>char</label>
              <input type="checkbox"
                  defaultChecked={ char }
                  onChange={()=> setchar((prev)=> !prev)}
              />
    
    </>
  );
}

export default PasswordGentor;
