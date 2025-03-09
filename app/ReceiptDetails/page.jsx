"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ReceiptDetails() {
  const [receiptObjects, setReceiptObjects] = useState([{}]);

  useEffect(() => {
    const getReceiptDetails = async () => {
      try {
        const request = await fetch(
          "http://localhost:8080/api/v1/reports/receipt-report",
          {
            method: "GET",
          }
        );
        const response = await request.json();
        setReceiptObjects(response);
      } catch (error) {
        alert("A error occurred while fetching the data!");
      }
    };
    getReceiptDetails();
  }, []);

  return (
    <div>
      <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
        <label className="text-white text-xl font-serif">
          Receipt Details Report
        </label>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Receipt Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Receipt Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Fare
                </th>
                <th scope="col" className="px-6 py-3">
                  Tax Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {receiptObjects.map((element) => {
                return (
                  <tr
                    key={element.bookingId}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">{element.receiptNumber}</td>
                    <td className="px-6 py-4">{element.receiptDate}</td>
                    <td className="px-6 py-4">{element.paymentType}</td>
                    <td className="px-6 py-4">{element.fare}</td>
                    <td className="px-6 py-4">{element.taxRate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
