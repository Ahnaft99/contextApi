import React, { useContext } from 'react'
import { Apidata } from './ContextApi'

const Header = () => {
    let data = useContext(Apidata)
  return (
    <>
     <div className='flex flex-wrap'>
        {data.map((item)=>(
            <div className=''>
                <h2>{item.id}</h2>
                <img src={item.thumbnail} alt="" />
            </div>
        
        
        ))}
</div>
    </>
   
  )
}

export default Header