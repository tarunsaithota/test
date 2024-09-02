import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  const navigate = useNavigate();
  return (
    <div className="w-full md:flex px-2 md:px-12 mb-16">
      <div className="md:w-[40%] m-2 md:m-4 px-4  mt-8 md:mt-16">
        <h1 className="font-bold text-2xl md:text-4xl text-slate-600 flex flex-col">
          <span className="text-customGreen pb-2">HandBuk </span>
          <span className="text-slate-600 text-sm md:text-xl">Empowering Businesses through Streamlined Financial Management</span>
        </h1>
        <p className="text-sm md:text-xl mt-3 md:mt-8">
        HandBuk is a business management mobile application that digitizes traditional bookkeeping. Users can track transactions, manage inventory, and handle vendor relationships. The app’s value lies in time savings, accuracy, accessibility, efficiency, and compliance with financial regulations. 
        </p>
        <div className="hidden md:inline-block flex md:pl-10 space-x-8 mt-6 md:mt-12">
          <button
            onClick={() => {
              navigate("/contactus");
            }}
            className="font-semibold text-sm md:text-lg px-6 bg-yellow-600 rounded-lg text-white h-10 transition-transform duration-300 transform hover:scale-105 hover:brightness-125"
          >
            ContactUS
          </button>
          <button className="font-semibold text-sm md:text-lg px-6 bg-yellow-600 rounded-lg text-white h-10 transition-transform duration-300 transform hover:scale-105 hover:brightness-125" onClick={() => {
              navigate("/book-a-demo");
            }}>
            Book A Demo
          </button>
        </div>
        <div className="flex space-x-4 mt-5 md:mt-10">
          <img
            src="https://inhandbook.com/wp-content/uploads/2020/09/App-Store-Download.png"
            alt="donwload-logo"
            className="w-40 md:w-52 h-20 md:h-24 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:brightness-125"
            onClick={() =>
              handleRedirect(
                "https://apps.apple.com/us/app/handbuk/id6557054526"
              )
            }
          />
          <img
            src="https://inhandbook.com/wp-content/uploads/2020/09/Google-Play-Download.png"
            alt="download-logo"
            className="w-40 md:w-52 h-20 md:h-24 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:brightness-125"
            onClick={() =>
              handleRedirect(
                "https://play.google.com/store/apps/details?id=com.ArkaTechSol.handbuk "
              )
            }
          />
        </div>
      </div>
      <div className="md:w-[60%]">
        <div className="w-full flex pt-10 md:pt-24 px-6 md:px-0">
          <iframe
            className="w-screen aspect-video bg-gradient-to-t from-black"
            src="https://www.youtube.com/embed/siJXk0Afa30?si=dO7rqO-NTn_H2wSY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
