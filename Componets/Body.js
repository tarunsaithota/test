import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-emerald-50'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body;
