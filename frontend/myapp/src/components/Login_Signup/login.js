import React from 'react'

export default function Login()
{
    return(
        <div className="w-full h-[100vh] bg-[#080808] py-2">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-16">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-2/5 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
                </div>
            </div>
        </div>
    )
}