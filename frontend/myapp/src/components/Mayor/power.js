import React, { useEffect, useState } from 'react';
import Navbar from '../home/navbar'
import Footer from '../home/footer'
const axios =require('axios')


export default function MayorPower() {

    const[count, setCount] = useState(0) 
    const[count1, setCount1] = useState(0)
    const[count2, setCount2] = useState(0) 
    

    const fetchData = async()=>{
        await axios.get('/complaint/roadcomplaints').then((response)=>{
            console.log(response.data)
            
        response.data.map((data, index)=>{
            if(data.complaint_type==='Power Supply Department'){
                setCount(data.count)
            }
        })            


        }).catch((err)=>{
            console.log(err)
        })
    }
  
  
    useEffect(()=>{
        fetchData()
    },[])



    const fetchData1 = async()=>{
        await axios.get('/complaint/estTime').then((response)=>{
            console.log(response.data)
            
        response.data.map((data, index)=>{
            if(data.complaint_type==='Power Supply Department'){
                setCount1(data.count)
            }
        })            


        }).catch((err)=>{
            console.log(err)
        })
    }
  
  
    useEffect(()=>{
        fetchData1()
    },[])




    const fetchData2 = async()=>{
        await axios.get('/complaint/overdue').then((response)=>{
            console.log(response.data)
            
        response.data.map((data, index)=>{
            if(data.complaint_type==='Power Supply Department'){
                setCount2(data.count)
            }
        })            


        }).catch((err)=>{
            console.log(err)
        })
    }
  
  
    useEffect(()=>{
        fetchData2()
    },[])



  return (
    <div>
        <Navbar/>
        

        <div className="w-full h-max bg-[#171717]  py-2 mt-14">
                <div className="container mx-auto h-[565px] my-16 text-white w-6/12 rounded-xl border-2 border-white">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="font-[Poppins] text-xl text-white py-4 border-b-2 border-b-orange-200 w-full">Power department</h1>
                        <div className="flex flex-row items-center justify-center w-10/12 mt-6  border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Total number of complaints</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{count}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Completed in estimated time</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">{count1}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center w-10/12 border-b-2 border-b-orange-200 h-max">
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2">Overdue</h1>
                            <h1 className="font-[Poppins] text-lg text-white py-4 w-1/2 overflow-hidden">{count2}</h1>
                        </div>
                      
                    </div>
                    
                </div>
            </div>



        <Footer/>
    </div>
  );
}

