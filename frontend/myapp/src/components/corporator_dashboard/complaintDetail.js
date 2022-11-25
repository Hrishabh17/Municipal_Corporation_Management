import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Buffer} from 'buffer'
import Timeline from "../userPages/timeline";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const axios = require('axios')

export default function ComplaintDetail(){

    const location = useLocation();
    const image = Buffer.from(location.state[0].complaint_photo).toString()
    const regDate = location.state[0].registration_date.slice(0, 10)
    const [data, setData] = useState([])
    let navigate = useNavigate();

    async function getTimeline(){
        await axios.post('/complaint/getcomplainttimeline', 
            {id:location.state[0].complaint_number}
          )
          .then(function (response) {
            setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(()=>{
        getTimeline()
    }, [])

    return(
            <div className="w-full h-max bg-[#171717]  py-2 mt-14">
                <div className="container mx-auto h-max min-h-[720px] my-16 text-white w-6/12 rounded-xl border-2 border-white">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="grid grid-cols-3 w-full border-b-2 place-items-stretch border-b-orange-200">
                            <div className="grid grid-cols-3 w-full place-items-stretch border-b-orange-200">
                                <BsFillArrowLeftCircleFill onClick={() => navigate(-1)} className='place-self-center text-2xl hover:text-orange-200'/>
                            </div>
                            <h1 className="font-[Poppins] text-xl text-white py-4 w-full">Complaint Details</h1>
                        </div>
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

                        <div className="flex flex-row items-center justify-center w-8/12 mt-4 border-b-2 border-b-orange-200 rounded-lg h-max pb-4"> 
                            <Timeline data={data}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}