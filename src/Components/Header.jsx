import React, { useContext } from 'react'
import { ApiData } from './ContextApi'

const Header = () => {
  let data = useContext(ApiData)
  return (
   <>
   <div className='flex flex-wrap'>
   {data.map((item)=>(
    <img src={item.thumbnail} alt="" />
   ))}
   </div>
  
   </>
  )
}

export default Header