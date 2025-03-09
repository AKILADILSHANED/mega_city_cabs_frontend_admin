"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashBoard() {
  const router = useRouter();

  const [urlState, setUrlState] = useState(null);

  const [buttonStateRegister, setButtonStateRegister] = useState(false);
  const [buttonStateBooking, setButtonStateBooking] = useState(false);
  const [buttonStateManageVehicle, setButtonStateManageVehicle] =
    useState(false);
  const [buttonStateManageDriver, setButtonStateManageDriver] = useState(false);
  const [buttonStateReceipt, setButtonStateReceipts] = useState(false);

  const [subButtonStateVehicleAdd, setSubButtonStateVehicleAdd] =
    useState(false);
  const [subButtonStateVehicleDetails, setSubButtonStateVehicleDetails] =
    useState(false);
  const [subButtonStateVehicleUpdate, setSubButtonStateVehicleUpdate] =
    useState(false);
  const [subButtonStateVehicleDelete, setSubButtonStateVehicleDelete] =
    useState(false);
  const [subButtonStateDriverAdd, setButtonStateDriverAdd] = useState(false);
  const [subButtonStateDriverInquiry, setButtonStateDriverInquiry] =
    useState(false);
  const [subButtonStateDriverUpdate, setButtonStateDriverUpdate] =
    useState(false);
  const [subButtonStateDriverDelete, setButtonStateDriverDelete] =
    useState(false);
  const [subButtonStateConfirmRequest, setButtonStateConfirmRequest] =
    useState(false);
  const [subButtonStateConfirmBooking, setButtonStateConfirmBooking] =
    useState(false);
  const [subButtonStateNewReceipt, setButtonStateNewReceipt] = useState(false);
  const [subButtonStateReceiptInquiry, setButtonStateReceiptInquiry] =
    useState(false);
  const [subButtonStateReceiptDelete, setButtonStateReceiptDelete] =
    useState(false);
  const [subButtonGenerateReports, setSubButtonGenerateReports] =
    useState(false);

  const subFunctionList = [
    setSubButtonStateVehicleAdd,
    setSubButtonStateVehicleDetails,
    setSubButtonStateVehicleUpdate,
    setSubButtonStateVehicleDelete,
    setButtonStateDriverAdd,
    setButtonStateDriverInquiry,
    setButtonStateDriverUpdate,
    setButtonStateDriverDelete,
    setButtonStateConfirmRequest,
    setButtonStateConfirmBooking,
    setButtonStateNewReceipt,
    setButtonStateReceiptInquiry,
    setButtonStateReceiptDelete,
    setSubButtonGenerateReports
  ];

  const handleSubButtonClick = (setActiveFunction, url) => {
    for (let subButton of subFunctionList) {
      subButton(false);
    }
    setActiveFunction(true);
    setUrlState(url);
  };

  let functionList = [
    setButtonStateRegister,
    setButtonStateBooking,
    setButtonStateManageVehicle,
    setButtonStateManageDriver,
    setButtonStateReceipts,
  ];

  const activeFunctions = (functionList) => {
    for (let activeMenu of functionList) {
      activeMenu(false);
    }
  };

  const handleClickManageRegistration = () => {
    activeFunctions(functionList);
    setButtonStateRegister(!buttonStateRegister);
  };

  const handleManageBookings = () => {
    activeFunctions(functionList);
    setButtonStateBooking(!buttonStateBooking);
  };

  const handleManageVehicles = () => {
    activeFunctions(functionList);
    setButtonStateManageVehicle(!buttonStateManageVehicle);
  };

  const handleManageDrivers = () => {
    activeFunctions(functionList);
    setButtonStateManageDriver(!buttonStateManageDriver);
  };

  const handleManageReceipts = () => {
    activeFunctions(functionList);
    setButtonStateReceipts(!buttonStateReceipt);
  };

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <div>
      <div className="bg-purple-800 h-[50px] mt-2 ml-1 mr-1 w-[1350px] shadow-md flex items-center justify-center text-2xl font-bold">
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
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateConfirmRequest,
                    "/ConfirmRequest"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
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
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateConfirmBooking,
                    "/ConfirmBooking"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
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
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setSubButtonStateVehicleAdd,
                    "/AddNewVehicle"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Add new Vehicle</label>
              </div>
            )}

            {buttonStateManageVehicle && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setSubButtonStateVehicleDetails,
                    "/VehicleDetails"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Vehicle Details</label>
              </div>
            )}

            {buttonStateManageVehicle && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setSubButtonStateVehicleUpdate,
                    "/UpdateVehicle"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Vehicle Details</label>
              </div>
            )}

            {buttonStateManageVehicle && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setSubButtonStateVehicleDelete,
                    "/RemoveVehicle"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
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
              <div
                onClick={() =>
                  handleSubButtonClick(setButtonStateDriverAdd, "/AddDriver")
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Add Driver Details</label>
              </div>
            )}
            {buttonStateManageDriver && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateDriverInquiry,
                    "/DriverInquiry"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Driver Inquiry</label>
              </div>
            )}
            {buttonStateManageDriver && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateDriverUpdate,
                    "/DriverUpdate"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Driver Details</label>
              </div>
            )}
            {buttonStateManageDriver && (
              <div
                onClick={() => {
                  handleSubButtonClick(
                    setButtonStateDriverDelete,
                    "/RemoveDriver"
                  );
                }}
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
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
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateNewReceipt,
                    "/ReceiptIssue"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Issue new receipt</label>
              </div>
            )}
            {buttonStateReceipt && (
              <div className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Update Receipt Details</label>
              </div>
            )}
            {buttonStateReceipt && (
              <div
                onClick={() => {
                  handleSubButtonClick(
                    setButtonStateReceiptDelete,
                    "/DeleteReceipt"
                  );
                }}
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Delete Receipt</label>
              </div>
            )}
            {buttonStateReceipt && (
              <div
                onClick={() =>
                  handleSubButtonClick(
                    setButtonStateReceiptInquiry,
                    "/ReceiptInquiry"
                  )
                }
                className="border h-[30px] w-[260px] flex items-center justify-start hover:bg-blue-200">
                <label className="ml-10">Receipt Inquiry</label>
              </div>
            )}
          </div>

          <div>
            <div 
            onClick={()=>{handleSubButtonClick(setSubButtonGenerateReports, "/GenerateReports")}}
            className=" border h-[35px] w-[260px] flex items-center justify-start hover:bg-blue-500 hover:text-white">
              <label              
               className="ml-2">Report Generator</label>
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

      <div className="shadow-lg w-[1080px] h-[565px] ml-[275px] mt-[-565px] border">
        {urlState && <iframe src={urlState} className="w-full h-full"></iframe>}
      </div>
    </div>
  );
}
