// @ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from 'react'

function Passgen() {
const[length,setlengh]=useState(8)
const[num,setnum]=useState(false)
const[char,setchar]=useState(false)
    const [pass, setpass] = useState()

const passref =useRef()

    const copy = useCallback(() => {
        passref.current.select();
        
        window.navigator.clipboard.writeText(pass)
    },[pass])
    
    const passwordgen = useCallback(() => {
        let pas = "";
        let str = 'ABCDEFGHIKLMNOPQRSTVuWXYZabcdefghiklmnopqrstvuwxyz'

        if (num) str += '0123456789'
        if(char) str += '@!#$%&*{}()'
        for (let i = 1; i < length; i++){
            let chars = Math.floor(Math.random() * str.length + 1)
            
            pas += str.charAt(chars)
        }
        setpass(pas)
    

    },[length,num,char,setpass])

    useEffect(() => {
        passwordgen()
    },[length,num,char,passwordgen])

  return (
      <>
          <div className='m-10'>
              <input type="text" placeholder='password'
                  value={ pass }
                  readOnly
                  ref={passref}
                  
                  
              />
              <button onClick={copy}>copy</button>
              <div className='m-1'>
                  <input type="range"
                      min={ 6 }
                      max={ 15 }
                      value={ length }
                      onChange={ (e) => {
                          setlengh(Number(e.target.value));
                      }}
                      
                  />
                  <label htmlFor="">length{ length}</label> 
                  <input type="checkbox"
                      defaultChecked={ num }
                      onChange={ () => {
                          setnum((prev)=>!prev)
                      }}
                      
                  /> 
                  <label htmlFor="">number</label>
                  <input type="checkbox"
                      defaultChecked={ char }
                      onChange={ () => {
                          setchar((prev)=> !prev)
                      }}
                      
                  />
                  <label htmlFor="">char</label>

              </div>
         </div>
  </>
  )
}

export default Passgen