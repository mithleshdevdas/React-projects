import React, { useEffect, useState } from 'react'

function useCurrencyinfo(currency) {
const [data,setdata]= useState({})
    useEffect(() => {
        fetch(`dtgfdtgf`)
            .then((res) => res.json)
        .then((res)=>setdata(res[currency]))
 },[currency])
}

export default useCurrencyinfo