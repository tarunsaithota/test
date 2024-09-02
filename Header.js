import React, { useState } from 'react';
import logo from "../Utils/Logo.png"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const[menuItems, setMenuItems] = useState(false);
  const handleMenuItems =(e) =>{
    e.preventDefault();
    setMenuItems(!menuItems);
  }
  return (
    <div className="flex justify-between px-2 md:px-12 w-full md:h-[20%] shadow-lg">
      <div className="m-3 p-3 flex items-center" 
        onClick={() => {
          navigate("/");
          if(menuItems){
            setMenuItems(!menuItems);
          }
        }}
      >
        <img src={logo} alt="logo" className="w-10 md:w-16 cursor-pointer" />
        <span className="pl-2 font-extrabold  text-lg md:text-3xl text-customGreen cursor-pointer">
          HandBuk
        </span>
      </div>
      <div className="hidden md:inline-block p-4 m-4 items-center justify-between">
        <button
          className="text-black font-semibold text-xl px-4 hover:text-orange-300"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-black font-semibold text-xl px-4 hover:text-orange-300"
          onClick={() => navigate("/features")}
        >
          Features
        </button>
        <button
          className="text-black font-semibold text-xl px-4 hover:text-orange-300"
          onClick={() => navigate("/howitworks")}
        >
          How it works
        </button>
        <button
          className="text-black font-semibold text-xl px-4 hover:text-orange-300"
          onClick={() => navigate("/contactus")}
        >
          ContactUS
        </button>
        &nbsp;
        <button
          className="font-semibold text-xl px-6 bg-yellow-600 rounded-lg text-white h-10 hover:bg-gray-800"
          onClick={() => navigate("/book-a-demo")}
        >
          Demo
        </button>
      </div>
      <div className="inline-block md:hidden">
        <button
          className="relative text-3xl items-center p-2 m-4 text-black"
          onClick={handleMenuItems}
        >
          &#9776; 
        </button>
      </div>
      {menuItems && (
        <div className="inline-block md:hidden absolute bg-green-50 mt-16 ml-[63%] px-2 w-[28%] text-left shadow-lg rounded-lg">
          <ul className="space-y-2 py-2 text-customGreen cursor-pointer">
            <li
              onClick={() => {
                navigate("/features");
                setMenuItems(!menuItems);
              }}
            >
              Features
            </li>
            <li
              onClick={() => {
                navigate("/howitworks");
                setMenuItems(!menuItems);
              }}
            >
              How it works
            </li>
            <li
              onClick={() => {
                navigate("/contactus");
                setMenuItems(!menuItems);
              }}
            >
              ContactUS
            </li>
            <li
              onClick={() => {
                navigate("/book-a-demo");
                setMenuItems(!menuItems);
              }}
            >
              Demo
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;