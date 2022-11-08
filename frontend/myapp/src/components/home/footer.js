import React from "react";

export default function Footer()
{
    return(
        <div className="w-full h-max bg-[#171717] py-2 shadow-md shadow-blue-200 bottom-0">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center p-8 gap-2">
                    <div className="flex flex-row justify-center items-center hover:cursor-pointer gap-8">
                        <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Departments</h1>
                        <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Contact Us</h1>
                        <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">About Us</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-8">
                        <h1 className="text-white font-[Poppins] py-2">All rights reserved</h1>
                        <h1 className="text-white font-[Poppins] py-2">MyCityMyPride</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}