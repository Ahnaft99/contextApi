import axios from 'axios'
import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

let Apidata = createContext()
const ContextApi = ({children}) => {
  let [info, setInfo] = useState([])
  let getData = (()=>{
    axios.get('https://dummyjson.com/products').then((response)=>{
      setInfo(response.data.products)
    })
    
  })
  useEffect(()=>{
    getData()
  },[])
  return (
    <Apidata.Provider value={info}>{children}</Apidata.Provider>
  )
}

export  {ContextApi, Apidata}