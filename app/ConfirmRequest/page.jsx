"use client";
import React from "react";
import { useState } from "react";

export default function ConfirmRequest() {
  const [clickState, setClickState] = useState(false);
  const [pendingRequests, setRequests] = useState([]);

  const showPendingRequests = async () => {
    
    setClickState(false);

    try {
      const request = await fetch(
        "http://localhost:8080/api/v1/customer/pending-registrations",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (request.ok) {
        setClickState(true);
        const response = await request.json();
        setRequests(response);
      } else {
        alert("Response is not ok..");
        setClickState(false);
      }
    } catch (e) {}
  };

  const handleApprove = async (customerId) => {
    try {
      const request = await fetch(
        `http://localhost:8080/api/v1/pending-requests/approve-request?customerId=${encodeURIComponent(customerId)}`
        ,{method:"PUT"}
      );
      if(request.ok){
        const response = await request.json();
        if(response.approveCode == 1){
          alert(response.approveMessage);
          showPendingRequests();
        }else{
          alert(response.approveMessage);
        }
      }else{
        alert("Unable to approve the request. Please try again later!");
      }      
    } 
    catch(error){
      alert(error);
    }
  };


  const handleReject = async (customerId) => {
    try {
      const request = await fetch(
        `http://localhost:8080/api/v1/pending-requests/reject-request?customerId=${encodeURIComponent(customerId)}`
        ,{method:"PUT"}
      );
      if(request.ok){
        const response = await request.json();
        if(response.approveCode == 2){
          alert(response.approveMessage);
          showPendingRequests();
        }else{
          alert(response.approveMessage);
        }
      }else{
        alert("Unable to reject the request. Please try again later!");
      }      
    } 
    catch(error){
      alert(error);
    }
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className="bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Pending Customer Registrations
          </label>
        </div>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[25px] min-w-screen flex flex-row items-start justify-start">
          <a
            onClick={showPendingRequests}
            className="underline hover:text-blue-500 ml-4 text-blue-500 cursor-pointer">
            Show Pending Requests
          </a>
        </div>

        {clickState && (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Request Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((record) => (
                  <tr
                    key={record.customerId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{record.customerId}</td>
                    <td className="px-6 py-4">{record.firstName}</td>
                    <td className="px-6 py-4">{record.lastName}</td>
                    <td className="px-6 py-4">{record.contact}</td>
                    <td className="px-6 py-4">{record.requestedDate}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                      onClick={()=>handleApprove(record.customerId)}
                      className="border border-green-400 rounded-md hover:bg-green-400 hover:text-white hover:border-none h-[30px] w-[65px]">
                        Approve
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                      onClick={()=>handleReject(record.customerId)}
                      className="border  border-red-400 rounded-md hover:bg-red-400 hover:text-white hover:border-none h-[30px] w-[65px]">
                        Reject
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="border  border-blue-400 rounded-md hover:bg-blue-400 hover:text-white hover:border-none h-[30px] w-[65px]">
                        Show
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
