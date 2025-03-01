"use client";
import React, { useState } from "react";
import Link from "next/link";


export default function ConfirmBooking() {
  const [bookingObj, setBookingObj] = useState([]);
  const [bookingTable, setBookingTable] = useState(false);

  const handlePendingBookings = async (e) => {
    e.preventDefault();
    setBookingTable(false);
    try {
      const request = await fetch(
        "http://localhost:8080/api/v1/booking/booking-approval",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (request.ok) {
        const response = await request.json();
        setBookingObj(response);
        setBookingTable(true);
      } else {
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className="bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Confirm Bookings
          </label>
        </div>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[25px] min-w-screen flex flex-row items-start justify-start">
          <a
            onClick={handlePendingBookings}
            className="underline hover:text-blue-500 ml-4 text-blue-500 cursor-pointer">
            Show Pending Bookings
          </a>
        </div>
        {bookingTable && (
          <div>
            <div className="w-full"></div>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Booking ID
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Date
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Type
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Pick Up
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Destination
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Vehicle
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Driver
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Customer First Name
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Customer Last Name
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Contact
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookingObj.map((object) => (
                    <tr key={object.bookingId} className="hover:bg-slate-50 hover:text-red-600" >
                      <td className="p-4 border-b border-slate-200 hover:underline hover:text-blue-800 text-blue-500"><Link href={{pathname:"/BookingAssignment", query:{bookingId:object.bookingId} }}>{object.bookingId}</Link></td>
                      <td className="p-4 border-b border-slate-200">{object.bookingDate}</td>
                      <td className="p-4 border-b border-slate-200">{object.bookingType}</td>
                      <td className="p-4 border-b border-slate-200">{object.pickupLocation}</td>
                      <td className="p-4 border-b border-slate-200">{object.destination}</td>
                      <td className="p-4 border-b border-slate-200">{object.vehicleNumber}</td>
                      <td className="p-4 border-b border-slate-200">{object.firstName}</td>
                      <td className="p-4 border-b border-slate-200">{object.first_name}</td>
                      <td className="p-4 border-b border-slate-200">{object.last_name}</td>
                      <td className="p-4 border-b border-slate-200">{object.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
