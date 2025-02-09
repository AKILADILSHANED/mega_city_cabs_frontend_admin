"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashBoard() {
  const router = useRouter()
  const [buttonStateRegister, setButtonStateRegister] = useState(false);
  const [buttonStateBooking, setButtonStateBooking] = useState(false);
  const [buttonStateManageVehicle, setButtonStateManageVehicle] = useState(false)
  const [buttonStateManageDriver, setButtonStateManageDriver] = useState(false)
  const [buttonStateReceipt, setButtonStateReceipts] = useState(false)
  
  let functionList = [setButtonStateRegister, 
    setButtonStateBooking, 
    setButtonStateManageVehicle, 
    setButtonStateManageDriver, 
    setButtonStateReceipts]

  const activeFunctions = (functionList)=>{
    for(let activeMenu of functionList){
        activeMenu(false)
    }
  }

  const handleClickManageRegistration = () => {
    activeFunctions(functionList)
    setButtonStateRegister(!buttonStateRegister);
  };

  const handleManageBookings = ()=>{
    activeFunctions(functionList)
    setButtonStateBooking(!buttonStateBooking)
  }

  const handleManageVehicles = ()=>{
    activeFunctions(functionList)
    setButtonStateManageVehicle(!buttonStateManageVehicle)
  }

  const handleManageDrivers = ()=>{
    activeFunctions(functionList)
    setButtonStateManageDriver(!buttonStateManageDriver)
  }

  const handleManageReceipts = ()=>{
    activeFunctions(functionList)
    setButtonStateReceipts(!buttonStateReceipt)
  }

  const handleLogout = ()=>{
        router.push("/AdminLogin")    
  }

  return (
    <div>
      <div className="bg-purple-800 h-[50px] mt-2 ml-1 mr-1 shadow-md flex items-center justify-center text-2xl font-bold">
        <label className="text-white">
          Welcome to Mega Cabs Serivce Admin Panel
        </label>
      </div>

      <div className="flex flex-col mt-1 ml-1">
        <div className="bg-purple-900 text-white w-[260px] h-[35px] flex items-center justify-center hover:bg-purple-800">
          <label>Admin Modules</label>
        </div>
        <div className="shadow-lg w-[260px] h-[530px] border flex flex-col items-center">
          <div>
            <div
              onClick={handleClickManageRegistration}
              className=" border h-[35px] w-[260px] mt-3 flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Manage Registrations</label>
            </div>
            {buttonStateRegister && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Confirm Registration</label>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={handleManageBookings}
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Manage Bookings</label>
            </div>
            {buttonStateBooking && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Confirm Bookings</label>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={handleManageVehicles}
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Manage Vehicles</label>
            </div>
            {buttonStateManageVehicle && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Add new Vehicle</label>
              </div>              
            )}
            {buttonStateManageVehicle && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Vehicle Details</label>
              </div>              
            )}
            {buttonStateManageVehicle && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Vehicle Details</label>
              </div> 
            )}
            {buttonStateManageVehicle && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Remove Vehicle</label>
              </div> 
            )}
          </div>

          <div>
            <div
              onClick={handleManageDrivers}
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Manage Drivers</label>
            </div>
            {buttonStateManageDriver && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Add Driver Details</label>
              </div>              
            )}
            {buttonStateManageDriver && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Driver Inquiry</label>
              </div>              
            )}
            {buttonStateManageDriver && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Driver Details</label>
              </div> 
            )}
            {buttonStateManageDriver && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Remove Driver</label>
              </div> 
            )}
          </div>

          <div>
            <div
              onClick={handleManageReceipts}
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Receipts</label>
            </div>
            {buttonStateReceipt && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Issue new receipt</label>
              </div>              
            )}
            {buttonStateReceipt && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Receipt Details</label>
              </div>              
            )}
            {buttonStateReceipt && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Delete Receipt</label>
              </div> 
            )}
            {buttonStateReceipt && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Receipt Inquiry</label>
              </div> 
            )}
          </div>

          <div>
            <div
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Report Generator</label>
            </div>            
          </div>

          <div>
            <div
              onClick={handleLogout}
              className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label className="ml-2">Log Out</label>
            </div>                       
          </div>

          
        </div>
      </div>

      <div className="shadow-lg w-[1080px] h-[565px] ml-[280px] mt-[-565px] border"></div>
    </div>
  );
}
