import React from "react";
import {useLocation} from 'react-router-dom';

export default function SuccessMsg(){

    const location = useLocation();

    return(
            <div className="w-full h-max bg-[#171717]  py-2 mt-14">
                <div className="container mx-auto h-[720px] my-16 text-white w-6/12 rounded-xl border-2 border-white">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="font-[Poppins] text-xl text-white py-4 border-b-2 border-b-orange-200 w-full">Complaint Details</h1>
                        <div className="flex flex-row items-center justify-center w-10/12 mt-6  border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Complaint Number</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{location.state.complaintInfo.complaintId}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Registration Time</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{location.state.complaintInfo.registrationTime.slice(0,10)} {location.state.complaintInfo.registrationTime.slice(11, 19)}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Location</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2 overflow-hidden">{location.state.complaintInfo.location}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Problem Description</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2 overflow-hidden">{location.state.complaintInfo.description}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max pb-4">
                        <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Problem Image</h1>
                            <img src={location.state.complaintInfo.complaint_photo} alt="Uploaded Profile" width={"350px"} className="border-2 border-white"></img>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}