"use client";
import React, { useState } from "react";

export default function DriverAdd() {
  //State variables..
  const [fNameError, setFnameError] = useState("");
  const [lNameError, setLnameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [nicError, setNicError] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [isDisabled, setDisable] = useState(false);
  
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [nic, setNic] = useState("");

  //Handling functions..

  const handleFormSubmit = async (e) => {
    e.preventDefault();    

    const errorStates = [
      { textStatus: fName, errorStatus: fNameError, setError: setFnameError },
      { textStatus: lName, errorStatus: lNameError, setError: setLnameError },
      { textStatus: contact, errorStatus: contactError, setError: setContactError},
      { textStatus: nic, errorStatus: nicError, setError: setNicError },
    ];

    let hasError = false

    errorStates.forEach((element) => {
      if (element.textStatus == "") {
        element.setError("This field is required!");
        hasError = true;
      } else {
        element.setError("");
      }
    });

    if (hasError == false) {
      //Create API request to the backend if there are no any errors..
      setDisable(true);
      try {
        const request = await fetch(
          "http://localhost:8080/api/v1/driver/driver-register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: fName,
              lastName: lName,
              contactNumber: contact,
              nic: nic,
            }),
          }
        );

        if (request.ok) {
          const response = await request.text();
          setResponseStatus(response);
        } else {
          setResponseStatus("Error in response. Please contact administrator!");
        }
      } catch (error) {
        setResponseStatus(error);
      }finally{
        setDisable(false)
      }
    } else {
      
    }
  };

  return (
    <div className="flex-col items-center justify-center">
      <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-500 shadow-md">
        <label className="text-white text-xl font-serif">Register Driver</label>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[300px] min-w-screen flex-col items-start justify-start">
          <div className="mb-4">
            <label className="mt-4 ml-4 text-blue-500">First Name:</label>
            <input
              onChange={(e) => {
                setFname(e.target.value);
              }}
              className="text-md w-[300px] ring-1 ring-blue-500 ml-11 border-none rounded-sm hover:shadow-md px-2"
              type="text"
              placeholder="Enter Driver First Name"
            />
            <div>
              {fNameError && (
                <label className="text-red-400 ml-[140px] text-sm">
                  {fNameError}
                </label>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mt-4 ml-4 text-blue-500">Last Name:</label>
            <input
              onChange={(e) => {
                setLname(e.target.value);
              }}
              className="text-md w-[300px] ring-1 ring-blue-500 ml-11 border-none rounded-sm hover:shadow-md px-2"
              type="text"
              placeholder="Enter Driver Last Name"
            />
            <div>
              {lNameError && (
                <label className="text-red-400 ml-[140px] text-sm">
                  {lNameError}
                </label>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mt-4 ml-4 text-blue-500">Contact Number:</label>
            <input
              onChange={(e) => {
                setContact(e.target.value);
              }}
              className="text-md w-[300px] ring-1 ring-blue-500 ml-1 border-none rounded-sm hover:shadow-md px-2"
              type="text"
              placeholder="Enter Contact Number"
            />
            <div>
              {contactError && (
                <label className="text-red-400 ml-[140px] text-sm">
                  {contactError}
                </label>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mt-4 ml-4 text-blue-500">NIC Number:</label>
            <input
              onChange={(e) => {
                setNic(e.target.value);
              }}
              className="text-md w-[300px] ring-1 ring-blue-500 ml-8 border-none rounded-sm hover:shadow-md px-2"
              type="text"
              placeholder="Enter NIC Number"
            />
            <div>
              {nicError && (
                <label className="text-red-400 ml-[140px] text-sm">
                  {nicError}
                </label>
              )}
            </div>
          </div>

          <div>
            <input
              className=" ml-[138] h-[30px] w-[80px] bg-green-600 text-white font-serif rounded-md shadow-md hover:bg-green-500"
              type="submit"
              value="Register"
              disabled = {isDisabled}
            />
          </div>

          <div>
            {responseStatus && (
              <label className="ml-[140px] text-sm text-red-600">
                {responseStatus}
              </label>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
