import React, { useContext } from 'react'
import { Apidata } from '../ContextApi'
import Container from '../Container'

const Details = () => {
    let data = useContext(Apidata)
  return (
    <div className=' bg-gray-500 py-[50px] '>
         <Container>
         <div className='flex flex-wrap '>
        {data.map((item)=>(
            <div className='w-1/3  '>
                <h2>{item.id}</h2>
                <img src={item.thumbnail} alt="" />
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <button className="relative px-4 border bg-green-500 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-transparent after:transition-all after:z-0 hover:after:bg-amber-200 hover:text-black">
                     <span className="relative z-10">buynow</span></button>
            </div>
        
        
        ))}
</div>

    </Container>

    </div>
   
   
  )
}

export default Details