"use client";
import React, { useState } from "react";

export default function ReceiptIssue() {
  const [textBookingId, setTextBookingId] = useState("");
  const [bookingIdError, setBookingIdError] = useState(false);
  const [responseState, setResponseState] = useState({});
  const [bookingDetailsWindow, setBookingDetailsWindow] = useState(false);
  const [receiptDetailsWindow, setReceiptDetailsWindow] = useState(false);
  const [issueReceipt, setIssueReceipt] = useState(false);

  const handleSubmit = async () => {
    setBookingDetailsWindow(false);
    setReceiptDetailsWindow(false);
    if (textBookingId == "") {
      setBookingIdError("Booking ID is required!");
    } else {
      setBookingIdError(false);
      try {
        const request = await fetch(
          `http://localhost:8080/api/v1/receipts/booking-details?bookingId=${encodeURIComponent(
            textBookingId
          )}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (request.ok) {
          const responseData = await request.json();
          if (responseData.message == 1) {
            setResponseState(responseData);
            setBookingDetailsWindow(true);
          } else if (responseData.message == 0) {
            alert("No record found for provided Booking ID!");
          } else {
            alert("An error occurred. Please contact administrator!");
          }
        } else {
          alert(
            "Error while receiving the response. Please contact administrator!"
          );
        }
      } catch (error) {
        alert(
          "An error occurred while fetching data. Please contact administrator!"
        );
      }
    }
  };

  const handleReceiptIssue = () => {
    setReceiptDetailsWindow(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex-col items-center justify-center">
        <div className="bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Receipting Module
          </label>
        </div>
        <div className="flex flex-row items-center bg-white shadow-md h-[60px]">
          <label className="ml-6">Booking ID: </label>
          <input
            onChange={(e) => setTextBookingId(e.target.value)}
            className="ml-2 px-2 border shadow-lg border-blue-200 rounded-sm outline-blue-400"
            placeholder="Enter Booking ID"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-2 border border-slate-600 hover:border-none rounded-sm shadow-lg w-[75px] hover:text-white hover:bg-slate-600">
            Submit
          </button>
          {bookingIdError && (
            <div className="ml-2 text-red-500">{bookingIdError}</div>
          )}
        </div>

        {bookingDetailsWindow && (
          <div>
            <div className="mt-4 bg-blue-200 text-white hover:bg-blue-300 flex items-center justify-center h-[30px]">
              Booking Details
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Booking ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Booking Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pick Up
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Destination
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Vehicle
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Customer ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Customer Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{responseState.bookingId}</td>
                    <td className="px-6 py-4">{responseState.bookingDate}</td>
                    <td className="px-6 py-4">
                      {responseState.pickupLocation}
                    </td>
                    <td className="px-6 py-4">{responseState.destination}</td>
                    <td className="px-6 py-4">{responseState.vehicleType}</td>
                    <td className="px-6 py-4">{responseState.customerId}</td>
                    <td className="px-6 py-4">
                      {responseState.firstName + " " + responseState.lastName}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={handleReceiptIssue}
                        className="border border-blue-400 w-[100px] h-[28px] bg-blue-500 text-white shadow-lg rounded-sm hover:bg-blue-400">
                        Issue Receipt
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {receiptDetailsWindow && (
          <div className="mt-4">
            <div className="flex justify-center bg-blue-300 text-white hover:bg-blue-200 h-[30px]">
              <label>Enter Receipt Details</label>
            </div>
            <div className="bg-white h-[200px] shadow-lg ">
              <div className="flex flex-row ml-4 mt-4">
                <div className="ml-[18px] mt-4">
                  <label>Payment Type: </label>
                  <select className="border border-blue-300 outline-blue-200 w-[214px] h-[28px]">
                    <option key={"selsection"}>- Select Payment Type -</option>
                    <option key={"cash"}>Cash</option>
                    <option key={"bank"}>Bank Payment</option>
                    <option key={"cheque"}>Cheque</option>
                    <option key={"online"}>Online</option>
                  </select>
                </div>

                <div className="ml-[40px] mt-4">
                  <label>Tax Rate: </label>
                  <input
                  placeholder="Enter Tax Rate"
                    type="text"
                    className="border border-blue-300 outline-blue-300 px-2"
                  />
                </div>
              </div>

              <div className="flex flex-row ml-4 mt-4">
                <div className="ml-[87px]">
                  <label>Fare: </label>
                  <input
                  placeholder="Enter Fare"
                    type="text"
                    className="border border-blue-300 outline-blue-300 px-2"
                  />
                </div>

                <div className="ml-4">
                  <label>Customer ID: </label>
                  <input
                  readOnly
                    type="text"
                    className="border border-blue-300 outline-blue-300 px-2"
                  />
                </div>
              </div>

              <div className="flex flex-row ml-4 mt-4">
                <div className="ml-[43px]">
                  <label>Booking ID: </label>
                  <input
                  readOnly
                    type="text"
                    className="border border-blue-300 outline-blue-300 px-2"
                  />
                </div>
              </div>

              <div className="flex flex-row ml-4 mt-4">
                <div className="ml-[130px]">
                  <button type="Submit" className="border w-[100px] bg-green-700 text-white hover:bg-green-600 shadow-lg">
                    Submit
                  </button>
                </div>
                <div className="ml-2">
                  <button type="Submit" className="border w-[100px] bg-red-700 text-white hover:bg-red-600 shadow-lg">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
