 import React, { useEffect, useState } from 'react'
 
function useCurrencyinfo(currency) {
    const [data, setdata] = useState()
    
    useEffect(() => {
        fetch('')
            .then((res) => res.json)
        .then((res)=> setdata(res[currency]))
    }, [currency])
    return data
    
   
}
 export default useCurrencyinfo