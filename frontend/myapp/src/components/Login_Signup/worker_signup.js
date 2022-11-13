import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload } from "react-icons/fi"
const axios = require('axios')

export default function WorkerSignup()
{
    let initialImage = {
        employeeProfileImage: "logo.png"
    }
    const [image, setImage] = useState(initialImage)
    const initialForm = {ssn:'', name:'', designation:'', address:'', contactNum: '', password: '', confirmPassword: '', ward: '', profileImage: image.employeeProfileImage}
    const [form, setForm] = useState(initialForm)
    const [valid, setValid] = useState({contact:true, password:true, confirmPassword:true, ssn:true, designation:true, ward:true})
    const [message, setMessage] = useState({msg:''})
    const [submit, setSubmit] = useState(false)
    

    const navigate = useNavigate()

    async function regEmployee(){
        await axios.post('/employee', 
          form  
          )
          .then(function (response) {
            if(response.status === 200){
                navigate('/workerLogin')
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
                setImage({ employeeProfileImage: reader.result })
                console.log()
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onBtnClick = () => {
        inputFileRef.current.click();
    }

    const handleChange = (e)=>{
        // console.log(e.target.value)
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const submitForm = ()=>{
        if(form.contactNum.length !== 10){
            console.log(form.contactNum, form.contactNum.length)
            setValid(valid => ({...valid, contact:false}))
            console.log('Invalid Contact')
            setMessage(message => ({...message, msg:'Invalid Contact Number'}))
            console.log(message)
        }
        else{
            setValid(valid => ({...valid, contact:true}))
            console.log('Valid Contact')
        }
        
        if(form.ssn.length !== 10){
            console.log(form.ssn, form.ssn.length)
            setValid(valid => ({...valid, ssn:false}))
            console.log('Invalid SSN')
            setMessage(message => ({...message, msg:'Invalid SSN'}))
            console.log(message)
        }
        else{
            setValid(valid => ({...valid, ssn:true}))
            console.log('Valid SSN')
        }

        if(form.designation=="select")
        {
            setValid(valid => ({...valid, designation:false}))
            console.log('Please Select Designation')
            setMessage(message => ({...message, msg:'Please Select Designation'}))
            console.log(message)
        }
        else
        {
            setValid(valid => ({...valid, designation:true}))
            console.log('Valid Designation')
            console.log(form.designation)
        }

        if(form.ward=="select")
        {
            setValid(valid => ({...valid, ward:false}))
            console.log('Please Select Ward')
            setMessage(message => ({...message, msg:'Please Select Ward'}))
            console.log(message)
        }
        else
        {
            setValid(valid => ({...valid, ward:true}))
            console.log('Valid Ward')
            console.log(form.ward)
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/

        if(!passwordRegex.test(form.password)){
            setValid(valid => ({...valid, password:false}))
            setValid(valid => ({...valid, confirmPassword:false}))
            setMessage(message => ({...message, msg:'Invalid Password'}))
        }
        if(passwordRegex.test(form.password) && form.password !== form.confirmPassword){
            console.log("password don't match")
            setValid(valid => ({...valid, password:true}))
            setValid(valid => ({...valid, confirmPassword:false}))
            setMessage(message => ({...message, msg:"Passwords don't match"}))
        }
        if(passwordRegex.test(form.password) && form.password === form.confirmPassword){
            setValid(valid => ({...valid, confirmPassword:true}))
            setValid(valid => ({...valid, password:true}))
        }

        if(valid.confirmPassword && valid.contact && valid.password && valid.ssn && valid.designation && valid.ward){
            setMessage(message => ({...message, msg:""}))
            setSubmit(true)
            console.log('sending employee for signup')
            regEmployee()

        }

        if(!valid.confirmPassword || !valid.contact || !valid.password || !valid.ssn || !valid.designation || !valid.ward){
            setSubmit(false)
        }
    }

    return(
        <div className="w-full h-max bg-[#171717] py-2">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-4 w-1/3 mx-auto p-4 gap-6 rounded-xl bg-[#303030]">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Register Employee</h1>
                    </div>
                    {submit && <div className={` font-[Poppins] h-2 text-red-600 message`}>
                            
                    </div>}
                    {!submit && <div className={` font-[Poppins] h-2 text-red-600 message`}>
                           {message.msg} 
                    </div>}
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='ssn' onChange={handleChange} value={form.ssn} type="text" placeholder="SSN: XXXX-XX-XXXX" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='name' onChange={handleChange} value={form.name} type="text" placeholder="Name" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                    <div className="relative w-full lg:max-w-sm">
                        <select name = "designation" onChange={handleChange} value={form.designation} className="block py-3 px-4 w-full text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="select" >Select Designation</option>
                            <option value="city_engineer">City Engineer</option>
                            <option value="chief_engineer">Chief Engineer</option>
                            <option value="water_dept_engg">Water Dept. Engineer</option>
                            <option value="fire_dept_engg">Fire Dept. Engineer</option>
                        </select>
                    </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <textarea name='address' onChange={handleChange} value={form.address} placeholder="Address" rows="4" cols="50" 
                            className="w-full h-10 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </textarea>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='contactNum' onChange={handleChange} value={form.contactNum} type="tel" placeholder="Contact Number" 
                            className={`w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium ${valid.contact ? "border-[2px] border-white" : "border-[2px] border-red-700"}`}>
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                    <div className="relative w-full lg:max-w-sm">
                        <select name = "ward" onChange={handleChange} value={form.ward} className="block py-3 px-4 w-full text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value = "select">Select Ward</option>
                            <option value="1">Lohegaon Airport	</option>
                            <option value="2">Kharadi Infotech Park	</option>
                            <option value="3">Vimannagar Sanjay Park	</option>
                            <option value="4">Nagpur Chawl	</option>
                        </select>
                    </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='password' onChange={handleChange} value={form.password} type="password" placeholder="Password" 
                            className={`w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium ${valid.password ? "border-[2px] border-white" : "border-[2px] border-red-700"}`}>
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='confirmPassword' onChange={handleChange} value={form.confirmPassword} type="password" placeholder="Confirm Password" 
                            className={`w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium ${valid.confirmPassword ? "border-[2px] border-white" : "border-[2px] border-red-700"}`}>
                        </input>
                    </div>

                    <div className="w-full items-center justify-center">
                        <div className='w-4/5 mx-auto py-2 mb-4 bg-gray-100 rounded-md'>
                            <div className='flex flex-row justify-center items-center w-3/5 h-[250px] my-2 mx-auto overflow-hidden rounded-xl'>
                                <img src={image.employeeProfileImage} alt="Uploaded Profile" className="rounded-full border-2 border-white"></img>
                            </div>
                        </div>
                        <div onClick={onBtnClick} className={`cursor-pointer flex flex-row justify-center mx-0 xl:mx-auto items-center rounded-3xl shadow-3xl shadow-gray-900  w-4/5 px-0 py-2 gap-4 bg-white text-blue-900 hover:bg-red-200 hover:text-black`}>
                            <i className='text-sm xl:text-2xl cursor-pointer'><FiUpload /></i>
                            <button className='font-[Poppins] font-bold xl:font-extrabold text-xs xl:text-sm'>Upload Profile Image</button>
                            <input type="file" ref={inputFileRef} onChange={onFilechange} className='hidden'></input>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5' onClick={submitForm}>
                        <button className='w-full h-10 bg-white rounded-md shadow-sm hover:text-white font-[Poppins] px-4 outline-none font-medium hover:bg-blue-700 hover:duration-200'>Submit</button>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full py-4'>
                        <h1 onClick={()=>{navigate('/workerlogin')}} className='text-white font-[Poppins] text-base font-semibold hover:underline underline-offset-8 underline-white duration-200 hover:cursor-pointer'>Already registered? Login Now!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}