import React from 'react'
import Body from './Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import ContactUS from './ContactUS'
import HowItWorks from './HowItWorks'
import PrivacyPolicy from './PrivacyPolicy'
import Features from './Features'
import BookDemo from './BookDemo'

const LandingPage = () => {
  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contactus',
          element: <ContactUS />
        },
        {
          path: '/howitworks',
          element: <HowItWorks />
        },
        {
          path: '/privacy-policy',
          element: <PrivacyPolicy />
        },
        {
          path: '/features',
          element: <Features />
        },
        {
          path: '/book-a-demo',
          element: <BookDemo />
        }
      ]
    },
    
  ])
  return (
    <div className='w-full, h full'>
        <RouterProvider router={approuter} />
    </div>
  )
}

export default LandingPage