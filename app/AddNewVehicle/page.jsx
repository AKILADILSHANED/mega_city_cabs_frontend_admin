"use client"
import React from 'react'
import { useState } from 'react'

export default function AddVehicle() {

    const [vehicleNumnerState, setVehicleNumberState] = useState("")
    const [vehicleTypeState, setVehicleTypeState] = useState("")
    const [vehicleModelState, setVehicleModelState] = useState("")

    const [error, setError] = useState(
        {
            vehicleNumber: false,
            vehicleType: false,
            vehicleModel: false
        }
    )

    const newErrorState = {
        vehicleNumber: false,
        vehicleType: false,
        vehicleModel: false
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(vehicleNumnerState.trim() === ""){
            newErrorState.vehicleNumber = true            
        }
        if(vehicleTypeState.trim() === ""){
            newErrorState.vehicleType = true
        }
        if(vehicleModelState.trim() === ""){
            newErrorState.vehicleModel = true
        }
        setError(newErrorState)
    }   

  return (   

    <div className='flex-col items-center justify-center'>
        <div className=' bg-rose-700 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-500 shadow-md'>
            <label className='text-white text-xl font-serif'>Add New Vehicle</label>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='mt-4 border-none shadow-md hover:shadow-lg h-[250px] min-w-screen flex-col items-start justify-start'>
            
            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Number:</label>
            <input onChange={(e) => setVehicleNumberState(e.target.value)} value={vehicleNumnerState} className='text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Number'/>
            {error.vehicleNumber && <div><label className='text-red-400 ml-[140px] text-sm'>Vehicle number is required!</label></div>}
            </div>

            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Type:</label>
            <input onChange={(e)=> setVehicleTypeState(e.target.value)} className='text-md w-[300px] ring-1 ring-blue-500 ml-7 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Type (Ex: Car, Lorry)'/>
            {error.vehicleType && <div><label className='text-red-400 ml-[140px] text-sm'>Vehicle type is required!</label></div>}
            </div>

            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Model:</label>
            <input onChange={(e)=>setVehicleModelState(e.target.value)} className='text-md w-[300px] ring-1 ring-blue-500 ml-5 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Model'/>
            {error.vehicleModel && <div><label className='text-red-400 ml-[140px] text-sm'>Vehicle model is required!</label></div>}
            </div>

            <div>
                <input className=" ml-[138] h-[30px] w-[80px] bg-green-600 text-white font-serif rounded-md shadow-md hover:bg-green-500" type='submit' value="Submit"/>
            </div>
            

        </div>
        </form>
    </div>
  )
}
