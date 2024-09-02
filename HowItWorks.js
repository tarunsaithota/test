import React from 'react'
import ImageCarousel from './ImageCarousel';

const HowItWorks = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-customGreen text-xl md:text-4xl text-center py-8 md:py-16">
          How It Works
        </h1>
      </div>
      <div className='md:flex pb-8'>
      <div className='md:w-[50%] rounded-lg mx-4 px-4 md:px-16'>
        <div className='flex space-x-4 pb-5 md:pb-10'>
          <div>
            <svg
              class="h-10 md:h-16 w-10 md:w-16 text-customGreen"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
          </div>
          <div>
            <h1 className='text-black text-xl md:text-2xl pb-2 md:pb-4'>Sign Up</h1>
            <span>Signup using mobile number and fill in oragnization details</span>
          </div>
        </div>
        <div className='flex space-x-4 pb-5 md:pb-10'>
          <div>
          <svg class="h-10 md:h-16 w-10 md:w-16 text-customGreen"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
          </div>
          <div>
            <h1 className='text-black text-xl md:text-2xl pb-2 md:pb-4'>Create Project</h1>
            <span>You can create multiple projects under an organization and add users to it</span>
          </div>
        </div>
        <div className='flex space-x-4 pb-5 md:pb-10'>
          <div>
          <svg class="h-10 md:h-16 w-10 md:w-16 text-customGreen"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          </div>
          <div>
            <h1 className='text-black text-xl md:text-2xl pb-2 md:pb-4'>Log Expenses</h1>
            <span>Easily log expenses using Cash-In and Cash-Out</span>
          </div>
        </div>
        <div className='flex space-x-4 pb-5 md:pb-10'>
          <div>
          <svg class="h-10 md:h-16 w-10 md:w-16 text-customGreen"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <line x1="20" y1="8" x2="20" y2="14" />  <line x1="23" y1="11" x2="17" y2="11" /></svg>
          </div>
          <div>
            <h1 className='text-black text-xl md:text-2xl pb-2 md:pb-4'>Add vendors</h1>
            <span>Also add you can easily add vendors to organization and maintain their details</span>
          </div>
        </div>
        <div className='flex space-x-4 pb-5 md:pb-10'>
          <div>
            <svg class="h-10 md:h-16 w-10 md:w-16 text-customGreen"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <div>
            <h1 className='text-black text-xl md:text-2xl pb-2 md:pb-4'>Export Transactions</h1>
            <span>Directly export the transactions to excel to share the details</span>
          </div>
        </div>
      </div>
      <div className="hidden md:inline-block md:w-[60%] px-8 md:px-4">
        <ImageCarousel />
      </div>
      </div>
      
    </div>
  );
}

export default HowItWorks