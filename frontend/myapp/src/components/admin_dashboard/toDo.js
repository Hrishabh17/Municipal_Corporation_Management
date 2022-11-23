import React, {useEffect, useState} from "react";
import {MdCheckCircle} from "react-icons/md"
import {CgSandClock} from "react-icons/cg"
import {BsListTask} from "react-icons/bs"
import {GiCrossMark} from "react-icons/gi"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

export default function ToDo(props)
{

    const getTime = ()=>{
        var newDate = new Date()
        var year = newDate.getFullYear()
        var month = newDate.getMonth()
        var date = newDate.getDate()
        var hours = newDate.getHours()
        var minutes = newDate.getMinutes()
        var seconds = newDate.getSeconds()

        var comment_time = ""

        comment_time += year + "-" + (month<10?"0":"")+ month + (date<10?"0":"") + "-"+date + " "
        comment_time += (hours<10 ? "0":"") + hours + ":"
        comment_time += (minutes<10 ? "0":"") + minutes + ":"
        comment_time += (seconds<10 ? "0":"")+seconds
        return comment_time
    }

    
    var comment_time = getTime()
    var estimatedDate = comment_time.slice(0, 10)

    const [empList, setEmpList] = useState([{}])
    const [form, setForm] = useState({id:props.description.complaint_number, estimatedDate:estimatedDate, empAssigned:'Not Assigned', empId:props.adminId, comment_time:comment_time})
    const [form2, setForm2] = useState({id:props.description.complaint_number, commentTime:comment_time, comment:'', empId:props.adminId})
   
    const handleChange = (e)=>{
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleChange2 = (e)=>{
        console.log(e.target.value)
        setForm2(form2 =>({...form2, comment:e.target.value}))
        if(e.key==='Enter'){
            console.log('enter pressed')
        }
    }

    const submitComment = async()=>{
        await axios.post('/complaint/addcomment', form2).then((response)=>{
            console.log(response)
            if(response.status === 200 && response.data.commentCreated === true){
                toast.success('Comment Registered Successfully!!')
                setForm2(form2 =>({...form2, comment:''}))
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const submitData = (e)=>{
        if(e.key==='Enter'){
            
            var comment_time = getTime()
            console.log('enter pressed')
            setForm2(form2 =>({...form2, commentTime:comment_time}))
            console.log(form2)

            submitComment()
        }
    }

    const getEmp = async()=>{
        var deptId = 0;
        if(props.description.complaint_type === 'Road Management Department'){
            deptId=55
        }
        else if(props.description.complaint_type === 'Water Department'){
            deptId=25
        }
        else if(props.description.complaint_type === 'Power Supply Department'){
            deptId=35
        }
        else if(props.description.complaint_type === 'Garbage and Sewage Management Department'){
            deptId=99
        }

        await axios.get(`/employee/getEmpByDept/${deptId}`).then((response)=>{
            setEmpList(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getEmp()
    }, [])

    const updateComplaintWithEmp = async()=>{
        await axios.post('/complaint/updateEmpDate', form).then((response)=>{
            console.log(response)
            if(response.status===200){
                toast.success('Task Successfully Assigned')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        if(form.empAssigned!=='Not Assigned' && form.estimatedDate !==estimatedDate){
            const comment_time = getTime()
            setForm(form=>({...form, comment_time:comment_time}))
            updateComplaintWithEmp()
        }
    }, [form.empAssigned, form.estimatedDate])

    return(
        <div className={`bg-[#303030] w-full h-max p-4 shadow-md shadow-gray-900 rounded-xl hover:bg-gray-800 ${props.isdraggable && props.description.id === props.dragid ? "opacity-50" : "opacity-100"}`} id={props.description.id}>
            <Toaster/>
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    {props.column === 'To Do' && <BsListTask className="text-lg text-blue-400"/>}
                    {props.column === 'Done' && <MdCheckCircle className="text-lg text-green-400"/>}
                    {props.column === 'In Progress' && <CgSandClock className="text-lg text-yellow-400"/>}
                    {props.column === 'Rejected' && <GiCrossMark className="text-lg text-red-800"/>}
                    <h1 className="text-white font-[Poppins] text-sm line-clamp-1 text-start">{props.description.complaint_type}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-start text-xs py-1 px-2 rounded-xl bg-[#697d36]">{props.description.complaint_description}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#c87070]">{props.description.priority===null?'Low':props.description.priority}</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#0a5d83]">CUId: {props.description.complaint_number}</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">{props.description.estimated_time===null?'ET : TBA': `ET: ${props.description.estimated_time.slice(0, 10)}` }</h1>
                </div>
                {props.description.estimated_time===null && props.description.empAssignedId === null && <div className="flex flex-row items-center justify-start gap-4 w-full">
                    <select name = "empAssigned" onChange={handleChange} value={form.empAssigned} className="w-11/12 outline-none text-black font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#ffffff]">
                        <option value='select employee'>Select Employee</option>
                        {
                            empList?.map((data, index)=>
                                <option key={index} value={data.ssn}>{data.employee_name}</option>
                            )
                        }
                    </select>
                </div>}
                <div className="flex flex-row items-center justify-start gap-2 w-full">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#85462d] w-5/12">RD: {props.description.registration_date.slice(0,10)}</h1>
                    {props.description.estimated_time!==null && props.description.empAssignedId !==null && <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#655a0b] w-6/12">EmpId : {props.description.empAssignedId}</h1>}
                    {props.description.estimated_time===null && props.description.empAssignedId ===null && <input name="estimatedDate" type='date' min={form.estimatedDate} onChange={handleChange} value={form.estimatedDate} className="rounded-lg px-2 w-6/12"></input>}
                </div>
                <div className="flex flex-row items-center justify-start gap-4 w-full">
                    <input type="text" name="comment" value={form2.comment} onChange={handleChange2} onKeyDown={submitData} placeholder="Write a Note" className="w-11/12 text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585] outline-none"></input>
                </div>
            </div>
        </div>
    )
}