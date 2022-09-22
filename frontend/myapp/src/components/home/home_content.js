import React, {useState} from "react";
import {AiOutlineLogin} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {HiFlag} from 'react-icons/hi'
import CountUp from 'react-countup';

export default function HomeBody()
{
    let [count, setCount] = useState(0);


    return(
        <div className="w-full h-max bg-[#080808] py-2 mt-14">
            <div className="container mx-auto h-[720px]">
                <div className="flex flex-row items-center justify-center mt-16">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-4/5 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
                </div>
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-12">
                <div className="flex flex-col justify-center items-center w-1/4 p-4 border-[1.5px] border-gray-400 h-max bg-black rounded-lg shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Citizen Registration</h1>
                            <BsFillPersonPlusFill className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-400 font-[Poppins] font-semibold text-sm py-4">Login through the portal in order to raise a new complaint</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-[1.5px] border-gray-400 h-max bg-black rounded-lg shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Login</h1>
                            <AiOutlineLogin className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-400 font-[Poppins] font-semibold text-sm py-4">Login through the portal in order to raise a new complaint</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-[1.5px] border-gray-400 h-max bg-black rounded-lg shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Raise a Complaint</h1>
                            <HiFlag className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-400 font-[Poppins] font-semibold text-sm py-4">Login through the portal in order to raise a new complaint</h1>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-8">
                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-gray-300 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-black font-[Poppins] text-2xl font-semibold">Total Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={105} delay={1} duration={5}>
                            {({ countUpRef }) => (
                                <div className="text-black font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-green-100 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-green-900 font-[Poppins] text-2xl font-semibold">Resolved Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={87} delay={1} duration={5}>
                            {({ countUpRef }) => (
                                <div className="text-green-900 font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-red-100 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-red-900 font-[Poppins] text-2xl font-semibold">Pending Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={18} delay={1} duration={5}>
                            {({ countUpRef }) => (
                                <div className="text-red-900 font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}