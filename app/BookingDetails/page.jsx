"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function BookingDetails() {
  const [bookingObjects, setBookingObjects] = useState([{}]);

  useEffect(() => {
    const getBookingDetails = async () => {
      try {
        const request = await fetch(
          "http://localhost:8080/api/v1/reports/booking-report",
          {
            method: "GET",
          }
        );
        const response = await request.json();
        setBookingObjects(response);
      } catch (error) {
        alert("A error occurred while fetching the data!");
      }
    };
    getBookingDetails();
  }, []);

  return (
    <div>
      <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
        <label className="text-white text-xl font-serif">
          Booking Details Report
        </label>
      </div>
      <div>
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
                  Booking Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Pickup Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Destination
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Type
                </th>                
              </tr>
            </thead>
            <tbody>
                {
                    bookingObjects.map(
                        element=>{
                            return(
                            <tr key={element.bookingId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">{element.bookingId}</td>
                                <td className="px-6 py-4">{element.bookingDate}</td>
                                <td className="px-6 py-4">{element.bookingType}</td>
                                <td className="px-6 py-4">{element.pickupLocation}</td>
                                <td className="px-6 py-4">{element.destination}</td>
                                <td className="px-6 py-4">{element.vehicleType}</td>                               
                            </tr>
                            )
                        }
                    )
                }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
