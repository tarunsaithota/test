import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-black text-white text-center py-1 md:py-2'>
        <div className='md:mb-4'>
            <p className='hidden md:inline-block'>Engage and connect with your employees no matter where they are</p>
        </div>
        <div className='md:mb-2'>
            <p>Copyright © 1999-2024 GoDaddy, LLC. All rights reserved. <span className='underline cursor-pointer' onClick={()=>navigate('/privacy-policy')}>Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default Footer