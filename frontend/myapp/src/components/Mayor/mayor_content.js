import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Barchart from "./bar";
const axios =require('axios')








export default function MayorContent(){


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





    const data = [
        { name: "Garbage", value: count3},
        { name: "Power", value: count2 },
        { name: "Road", value: count4 },
        { name: "Water", value: count1 }
      ];
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };



return(
<div className="mt-[70px] py-8 bg-[#171717] min-h-[700px] flex flex-col  items-center justify-start gap-4">

<div id="main" class="grid grid-cols-3 grid-flow-col "> 
                <a href = "garbage" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Garbage and sewage 
                </a>
                <a href = "power" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Power supply
                </a>
                <a href = "road" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Road management
                </a>
                <a href = "water" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Water management
                </a>
                </div>





<div className="mt-[40px] items-left">
<Barchart/>
</div>

<div className="mt-[40px] items-center">


    <PieChart width={500} height={500} >
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
</div>

)

}
