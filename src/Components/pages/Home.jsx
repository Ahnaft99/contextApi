import React from 'react'
import RootLayout from '../root/RootLayout'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  return (
    <>
    <Outlet/>
    <Header/>
    </>
  )
}

export default Home