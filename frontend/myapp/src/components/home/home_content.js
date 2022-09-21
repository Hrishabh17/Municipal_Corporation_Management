import React from "react";

export default function HomeBody()
{
    return(
        <div className="w-full h-max bg-zinc-600 py-2 mt-14">
            <div className="container mx-auto h-[1120px]">
                <div className="flex flex-row items-center justify-center mt-16">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-3/4 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
                </div>
            </div>
        </div>
    )
}