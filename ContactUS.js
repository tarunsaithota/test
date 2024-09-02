import React from "react";
import ContactForm from "./ContactForm";

const ContactUS = () => {
  return (
    <div className="md:flex px-2 md:px-10">
      <div className="md:w-[50%] m-4 px-4 mt-10 md:mt-28">
        <h1 className="font-bold text-2xl md:text-4xl text-slate-600">
          Ready to use <span className="text-customGreen">HandBuk ?</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 md:mt-12">
          We’re here to help! We put the “Human” in Human Resources with
          world-class support......
        </p>
        <div className="my-6 md:my-20 rounded-xl shadow-lg">
          <div className="p-4">
            <p className="text-xl md:text-2xl text-slate-600 font-bold">Contact</p>
            <p className="text-lg py-2 text-gray-600">
              📧
              <a href="mailto:developer@arkatechsol.com">
                developer@arkatechsol.com
              </a>
            </p>
            <p className="text-lg py-2 text-gray-600">☎️+1(425)663-1723 </p>
            <p className="text-xl md:text-2xl text-slate-600 font-bold py-4">Address</p>
            <p className="text-lg text-gray-600 flex flex-col">
              <a
                href="https://www.google.com/maps/search/?api=1&query=24003+140th+Ave+SE+Kent,+WA+98042"
                target="_blank"
              >
                <span>24003 140th Ave SE </span>
                <span>Kent, WA 98042 </span>
              </a>
            </p>
            <div className="flex space-x-3 pt-6">
              <svg
                class="h-6 md:h-8 w-6 md:w-8 text-sky-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
              <svg
                class="h-6 md:h-8 w-6 md:w-8 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg>
              <svg
                class="h-6 md:h-8 w-6 md:w-8 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <svg
                class="h-6 md:h-8 w-6 md:w-8 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUS;
