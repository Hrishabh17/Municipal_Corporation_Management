import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import toast, { Toaster } from 'react-hot-toast';
const axios = require('axios')

export default function Login()
{

    const {value, setValue} = useContext(UserContext)
    console.log(value)
    const initialState = useState({username:'', password:''})
    const [form, setForm] = useState(initialState)

    async function verify(){
        await axios.post('/user/auth', 
          form  
          )
          .then(function (response) {
            if(response.status === 200 && response.data.exists === 1){
                console.log(response.data)
                setValue(value=>({...value, exists:true, type:response.data.type, user:response.data.user, user_id:response.data.user_id, profile_image:response.data.profile_image}))
                toast.success("Successfully Logged In")
                setTimeout(()=>{
                    navigate('/')
                }, 1000)
            }
            else{
                toast.error("Username or Password Error!!")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleChange = (e)=>{
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleClick = (e)=>{
        verify()
    }

    const navigate = useNavigate()
    
    return(
        <div className="w-full h-[100vh] bg-[#171717] py-2">
            <Toaster/>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-16 w-1/3 mx-auto p-4 gap-8 rounded-xl bg-[#303030]">
                    
                    <div className='flex flex-row items-center justify-center w-4/5 border-b-[0.5px] border-b-white'>
                        <h1 className='text-white font-[Poppins] text-xl font-semibold py-4'>Login</h1>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input type="text" placeholder="Username" name='username' onChange={handleChange}
                            className="w-full h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5'>
                        <input type="password" placeholder="Password" name='password' onChange={handleChange}
                            className="w-full h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                        </input>
                    </div>
                    <div className='flex flex-row items-center justify-center w-4/5' onClick={handleClick}>
                        <button className='w-full h-10 bg-white rounded-md shadow-sm hover:text-white font-[Poppins] px-4 outline-none font-medium hover:bg-blue-700 hover:duration-200'>Submit</button>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full py-4'>
                    <h1 onClick={()=>{navigate('/register')}} className='text-white font-[Poppins] text-base font-semibold hover:underline underline-offset-8 underline-white duration-200 hover:cursor-pointer'>Not registered? Signup Now!</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}