"use client";
import React, { useState } from "react";

export default function DeleteReceipt() {
  const [textReceiptNumber, setTextReceiptNumber] = useState("");

  const handleReceiptDelete = async () => {
    console.log(textReceiptNumber);
    try {
      const request = await fetch(
        `http://localhost:8080/api/v1/receipts/receipt-delete?receiptNumber=${encodeURIComponent(
          textReceiptNumber
        )}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (request.ok) {
        const response = await request.text();
        alert(response);
      } else {
        alert(
          "An error occuured while receiving the response. Please contact the administrator!"
        );
      }
    } catch (error) {
      alert("An error occurred. Please contact administrator!");
    }
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Delete Receipt
          </label>
        </div>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[65px] min-w-screen flex-col items-start justify-start">
          <div className="flex flex-row">
            <label className="mt-2 ml-4 text-blue-500">Receipt Number:</label>
            <input
              onChange={(e) => {
                setTextReceiptNumber(e.target.value);
              }}
              className="mt-2 text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2 h-[25px]"
              type="text"
              placeholder="Please enter Receipt Number"
            />
            <input
              className="mt-1 ml-4 h-[30px] w-[80px] bg-red-600 text-white font-serif rounded-md shadow-md hover:bg-red-500"
              type="submit"
              value="Delete"
              onClick={handleReceiptDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
