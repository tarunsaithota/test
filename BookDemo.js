import React from 'react'
import DemoForm from './DemoForm'

const BookDemo = () => {
  return (
    <div className="md:flex px-2 md:px-10">
      <div className="md:w-[50%] m-4 px-4 mt-8 md:mt-28">
        <h1 className="font-bold text-2xl md:text-4xl text-slate-600">
          Book a <span className="text-customGreen">Demo</span> with us
        </h1>
        <p className="text-lg md:text-xl mt-4 md:mt-12">
          We’re here to help!
        </p>
      </div>
      <div className="md:w-[50%]">
        <DemoForm />
      </div>
    </div>
  )
}

export default BookDemo