"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BookingAssignment() {
  const searchParam = useSearchParams();
  const bookingId = searchParam.get("bookingId");
  const [assignDriver, setAssignDriver] = useState(false);
  const [assignVehicle, setAssignVehicle] = useState(false);
  const [assignDriverWindow, setAssignDriverWindow] = useState(false);
  const [assignVehicleWindow, setAssignVehicleWindow] = useState(false);

  const router = useRouter();

  const backToPage = () => {
    router.push("/ConfirmBooking");
  };

  const handleAssignDriver = () => {
    setAssignVehicleWindow(false);
    setAssignDriverWindow(true);
  };

  const handleAssignVehicle = () => {
    setAssignDriverWindow(false);
    setAssignVehicleWindow(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex-col items-center justify-center">
        <div className="bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Vehicle and Driver Assignment for Booking ID: {bookingId}
          </label>
        </div>

        <div className="flex items-center justify-center mt-5 bg-blue-300 hover:bg-blue-400 text-lg text-white h-[35px]">
          <div>Booking Details</div>
        </div>

        <div className="bg-white shadow-md h-[320px] flex flex-col items-start justify-start ">
          <div className="flex flex-row items-start justify-center">
            <div className="ml-[50px] mt-5">
              <label>Booking ID:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
            <div className="ml-8 mt-5">
              <label>Booking Date:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-row items-start justify-center">
            <div className="ml-8 mt-5">
              <label>Booking Type:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
            <div className="ml-[47px] mt-5">
              <label>Pick Up On:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-row items-start justify-center">
            <div className="ml-[48px] mt-5">
              <label>Destination:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
            <div className="ml-[75px] mt-5">
              <label>Vehicle:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-row items-start justify-center">
            <div className="ml-[86px] mt-5">
              <label>Driver:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
            <div className="ml-[86px] mt-5">
              <label>Client:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-row items-start justify-center">
            <div className="ml-[73px] mt-5">
              <label>Contact:</label>
              <input
                type="text"
                readOnly
                className="outline-blue-200 border border-blue-200 ml-2 w-[300px] px-2 text-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-row items-start justify-center">
            <div className="ml-[130px] mt-5">
              <button
                onClick={handleAssignDriver}
                className="border-none ml-2 w-[150px] h-[30px] shadow-lg bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                Assign Driver
              </button>
            </div>

            <div className="ml-2 mt-5">
              <button
                onClick={handleAssignVehicle}
                className="border-none ml-2 w-[150px] h-[30px] shadow-lg bg-green-500 hover:bg-green-600 text-white rounded-md">
                Assign Vehicle
              </button>
            </div>

            <div className="ml-2 mt-5">
              <button
                onClick={backToPage}
                className="border-none ml-2 w-[150px] h-[30px] shadow-lg bg-slate-500 hover:bg-slate-600 text-white rounded-md">
                Back
              </button>
            </div>
          </div>
        </div>

        {assignDriverWindow && (
          <div className="bg-white shadow-md h-[80px] mt-3 flex flex-row">
            <div className="ml-4 py-6">
              <label>Assign Driver:</label>
              <select className="w-[250px] h-[25px] border outline-blue-200 ml-4"></select>
            </div>

            <div className="ml-4 py-6">
              <button className="border ml-2 w-[110px] h-[28px] shadow-lg border-blue-400 hover:bg-blue-500 hover:text-white hover:border-none rounded-md">
                Assign
              </button>
            </div>
          </div>
        )}

        {assignVehicleWindow && (
          <div className="bg-white shadow-md h-[80px] mt-3 flex flex-row">
            <div className="ml-4 py-6">
              <label>Assign Vehicle:</label>
              <select className="w-[250px] h-[25px] border outline-blue-200 ml-4"></select>
            </div>

            <div className="ml-4 py-6">
              <button className="border ml-2 w-[110px] h-[28px] shadow-lg border-blue-400 hover:bg-blue-500 hover:text-white hover:border-none rounded-md">
                Assign
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
