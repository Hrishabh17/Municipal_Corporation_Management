import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload } from "react-icons/fi"
import { UserContext } from '../context'
import toast, {Toaster} from 'react-hot-toast'
const axios = require('axios')

export default function Complaint()
{

    const {value, setValue} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(value.exists === false){
            navigate('/login')
        }
        if(value.exists===true && value.type==='employee'){
            toast.error('Please login as user to continue with complaint registration')
            setTimeout(()=>{
                navigate('/')
            }, 1000)
        }
    }, [])

    let initialImage = {
        userProfileImage: "logo.png"
    }
    const [image, setImage] = useState(initialImage)
    const initialForm = {department: '', description:'', location:'', problemImage: image.userProfileImage, user:value.user_id, ward:''}
    const [form, setForm] = useState(initialForm)
    const [check, setCheck] = useState(false)
    

    async function regComplaint(){
        await axios.post('/complaint', 
          form  
          )
          .then(function (response) {
            console.log(response);
            if(response.status === 200){
                navigate('/success', {state:{complaintInfo:response.data.value}})
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
                setForm(form =>({...form, problemImage:reader.result}))
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
        if(form.department!==''||form.description!==''||form.location!==''){
            console.log(form)
            regComplaint()
        }
    }

    

    return(
        <div className="w-full h-max bg-[#171717] py-2 mt-[70px]">
            <Toaster/>
            <div className="container mx-auto mb-4">
                <div className="flex flex-col items-center justify-center mt-4 w-3/5 mx-auto p-4 gap-6 rounded-xl bg-[#303030]">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Register Complaint</h1>
                    </div>

                    <div className='flex flex-row items-center justify-start w-4/5'>
                        <h1 className='text-white font-[Poppins] text-lg font-semibold pt-4'>Complaint Information</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <select name='department'onChange={handleChange} value={form.department} className="w-full h-10 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                            <option value="chooseVal">-- Select a Department related to problem --</option>
                            <option value="Water Department">Water Department</option>
                            <option value="Power Supply Department">Power Supply Department</option>
                            <option value="Road Management Department">Road Management Department</option>
                            <option value="Garbage and Sewage Management Department">Garbage and Sewage Management Department</option>
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

                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <select name='ward'onChange={handleChange} value={form.ward} className="w-full h-10 py-2 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                            <option value="chooseVal">-- Select Ward  --</option>
                            <option value="25111">Hadapsar-Mundhwa</option>
                            <option value="35111">Sinhgad</option>
                            <option value="55111">Kondhwa</option>
                            <option value="25666">Kothrud-Bawdhan</option>
                            <option value="12554">Warje-Karvenagar</option>
                            <option value="98986">Shivajinagar</option>
                            <option value="14563">Wanawadi-Ramtekadi</option>
                            <option value="25896">Dhankawadi-Sahakar Nagar</option>
                            <option value="35795">Bibwewadi</option>
                        </select>
                    </div>

                    <div className="w-full items-center justify-center">
                        <div className='w-4/5 mx-auto py-2 mb-4 bg-gray-100 rounded-md'>
                            <div className='flex flex-row justify-center items-center w-3/5 h-[250px] my-2 mx-auto overflow-hidden rounded-xl'>
                                <img src={image.userProfileImage} alt="Uploaded Profile" className="rounded-lg border-2 border-white"></img>
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