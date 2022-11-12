import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload } from "react-icons/fi"
const axios = require('axios')

export default function Complaint()
{
    let initialImage = {
        userProfileImage: "logo.png"
    }
    const [image, setImage] = useState(initialImage)
    const initialForm = {pFname:'', pLname:'', pAddress:'', pContactNum: '', pContactNum2: '', department: '', description:'', location:'', problemImage: image.userProfileImage}
    const [form, setForm] = useState(initialForm)
    const [valid, setValid] = useState({contact1:true, contact2:true})
    const [message, setMessage] = useState({msg:''})
    const [submit, setSubmit] = useState(false)
    const [check, setCheck] = useState(false)
    
    const navigate = useNavigate()

    async function regComplaint(){
        await axios.post('/complaint', 
          form  
          )
          .then(function (response) {
            console.log(response);
            if(response.status === 200){
                // alert(`Your Complaint id is ${response.data.complaintId}`)
                navigate('/success', {state:{complaintInfo:response.data}})
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    const inputFileRef = useRef(null);
    const onFilechange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage({ userProfileImage: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onBtnClick = () => {
        inputFileRef.current.click();
    }

    const handleCheck = (e)=>{
        if(e.target.checked)
        {
            setCheck(true)
        }
        else
        {
            setCheck(false)
        }
    }

    const handleChange = (e)=>{
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }


    const submitForm = ()=>{
        if(form.pContactNum.length !== 10){
            setValid(valid => ({...valid, contact1:false}))
            setMessage(message => ({...message, msg:'Invalid Contact Number'}))
        }
        else{
            setValid(valid => ({...valid, contact1:true}))
        }

        if(form.pContactNum2.length !== 10){
            setValid(valid => ({...valid, contact2:false}))
            setMessage(message => ({...message, msg:'Invalid Alternate Contact Number'}))
        }
        else{
            setValid(valid => ({...valid, contact2:true}))
        }

        if(valid.contact1 && valid.contact2 && check){
            setMessage(message => ({...message, msg:""}))
            setSubmit(true)

            console.log('sending complaint')
            regComplaint()
        }

        if(!valid.contact1 || !valid.contact2){
            setSubmit(false)
        }
    }

    return(
        <div className="w-full h-max bg-[#171717] py-2 mt-[70px]">
            <div className="container mx-auto mb-4">
                <div className="flex flex-col items-center justify-center mt-4 w-3/5 mx-auto p-4 gap-6 rounded-xl bg-[#303030]">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Register Complaint</h1>
                    </div>

                    {submit && <div className={` font-[Poppins] h-2 text-red-600 message`}>
                            
                    </div>}
                    {!submit && <div className={` font-[Poppins] h-2 text-red-600 message`}>
                           {message.msg} 
                    </div>}

                    <div className='flex flex-row items-center justify-start w-4/5'>
                        <h1 className='text-white font-[Poppins] text-lg font-semibold pt-4'>Contact Information</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5 gap-8'>
                        <input name='pFname' onChange={handleChange} value={form.pFname}  type="text" placeholder="First Name"
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                        <input name='pLname' onChange={handleChange} value={form.pLname} type="text" placeholder="Last Name"
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <textarea name='pAddress' onChange={handleChange} value={form.pAddress} placeholder="Address" rows="4" cols="50" 
                            className="w-full h-20 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </textarea>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5 gap-8'>
                        <input name='pContactNum' onChange={handleChange} value={form.pContactNum} type="tel" placeholder="Contact Number" 
                            className={`w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium ${valid.contact1 ? "border-[2px] border-white" : "border-[2px] border-red-700"}`}>
                        </input>
                        <input name='pContactNum2' onChange={handleChange} value={form.pContactNum2} type="tel" placeholder="Alternate Contact Number" 
                            className={`w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium ${valid.contact2 ? "border-[2px] border-white" : "border-[2px] border-red-700"}`}>
                            </input>
                    </div>

                    <div className='flex flex-row items-center justify-start w-4/5'>
                        <h1 className='text-white font-[Poppins] text-lg font-semibold pt-4'>Complaint Information</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <select name='department'onChange={handleChange} value={form.department} className="w-full h-10 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                            <option value="chooseVal">-- Select a Department related to problem --</option>
                            <option value="waterDept">Water Department</option>
                            <option value="powerDept">Power Supply Department</option>
                            <option value="roadDept">Road Management Department</option>
                            <option value="garbageDept">Garbage and Sewage Management Department</option>
                        </select>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <textarea name='description' onChange={handleChange} value={form.description}  placeholder="Problem Description" rows="8" cols="50" 
                            className="w-full h-20 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </textarea>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <textarea name='location' onChange={handleChange} value={form.location} placeholder="Location of Problem" rows="4" cols="50" 
                            className="w-full h-20 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </textarea>
                    </div>

                    <div className="w-full items-center justify-center">
                        <div className='w-4/5 mx-auto py-2 mb-4 bg-gray-100 rounded-md'>
                            <div className='flex flex-row justify-center items-center w-3/5 h-[250px] my-2 mx-auto overflow-hidden rounded-xl'>
                                <img src={image.userProfileImage} alt="Uploaded Profile" className="rounded-full border-2 border-white"></img>
                            </div>
                        </div>
                        <div onClick={onBtnClick} className={`cursor-pointer flex flex-row justify-center mx-0 xl:mx-auto items-center rounded-3xl shadow-3xl shadow-gray-900  w-2/5 px-0 py-2 gap-4 bg-white text-blue-900 hover:bg-red-200 hover:text-black`}>
                            <i className='text-sm xl:text-2xl cursor-pointer'><FiUpload /></i>
                            <button className='font-[Poppins] font-bold xl:font-extrabold text-xs xl:text-sm'>Upload Problem Image</button>
                            <input type="file" ref={inputFileRef} onChange={onFilechange} className='hidden'></input>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-4/5 pb-4 border-b-[0.2px] border-t-[0.2px] border-white">
                        <p className='text-white font-[Poppins] text-sm font-semibold pt-4 text-start'>Note</p>
                        <ul className='text-red-400 font-[Poppins] text-sm font-semibold pt-4 text-start list-disc marker:text-white'>
                            <li className='py-2'>All the details provided in the complaint should be correct. If the complaint is found fabricated, the registration of the user from the portal will be cancelled.</li>
                            <li className='py-2'>After submission of the complaint you will receive a Complaint UID which you can use to track the resolution.</li>
                        </ul>
                    </div>

                    <div className='flex flex-row items-center justify-start w-4/5 text-start gap-4'>
                        <input type="checkbox" name='check' onChange={handleCheck} ></input> 
                        <h1 className='text-white font-[Poppins] text-sm font-semibold'>I have read the above note and understand the consequences of submiting a forged complaint.</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center py-2 w-3/5' onClick={submitForm}>
                        <button className='w-full h-10 bg-white rounded-md shadow-sm hover:text-white font-[Poppins] px-4 outline-none font-medium hover:bg-blue-700 hover:duration-200'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}