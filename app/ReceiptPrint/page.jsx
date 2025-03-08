"use client"
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ReceiptPrintingpage() {
    const searchParams = useSearchParams();
    const receiptNumber = searchParams.get("receiptNumber");
    const vat = searchParams.get("vat");

    const [recceiptNumber, setReceiptNumber] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [bookingId, setBookingId] = useState("");
    const [adminId, setAdminId] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [receiptDate, setReceiptDate] = useState("");
    const [pickup, setPickup] = useState();
    const [destination, setDestination] = useState("");
    const [fare, setFare] = useState("");
    const [vatAmount, setVatAmount] = useState("");
    const [serviceCharge, setServiceCharge] = useState("");
    const [totalDue, setTotalDue] = useState("");

    
    useEffect(
        ()=>{
            const getreceiptData = async ()=>{
                const request = await fetch(
                    `http://localhost:8080/api/v1/receipts/receipt-print?receiptNumber=${encodeURIComponent(receiptNumber)}&vat=${encodeURIComponent(vat)}`,
                    {
                        method:"GET",
                        credentials:"include"
                    }
                );
                const responseData = await request.json();
                setReceiptNumber(responseData.receiptNumber);
                setCustomerId(responseData.customerId);
                setBookingId(responseData.bookingId);
                setAdminId(responseData.adminId);
                setPaymentType(responseData.paymentType);
                setReceiptDate(responseData.receiptDate);
                setPickup(responseData.pickupLocation);
                setDestination(responseData.destination);
                setVatAmount(responseData.vatAmount);
                setFare(responseData.fare);
                setServiceCharge(responseData.serviceCharge);
                setTotalDue(responseData.totalDue);
            };
            getreceiptData();
        },
        []
    );



  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-dotted border-black h-[410px] w-[800px] mt-[50px]">
        <div className="flex flex-col items-center">
          <div className="mt-2 text-slate-500 text-2xl font-serif font-bold">
            Mega City Cab Services
          </div>
          <div className="text-slate-200">
            -----------------------------------------------------------------------------------------------------------------------------------
          </div>

          <div className="border w-[780px] h-[85px] rounded-md">
            <div className="ml-[140px]">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Receipt No:
                  </label>
                  <div className="text-sm text-slate-400 ml-2">{recceiptNumber}</div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Branch ID:
                  </label>
                  <div className="text-sm text-slate-400 ml-[15px]">
                    010
                  </div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">Admin:</label>
                  <div className="text-sm text-slate-400 ml-[38px]">
                    {adminId}
                  </div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">TIN No:</label>
                  <div className="text-sm text-slate-400 ml-[33px]">
                    139052080-7000
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-[300px] mt-[-80px]">
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Customer ID:
                  </label>
                  <div className="text-sm text-slate-400 ml-2">{customerId}</div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Booking ID:
                  </label>
                  <div className="text-sm text-slate-400 ml-[15px]">
                    {bookingId}
                  </div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Payment Type:
                  </label>
                  <div className="text-sm text-slate-400 ml-[38px]">
                    {paymentType}
                  </div>
                </div>
                <div className="flex flex-row">
                  <label className="text-sm text-slate-400 ml-2">
                    Receipt Date:
                  </label>
                  <div className="text-sm text-slate-400 ml-[33px]">{receiptDate}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-400">
            From  {pickup} TO {destination}
          </div>

          <div className="flex flex-row">
            <table className="border border-solid w-[780px]">
              <thead>
                <tr className="text-slate-500 text-sm font-semibold border">
                  <th className="border">Description</th>
                  <th className="border">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="border text-sm text-slate-500">Total Fare</td>
                  <td className="border w-[200px] text-sm text-slate-500">
                    {fare}
                  </td>
                </tr>
                <tr className="border">
                  <td className="border text-sm text-slate-500">VAT Amount ({vat}%)</td>
                  <td className="border w-[200px] text-sm text-slate-500">
                    {vatAmount}
                  </td>
                </tr>
                <tr className="border">
                  <td className="border text-sm text-slate-500">
                    Service Charge (10%)
                  </td>
                  <td className="border w-[200px] text-sm text-slate-500">
                    {serviceCharge}
                  </td>
                </tr>
                <tr className="border">
                  <td className="border font-bold text-sm text-slate-500">
                    Total Pay
                  </td>
                  <td className="border w-[200px] font-bold text-sm text-slate-500">
                    {totalDue}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border w-[780px] h-[65px] mt-[50px]">
            <div className="flex flex-row items-center justify-center">
              <label className="text-sm text-slate-400 ml-2">Address: </label>
              <label className="text-sm text-slate-400 ml-2">
                No.225/2, Vauxhall Street, Colombo 02, Sri Lanka{" "}
              </label>
            </div>

            <div className="flex flex-row items-center justify-center">
              <label className="text-sm text-slate-400 ml-2">
                Contact: 011-2445636
              </label>
            </div>
            <div className="flex flex-row items-center justify-center">
              <label className="text-sm text-slate-400 ml-2">
                Email: mega.city@hotmail.com
              </label>
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>window.print()} className="border w-[80px] bg-blue-600 mt-2 hover:bg-blue-500 hover:border-none text-white font-serif">Print</button>
    </div>
  );
}
