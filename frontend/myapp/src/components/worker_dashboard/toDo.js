import React from "react";
import {MdCheckCircle} from "react-icons/md"

export default function ToDo()
{
    return(
        <div className="bg-[#303030] w-full h-max p-4 shadow-md shadow-gray-900 rounded-xl hover:border-[0.2px] border-white border-dashed">
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex flex-row items-center justify-center gap-4 text-white">
                    <MdCheckCircle className="text-lg"/>
                    <h1 className="text-white font-[Poppins] text-lg">Title of the work</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#c87070]">Medium</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#697d36]">Water Problem</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">Tuesday</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <input type="text" placeholder="Write a Note" className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585] outline-none"></input>
                    {/* <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">Tuesday</h1> */}
                </div>
            </div>
        </div>
    )
}