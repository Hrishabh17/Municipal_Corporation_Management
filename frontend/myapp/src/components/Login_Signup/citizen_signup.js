import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload } from "react-icons/fi"

export default function CitizenSignup()
{
    let initialImage = {
        userProfileImage: "logo.png"
    }
    const [image, setImage] = useState(initialImage)
    const initialForm = {name:'', address:'', contactNum: '', password: '', confirmPassword: '', profileImage: image.userProfileImage}
    const [form, setForm] = useState(initialForm)

    const navigate = useNavigate()
    
    
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

    const handleChange = (e)=>{
        console.log(e.target.value)
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return(
        <div className="w-full h-max bg-[#171717] py-2">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-4 w-1/3 mx-auto p-4 gap-6 rounded-xl bg-[#303030]">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Register</h1>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='name' onChange={handleChange} value={form.name} type="text" placeholder="Name" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <textarea name='address' onChange={handleChange} value={form.address} placeholder="Address" rows="4" cols="50" 
                            className="w-full h-10 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </textarea>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='contactNum' onChange={handleChange} value={form.contactNum} type="tel" placeholder="Contact Number" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='password' onChange={handleChange} value={form.password} type="password" placeholder="Password" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input name='confirmPassword' onChange={handleChange} value={form.confirmPassword} type="password" placeholder="Confirm Password" 
                            className="w-full h-10 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>

                    <div className="w-full items-center justify-center">
                        <div className='w-4/5 mx-auto py-2 mb-4 bg-gray-100 rounded-md'>
                            <div className='flex flex-row justify-center items-center w-3/5 h-[250px] my-2 mx-auto overflow-hidden rounded-xl'>
                                <img src={image.userProfileImage} alt="Uploaded Profile" className="rounded-full border-2 border-white"></img>
                            </div>
                        </div>
                        <div onClick={onBtnClick} className={`cursor-pointer flex flex-row justify-center mx-0 xl:mx-auto items-center rounded-3xl shadow-3xl shadow-gray-900  w-4/5 px-0 py-2 gap-4 bg-white text-blue-900 hover:bg-red-200 hover:text-black`}>
                            <i className='text-sm xl:text-2xl cursor-pointer'><FiUpload /></i>
                            <button className='font-[Poppins] font-bold xl:font-extrabold text-xs xl:text-sm'>Upload Profile Image</button>
                            <input type="file" ref={inputFileRef} onChange={onFilechange} className='hidden'></input>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <button className='w-full h-10 bg-white rounded-md shadow-sm hover:text-white font-[Poppins] px-4 outline-none font-medium hover:bg-blue-700 hover:duration-200'>Submit</button>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full py-4'>
                        <h1 onClick={()=>{navigate('/login')}} className='text-white font-[Poppins] text-base font-semibold hover:underline underline-offset-8 underline-white duration-200 hover:cursor-pointer'>Already registered? Login Now!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}