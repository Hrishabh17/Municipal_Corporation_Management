import React, { useState, useEffect } from "react";
import {AiOutlineLogin} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {HiFlag} from 'react-icons/hi'
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
const axios = require('axios')

export default function HomeBody()
{
    const [data, setData] = useState([{}])

    async function getData() {
        await axios.get('/complaint/getCount').then((response)=>{
            console.log(response.data)
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    }, [])

    const navigate = useNavigate()

    return(
        <React.StrictMode>
        <div className="w-full h-max bg-[#171717]  py-2 mt-14">
            <div className="container mx-auto h-[720px]">
                <div className="flex flex-row items-center justify-center mt-16">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-4/5 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
                </div>
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-12">
                    <div onClick={()=>{navigate('/register')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#303030] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] hover:bg-blue-800 min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Citizen Registration</h1>
                            <BsFillPersonPlusFill className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-300 font-[Poppins] font-semibold text-sm py-4">Register through the citizen signup portal</h1>
                    </div>
                    <div onClick={()=>{navigate('/login')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#303030] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] hover:bg-blue-800  min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Login</h1>
                            <AiOutlineLogin className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-300 font-[Poppins] font-semibold text-sm py-4">Login through the portal in order to raise a new complaint</h1>
                    </div>
                    <div onClick={()=>{navigate('/complaint')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#303030] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] hover:bg-blue-800  min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-white font-[Poppins] font-semibold text-lg">Raise a Complaint</h1>
                            <HiFlag className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-gray-300 font-[Poppins] font-semibold text-sm py-4">Login through the portal in order to raise a new complaint</h1>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-8">
                    <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-gray-300 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-black font-[Poppins] text-2xl font-semibold">Total Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={data[0].total} delay={1} duration={5}>
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
                            <CountUp start={0} end={data[0].resolved} delay={1} duration={5}>
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
                            <CountUp start={0} end={data[0].pending} delay={1} duration={5}>
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
        </React.StrictMode>
    )
}