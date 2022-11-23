import React, {useState} from "react";
import {MdCheckCircle} from "react-icons/md"
import {CgSandClock} from "react-icons/cg"
import {FiTool} from "react-icons/fi"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";


export default function ToDo(props)
{

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

    const [form, setForm] = useState({id:props.description.complaint_number, commentTime:comment_time, comment:'', empId:props.corporatorId})

    const handleChange = (e)=>{
        console.log(e.target.value)
        setForm(form =>({...form, comment:e.target.value}))
        if(e.key==='Enter'){
            console.log('enter pressed')
        }
    }

    const submitData = (e)=>{
        if(e.key==='Enter'){
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
            
            console.log('enter pressed')
            setForm(form =>({...form, commentTime:comment_time}))
            console.log(form)
            submitComment()
        }
    }

    const submitComment = async()=>{
        await axios.post('/complaint/addcomment', form).then((response)=>{
            console.log(response)
            if(response.status === 200 && response.data.commentCreated === true){
                toast.success('Comment Registered Successfully!!')
                setForm(form =>({...form, comment:''}))
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className={`bg-[#303030] w-full h-max p-4 shadow-md shadow-gray-900 rounded-xl hover:bg-gray-800 ${props.isdraggable && props.description.id === props.dragid ? "opacity-50" : "opacity-100"}`} id={props.description.id}>
            <Toaster/>
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    {props.column === 'Done' && <MdCheckCircle className="text-lg text-green-400"/>}
                    {props.column === 'To Do' && <FiTool className="text-lg text-white"/>}
                    {props.column === 'In Progress' && <CgSandClock className="text-lg text-white"/>}
                    <h1 className="text-white font-[Poppins] text-sm line-clamp-1 text-start">{props.description.complaint_type}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-start text-xs py-1 px-2 rounded-xl bg-[#697d36]">{props.description.complaint_description}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#85462d]">RD: {props.description.registration_date.slice(0,10)}</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585]">{props.description.estimated_time===null?'ET : TBA':`ET: ${props.description.estimated_time.slice(0, 10)}`}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#0a5d83]">CUId: {props.description.complaint_number}</h1>
                    <h1 className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#c87070]">{props.description.complaint_status}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <input type="text" name="comment" value={form.comment} onChange={handleChange} onKeyDown={submitData} placeholder="Write a Note" className="text-white font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#2d5585] outline-none"></input>
                </div>
            </div>
        </div>
    )
}