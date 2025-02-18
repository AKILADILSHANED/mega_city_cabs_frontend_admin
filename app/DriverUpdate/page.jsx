"use client";
import React, { useState } from "react";

export default function DriverUpdate() {
  const [errorMsg, setErrorMsg] = useState(false);
  const [driverDetailsWindow, setDriverDetailsWindow] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  const [driverId, setDriverId] = useState("");

  const [driverIdText, setDriverIdText] = useState("");
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");
  const [contactText, setContactText] = useState("");
  const [nicText, setNicText] = useState("");
  const [registeredDateText, setRegisteredText] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setDriverDetailsWindow(false);
    setUpdateMessage("");
    if (!driverId) {
      setErrorMsg("This field is required!");      
      return;
    }

    try {
      const request = await fetch(
        `http://localhost:8080/api/v1/driver/driver-search?driverId=${encodeURIComponent(
          driverId
        )}`,
        {
          method: "GET",
        }
      );

      if (request.ok) {
        const response = await request.json();
        if (response.message) {
          setErrorMsg(response.message);
          setDriverDetailsWindow(false);
        } else {
          setDriverIdText(response.driverId);
          setFirstNameText(response.firstName);
          setLastNameText(response.lastName);
          setContactText(response.contactNumber);
          setNicText(response.nic);
          setRegisteredText(response.registeredDate);

          setDriverDetailsWindow(true);
          setErrorMsg(false);
        }
      } else {
        alert("Error in response. Please contact administrator!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(
        "http://localhost:8080/api/v1/driver/driver-update",
        {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify( {
            driverId: driverIdText,
            firstName: firstNameText,
            lastName: lastNameText,
            contactNumber: contactText,
            nic: nicText,
            registeredDate: registeredDateText,
          },
        )
        }
      );
      if (request.ok) {
        const response = await request.text();
        setUpdateMessage(response);
      } else {
        setUpdateMessage(
          "No responses from server. Please contact administrator!"
        );
      }
    } catch (error) {
      setUpdateMessage(error);
    }
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Update Driver Details
          </label>
        </div>

        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[65px] min-w-screen flex-col items-start justify-start">
          <div className="flex flex-row">
            <label className="mt-2 ml-4 text-blue-500">Driver ID:</label>
            <input
              className="mt-2 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2 h-[25px]"
              type="text"
              placeholder="Please provide Driver ID"
              onChange={(e) => {
                setDriverId(e.target.value);
              }}
            />
            <input
              className="mt-1 ml-4 h-[30px] w-[80px] bg-green-600 text-white font-serif rounded-md shadow-md hover:bg-green-500"
              type="submit"
              value="Search"
              onClick={handleSearch}
            />
          </div>

          <div>
            {errorMsg && (
              <label className="text-red-400 ml-[100px] text-sm">
                {errorMsg}
              </label>
            )}
          </div>
        </div>
      </div>

      <div>
        {driverDetailsWindow && (
          <form>
            <div>
              <div className="flex-col items-center justify-center mt-5">
                <div className=" bg-blue-50 text-white min-w-screen h-[35px] flex items-center justify-center shadow-md">
                  <label className="text-blue-800 text-xl font-serif">
                    Driver Details for provided Driver ID
                  </label>
                </div>
              </div>

              <div className="mt-6 bg-white h-[190px] shadow-md hover:shadow-lg">
                <div className="flex flex-row">
                  <div className="flex flex-row ml-[43px]">
                    <div>
                      <label className="ml-4 text-blue-500">Driver ID:</label>
                    </div>
                    <div>
                      <input
                        className="text-md text-slate-600 w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        readOnly
                        onChange={(e) => driverId(e.target.value)}
                        value={driverIdText}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row ml-[50px]">
                    <div>
                      <label className="ml-4 text-blue-500">First Name:</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) => setFirstNameText(e.target.value)}
                        className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        value={firstNameText}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-4">
                  <div className="flex flex-row ml-[28px]">
                    <div>
                      <label className="ml-4 text-blue-500">Last Name:</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) => setLastNameText(e.target.value)}
                        className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        value={lastNameText}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row ml-[75px]">
                    <div>
                      <label className="ml-4 text-blue-500">Contact:</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) => setContactText(e.target.value)}
                        className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        value={contactText}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-4 ml-[78px]">
                  <div className="flex flex-row">
                    <div>
                      <label className="ml-4 text-blue-500">NIC:</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) => setNicText(e.target.value)}
                        className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        value={nicText}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row ml-[15px]">
                    <div>
                      <label className="ml-4 text-blue-500">
                        Registered Date:
                      </label>
                    </div>
                    <div>
                      <input
                        className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                        type="text"
                        readOnly
                        value={registeredDateText}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <input
                  onClick={handleUpdate}
                    className="mt-4 h-[30px] w-[200px] bg-blue-600 text-white font-serif rounded-md shadow-md hover:bg-blue-500"
                    type="submit"
                    value="Update"
                  />
                  {updateMessage && (
                    <div className="text-red-600 mt-2">
                      <label>{updateMessage}</label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
