import React from "react";
import ToDo from "./toDo";

export default function WorkerDashBody()
{
    return(
        <div className="w-full h-max bg-[#171717] py-2 mt-[70px]">
            <div className="container mx-auto h-max rounded-xl mt-6 py-2">
                <div className="flex flex-row items-start justify-center gap-4 py-2">
                    <div className="flex flex-col items-start justify-center w-1/3 px-16">
                        <h1 className="font-[Poppins] text-white text-lg py-4 text-start">To Do</h1>
                        <div className="flex flex-col items-start justify-center w-full gap-4 p-2">
                            <ToDo/>
                            <ToDo/>
                            <ToDo/>
                            <ToDo/>
                            <ToDo/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/3 px-16">
                        <h1 className="font-[Poppins] text-white text-lg py-4 text-start">In Progress</h1>
                        <div className="flex flex-col items-start justify-center w-full gap-4 p-2">
                            <ToDo/>
                            <ToDo/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/3 px-16">
                        <h1 className="font-[Poppins] text-white text-lg py-4 text-start">Done</h1>
                        <div className="flex flex-col items-start justify-center w-full gap-4 p-2">
                            <ToDo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}