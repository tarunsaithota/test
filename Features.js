import React from "react";

const Features = () => {
  return (
    <div className="p-10 md:p-20 md:flex md:flex-wrap space-y-10">
      <div className="md:justify-between flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-xl shadow-xl pb-3 font-bold">
            Book Keeping
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>
              &#x2022; Users can easily record sales, purchases, and expenses
              within the app.
            </span>
            <span>&#x2022; Automated calculations ensure accuracy.</span>
            <span>
              &#x2022; Real-time financial insights to track the business’s
              position.
            </span>
            <span>
              &#x2022; Enhanced precision and reduced errors through automation.
            </span>
          </p>
        </div>
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-lg shadow-xl pb-3 font-bold">
            Vendor Management
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>&#x2022; Centralized vendor database for easy access. </span>
            <span>
              &#x2022; Store vendor details, payment terms, and contact
              information.
            </span>
            <span>
              &#x2022; Streamlined vendor communication for better coordination.
            </span>
            <span>
              &#x2022; Timely payments to strengthen vendor relationships.
            </span>
          </p>
        </div>
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-lg shadow-xl pb-3 font-bold">
            Multiuser Collaboration
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>
              &#x2022; Assign specific roles like admin and accountant.
            </span>
            <span>&#x2022; Track all changes with an audit trail.</span>
            <span>&#x2022; Simplified delegation of bookkeeping tasks.</span>
            <span>
              &#x2022; Improved accountability with user-specific roles.
            </span>
          </p>
        </div>
      </div>
      <div className="md:justify-between flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-lg shadow-xl pb-3 font-bold">
            Exporting Transactions
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>
              &#x2022; Export project-level transactions to Excel spreadsheets.
            </span>
            <span>
              &#x2022; Use spreadsheets for documentation and record-keeping.
            </span>
            <span>&#x2022; Generate reports suitable for tax filing.</span>
          </p>
        </div>
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-lg shadow-xl pb-3 font-bold">
            CrossPlatform Compatibility
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>&#x2022; Available on both iOS and Android devices.</span>
            <span>
              &#x2022; Access and manage financial data on the go using mobile
              devices.
            </span>
          </p>
        </div>
        <div className="md:w-[30%] bg-customGreen shadow-lg rounded-md text-white py-4 hover:bg-gray-200 hover:text-black">
          <h1 className="text-center text-lg shadow-xl pb-3 font-bold">
            Value to Users
          </h1>
          <p className="flex flex-col p-2 pl-8">
            <span>
              &#x2022; Save time with automated processes (no manual ledger
              entries).
            </span>
            <span>
              &#x2022; Access financial data anytime, anywhere via the mobile
              app.
            </span>
            <span>
              &#x2022; Focus on key business priorities while reducing the risk
              of errors.
            </span>
            <span>&#x2022; Streamlined workflows improve efficiency.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
