import React from 'react'

export default function GenerateReports() {
  return (
    <div>
        <div className=" bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-600 shadow-md">
          <label className="text-white text-xl font-serif">
            Generate Reports
          </label>
        </div>
        <div className="mt-4 border-none shadow-md hover:shadow-lg h-[85px] min-w-screen flex-col items-start justify-start">
          <div className='ml-4 hover:underline text-blue-500 hover:text-blue-800'>
          <a href='/CustomerDetails'>Customer Details Report</a>
          </div>

          <div className='ml-4 hover:underline text-blue-500 hover:text-blue-800'>
          <a href='/BookingDetails'>Booking Details Report</a>
          </div>

          <div className='ml-4 hover:underline text-blue-500 hover:text-blue-800'>
          <a href=''>Receipts Details Report</a>
          </div>
          
        </div>
    </div>
  )
}
