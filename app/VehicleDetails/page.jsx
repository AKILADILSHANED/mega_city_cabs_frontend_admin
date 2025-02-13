"use client";
import React, { useState } from "react";

export default function page() {
  //States
  const [error, setError] = useState("");
  const [vehicleNumberState, setVehicleState] = useState("");
  const [vehicleDetailsState, setVehicleDetailsState] = useState(false);

  const [vehicleId, setVehicleId] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [vehicleModel, setVehicleModel] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleRegisterDate, setVehicleRegisterDate] = useState("")
  const [vehicleRegisterBy, setVehicleRegisterBy] = useState("")

  const handleSearch = async (e) => {
    if (!vehicleNumberState) {
      setError("Vehicle number is required!");  
      return;    
    }

    try{
        const url = `http://localhost:8080/api/v1/vehicle/vehicle-search?vehicleId=${encodeURIComponent(vehicleNumberState)}`
        const request = await fetch(
            url,
            {method: "GET"}
        )
        if(request.ok){
            const response = await request.json()
            if(!response || !response.vehicleId){
                setError("No vehicle detaild found!")
            }else{
                setVehicleId(`${response.vehicleId}`)
                setVehicleNumber(`${response.vehicleNumber}`)
                setVehicleModel(`${response.vehicleModel}`)
                setVehicleType(`${response.vehicleType}`)
                setVehicleRegisterDate(`${response.registeredDate}`)
                setVehicleRegisterBy(`${response.admin.firstName}`)
                setVehicleDetailsState(true)
            }            
        }else{
            alert("No response!")
        }
    }catch{
        setError("An error occurred while getting the vehicle details!")
    }   
    
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Vehicle Details
          </label>
        </div>

        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[65px] min-w-screen flex-col items-start justify-start">
          <div className="flex flex-row">
            <label className="mt-2 ml-4 text-blue-500">Vehicle ID:</label>
            <input
              className="mt-2 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2 h-[25px]"
              type="text"
              placeholder="Please provide Vehicle ID"
              onChange={(e) => setVehicleState(e.target.value)}
              value={vehicleNumberState}
            />
            <input
              className="mt-1 ml-4 h-[30px] w-[80px] bg-green-600 text-white font-serif rounded-md shadow-md hover:bg-green-500"
              type="submit"
              value="Search"
              onClick={handleSearch}
            />
          </div>

          {error && (
            <div>
              <label className="text-red-400 ml-[100px] text-sm">{error}</label>
            </div>
          )}
        </div>
      </div>

      <div>
        {vehicleDetailsState && (
        <form onSubmit={handleSearch}>
          <div>
            <div className="flex-col items-center justify-center mt-5">
              <div className=" bg-blue-50 text-white min-w-screen h-[35px] flex items-center justify-center shadow-md">
                <label className="text-blue-800 text-xl font-serif">
                  Vehicle Details for provided Vehicle ID
                </label>
              </div>
            </div>

            <div className="mt-6 bg-white h-[150px] shadow-md hover:shadow-lg flex flex-col">
              <div className="flex flex-row">
                <div className="flex flex-row ml-[44px]">
                  <div>
                    <label className="ml-4 text-blue-500">Vehicle ID:</label>
                  </div>
                  <div>
                    <input
                      className="text-md text-slate-600 w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                      type="text"
                      readOnly
                      value={vehicleId}
                    />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div>
                    <label className="ml-4 text-blue-500">
                      Vehicle Number:
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                      type="text"
                      readOnly
                      value={vehicleNumber}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row mt-4">
                <div className="flex flex-row ml-[15px]">
                  <div>
                    <label className="ml-4 text-blue-500">Vehicle Model:</label>
                  </div>
                  <div>
                    <input
                      className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                      type="text"
                      readOnly
                      value={vehicleModel}
                    />
                  </div>
                </div>

                <div className="flex flex-row ml-[24px]">
                  <div>
                    <label className="ml-4 text-blue-500">Vehicle Type:</label>
                  </div>
                  <div>
                    <input
                      className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                      type="text"
                      readOnly
                      value={vehicleType}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row mt-4">
                <div className="flex flex-row">
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
                      value={vehicleRegisterDate}
                    />
                  </div>
                </div>

                <div className="flex flex-row ml-[15px]">
                  <div>
                    <label className="ml-4 text-blue-500">Registered By:</label>
                  </div>
                  <div>
                    <input
                      className="text-slate-600 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2"
                      type="text"
                      readOnly
                      value={vehicleRegisterBy}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        )}
      </div>
    </div>
  );
}
