"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function CustomerDetails() {
  const [customerObjects, setCustomerObjects] = useState([{}]);

  useEffect(() => {
    const getCsutomerDetails = async () => {
      try {
        const request = await fetch(
          "http://localhost:8080/api/v1/reports/customer-report",
          {
            method: "GET",
          }
        );
        const response = await request.json();
        setCustomerObjects(response);
      } catch (error) {
        alert("A error occurred while fetching the data!");
      }
    };
    getCsutomerDetails();
  }, []);

  return (
    <div>
      <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
        <label className="text-white text-xl font-serif">
          Customer Details Report
        </label>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  NIC
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
                {
                    customerObjects.map(
                        element=>{
                            return(
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">{element.customerId}</td>
                                <td className="px-6 py-4">{element.firstName}</td>
                                <td className="px-6 py-4">{element.lastName}</td>
                                <td className="px-6 py-4">{element.address}</td>
                                <td className="px-6 py-4">{element.nic}</td>
                                <td className="px-6 py-4">{element.contact}</td>
                                <td className="px-6 py-4">{element.email}</td>
                               
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
