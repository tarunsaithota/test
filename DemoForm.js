import React, { useRef } from 'react'

const DemoForm = () => {
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const purposeRef = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
    }
  return (
    <div className="">
      <div className="m-8 shadow-xl md:my-20 rounded-xl text-center">
        <h1 className='font-bold text-blue-950 text-2xl md:text-3xl py-4'>Schedule a Demo</h1>
        <form className='pb-8' onSubmit={submitForm}>
          <div className='py-4'>
            <input type="text" ref={fnameRef} placeholder="First Name" className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
          </div>
          <div className='py-4'>
            <input type="text" ref={lnameRef} placeholder="Last Name" className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
          </div>
          <div className='py-4'>
            <input type="text" ref={emailRef} placeholder="Email" className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
          </div>
          <div className='py-4'>
            <input type="text" ref={mobileRef} placeholder="Phone Number" className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
          </div>
          <div className='space-x-3 md:space-x-6 py-4'>
            <input type="date" ref={dateRef} placeholder="Select Date" className='border border-gray-600 rounded-lg h-10 w-[33%] px-2 cursor-text'/>
            <input type="time" ref={timeRef} placeholder="Select time" className='border border-gray-600 rounded-lg h-10 w-[33%] px-2 cursor-text'/>
          </div>
          <div className='py-4'>
            <input type="text" ref={purposeRef} placeholder="Purpose" className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
          </div>
          <div className='py-4'>
            <button className='w-[70%] h-10 bg-yellow-500 rounded-lg'>Book</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DemoForm