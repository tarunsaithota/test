import React, { useRef, useState } from 'react';
import validateContactForm from './validateContactForm';

const ContactForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const detailsRef = useRef(null);

  const[errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone: '',
    details: ''
  });

  const sendHandler = async (e) => {
    e.preventDefault();
    const contactFormData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      details: detailsRef.current.value
    }
    console.log(contactFormData.firstName)
    const validateErrors = validateContactForm(contactFormData.firstName, contactFormData.lastName, contactFormData.email, contactFormData.phone, contactFormData.details);
    setErrors(validateErrors);
    console.log(errors, validateErrors);
    if (Object.values(validateErrors).every((error) => error === "")) {
      try {
        const response = await fetch("http://contactform-env.eba-tezrut6m.us-west-2.elasticbeanstalk.com/addUserDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormData),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          firstNameRef.current.value = "";
          lastNameRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          detailsRef.current.value = "";
        } else {
          alert(
            "There was an error submitting your details. Please try again."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error submitting your details. Please try again.");
      }
    }
  }

  return (
    <div className="">
      <div className="m-8  shadow-xl my-20 rounded-xl text-center">
        <h1 className='font-bold text-blue-950 text-3xl py-4'>Contact Form</h1>
        <form className='pb-8'>
          <div className='py-4'>
            <input type="text" placeholder="First Name" ref={firstNameRef} className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
            {errors?.firstName && <p className='text-red-500 pt-2 text-lg'>{errors.firstName}</p>}
          </div>
          <div className='py-4'>
            <input type="text" placeholder="Last Name" ref={lastNameRef} className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
            {errors.lastName && <p className='text-red-500 pt-2 text-lg'> {errors.lastName}</p>}
          </div>
          <div className='py-4'>
            <input type="text" placeholder="Email" ref={emailRef} className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
            {errors.email && <p className='text-red-500 pt-2 text-lg'>{errors.email}</p>}
          </div>
          <div className='py-4'>
            <input type="text" placeholder="Phone Number" ref={phoneRef} className='border border-gray-600 rounded-lg h-10 w-[70%] pl-4'/>
            {errors.phone && <p className='text-red-500 pt-2 text-lg'>{errors.phone}</p>}
          </div>
          <div className='py-4'>
            <textarea  rows="8" placeholder="How can we help you?" ref={detailsRef} className='border border-gray-600 rounded-lg w-[70%] p-4'/>
            {errors.details && <p className='text-red-500 pt-2 text-lg'>{errors.details}</p>}
          </div>
          <div className='py-4'>
            <button className='w-[70%] h-10 bg-yellow-500 rounded-lg' onClick={sendHandler}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;