import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const axios =require('axios')



export default function Barchart() {


    const[count1, setCount1] = useState(0) 
    const[count2, setCount2] = useState(0)
    const[count3, setCount3] = useState(0)
    const[count4, setCount4] = useState(0)
   

    const fetchData = async()=>{
        await axios.get('/complaint/roadcomplaints').then((response)=>{
            console.log(response.data)
            
        response.data.map((data, index)=>{
            if(data.complaint_type==='Water Department'){
                setCount1(data.count)
            }
        })          
        
        response.data.map((data, index)=>{
            if(data.complaint_type==='Power Supply Department'){
                setCount2(data.count)
            }
        })

        response.data.map((data, index)=>{
            if(data.complaint_type==='Garbage and Sewage Management Department'){
                setCount3(data.count)
            }
        })

        response.data.map((data, index)=>{
            if(data.complaint_type==='Road Management Department'){
                setCount4(data.count)
            }
        })

        }).catch((err)=>{
            console.log(err)
        })
    }
  
  
    useEffect(()=>{
        fetchData()
    },[])




    const[count5, setCount5] = useState(0) 
    const[count6, setCount6] = useState(0)
    const[count7, setCount7] = useState(0)
    const[count8, setCount8] = useState(0)


    const fetchData2 = async()=>{

        await axios.get('/complaint/barGraph').then((response)=>{
            console.log(response.data)
            
        response.data.map((data, index)=>{
            if(data.complaint_type==='Water Department'){
                setCount5(data.count)
            }
        })          
        
        response.data.map((data, index)=>{
            if(data.complaint_type==='Power Supply Department'){
                setCount6(data.count)
            }
        })

        response.data.map((data, index)=>{
            if(data.complaint_type==='Garbage and Sewage Management Department'){
                setCount7(data.count)
            }
        })

        response.data.map((data, index)=>{
            if(data.complaint_type==='Road Management Department'){
                setCount8(data.count)
            }
        })


        }).catch((err)=>{
            console.log(err)
        })
    }
  
  
    useEffect(()=>{
        fetchData2()
    },[])




    const data = [
        {
          name: "Garbage",
          Resolved: count7,
          Complaints: count3
        },
        {
          name: "Power",
          Resolved: count6,
          Complaints: count2
        },
        {
          name: "Road",
          Resolved: count8,
          Complaints: count4
        },
        {
          name: "Water",
          Resolved: count5,
          Complaints: count1
        }
        
      ];

      if(count1===count2===count3===count4===count5===count6===count7===count8===0)
    {

        return(
            <div>

            </div>
        )
    }

    console.log(data)

  return (

    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Complaints" fill="#8884d8" />
      <Bar dataKey="Resolved" fill="#82ca9d" />
    </BarChart>
  );
}
