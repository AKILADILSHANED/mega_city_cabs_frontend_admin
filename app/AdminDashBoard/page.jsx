import React from 'react'

export default function AdminDashBoard() {
  return (
    <div>
        <div className='bg-purple-800 h-[50px] mt-2 ml-1 mr-1 shadow-md flex items-center justify-center text-2xl font-bold'>
            <label className='text-white'>Welcome to Mega Cabs Serivce Admin Panel</label>
        </div>

        <div className='flex flex-col mt-1 ml-1'>
            <div className='bg-purple-900 text-white w-[260px] h-[35px] flex items-center justify-center hover:bg-purple-800'>
                <label>Admin Modules</label>
            </div>
            <div className='shadow-lg w-[260px] h-[530px] border'>
                
            </div>
        </div>

        <div className='shadow-lg w-[1080px] h-[565px] ml-[280px] mt-[-565px] border'>
            
        </div>
    </div>
  )
}
