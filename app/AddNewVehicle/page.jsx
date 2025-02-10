import React from 'react'

export default function AddVehicle() {
  return (
    <div className='flex-col items-center justify-center'>
        <div className=' bg-rose-600 text-white min-w-screen h-[35px] flex items-center justify-center hover:bg-rose-400 shadow-md'>
            <label className='text-white text-xl font-serif'>Add New Vehicle</label>
        </div>
        <form>
        <div className='mt-4 border-none shadow-md hover:shadow-lg h-[200px] min-w-screen flex-col items-start justify-start'>
            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Number:</label>
            <input className='text-md w-[300px] ring-1 ring-blue-500 ml-2 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Number'/>
            </div>

            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Type:</label>
            <input className='text-md w-[300px] ring-1 ring-blue-500 ml-7 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Type (Ex: Car, Lorry)'/>
            </div>

            <div className='mb-4'>
            <label className='mt-4 ml-4 text-blue-500'>Vehicle Model:</label>
            <input className='text-md w-[300px] ring-1 ring-blue-500 ml-5 border-none rounded-sm hover:shadow-md px-2' type='text' placeholder='Enter Vehicle Model'/>
            </div>

            <div>
                <input className=" ml-[138] h-[30px] w-[80px] bg-green-600 text-white font-serif rounded-md shadow-md hover:bg-green-500" type='submit' value="Submit"/>
            </div>
            

        </div>
        </form>
    </div>
  )
}
