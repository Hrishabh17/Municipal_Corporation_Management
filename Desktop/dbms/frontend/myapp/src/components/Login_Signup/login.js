import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login()
{
    const navigate = useNavigate()
    
    return(
        <div className="w-full h-[100vh] bg-[#080808] py-2">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-16 w-1/3 mx-auto border-[0.5px] border-gray-300 p-4 gap-8 rounded-lg">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Login</h1>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input type="text" placeholder="Username" 
                            className="w-full h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input type="password" placeholder="Password" 
                            className="w-full h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <button className='w-full h-10 bg-white rounded-md shadow-sm hover:text-white font-[Poppins] px-4 outline-none font-medium hover:bg-blue-700 hover:duration-200'>Submit</button>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full py-4'>
                    <h1 onClick={()=>{navigate('/register')}} className='text-white font-[Poppins] text-base font-semibold hover:underline underline-offset-8 underline-white duration-200 hover:cursor-pointer'>Not registered? Signup Now!</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}