import React from "react";
import {MdCheckCircle} from "react-icons/md"
import {CgSandClock} from "react-icons/cg"
import {BsListTask} from "react-icons/bs"
import {GiCrossMark} from "react-icons/gi"
// import { DateInput, minValue } from 'react-admin';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calender1 from "./calender";
import Dropdown from "./dropdown";


export default function ToDo(props)
{
    return(
        <div className={`bg-[#303030] w-full h-max p-4 shadow-md shadow-gray-900 rounded-xl hover:bg-gray-800 ${props.isdraggable && props.description.id === props.dragid ? "opacity-50" : "opacity-100"}`} id={props.description.id}>
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    {props.column === 'Tasks to be Assigned' && <BsListTask className="text-lg text-blue-400"/>}
                    {props.column === 'Completed Tasks' && <MdCheckCircle className="text-lg text-green-400"/>}
                    {props.column === 'In Progress' && <CgSandClock className="text-lg text-yellow-400"/>}
                    {props.column === 'Rejected Tasks' && <GiCrossMark className="text-lg text-red-800"/>}
                    <h1 className="text-white font-[Poppins] text-sm line-clamp-1 text-start">{props.description.title}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#c87070]">{props.description.priority}</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#697d36]">{props.description.department}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {/* <h1 className="text-black font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#8FE3E6]">{props.description.emp}</h1> */}
                    <Dropdown>{props.description.emp}</Dropdown>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#85462d]">{props.description.issueDate}</h1>
                    {/* <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">{props.description.completionDate}</h1> */}
                    <Calender1>{props.description.completionDate}</Calender1>
                    
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <input type="text" placeholder="Write a Note" className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585] outline-none"></input>
                    {/* {<h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">Tuesday</h1>} */}
                </div>
            </div>
        </div>
    )
}