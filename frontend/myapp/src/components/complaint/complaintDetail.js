import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom';
import {Buffer} from 'buffer'

export default function ComplaintDetail(){

    const location = useLocation();
    const image = Buffer.from(location.state[0].complaint_photo).toString()
    const regDate = location.state[0].registration_date.slice(0, 10)

    return(
            <div className="w-full h-max bg-[#171717]  py-2 mt-14">
                <div className="container mx-auto h-[720px] my-16 text-white w-6/12 rounded-xl border-2 border-white">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="font-[Poppins] text-xl text-white py-4 border-b-2 border-b-orange-200 w-full">Complaint Details</h1>
                        <div className="flex flex-row items-center justify-center w-10/12 mt-6  border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Complaint Number</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{location.state[0].complaint_number}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Registration Time</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{regDate}  {location.state[0].registered_time}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Location</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2 overflow-hidden">{location.state[0].complaint_address}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Problem Description</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2 overflow-hidden">{location.state[0].complaint_description}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 rounded-lg h-max pb-4">
                        <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Problem Picture</h1>
                            <img src={image} alt="Uploaded Profile" width={"350px"} className="rounded-lg border-2 border-white"></img>
                        </div>
                    </div>
                </div>
            </div>
    )
}