import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-red-500'>
        <Container>
            <div className='w-12/12 mx-auto'>
                <ul className='flex gap-8 justify-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/details">Details</Link></li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default Navbar