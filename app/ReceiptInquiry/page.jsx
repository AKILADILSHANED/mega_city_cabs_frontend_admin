"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReceiptInquiry() {
  const [textReceiptNumber, setTextReceiptNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textReceiptNumber == "") {
      setErrorMessage("This field is required!");
      return;
    } else {
        router.push(`/ReceiptPrint?receiptNumber=${encodeURIComponent(textReceiptNumber)}`);
    }
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div className="bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Receipt Inquiry
          </label>
        </div>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[65px] min-w-screen flex flex-row items-start justify-start">
          <label className="ml-4">Receipt Number:</label>
          <input
            onChange={(e) => {
              setTextReceiptNumber(e.target.value);
            }}
            className="border border-blue-300 shadow-md ml-2 outline-blue-300 px-2"
            placeholder="Enter Receipt Number"
          />
          <button onClick={handleSubmit} className="border ml-2 w-[75px] border-blue-400 bg-blue-400 text-white hover:bg-blue-500">
            Submit
          </button>
          {errorMessage && (
            <div className="ml-5 text-sm text-red-500">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
