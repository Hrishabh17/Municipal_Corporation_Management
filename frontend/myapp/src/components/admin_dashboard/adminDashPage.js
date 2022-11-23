import React, {useContext, useEffect, useState} from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import AdminDashBody from './task_admin_assg';
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import Table from './empManage';

export default function AdminDashboard() {

  const {value, setValue} = useContext(UserContext)
  const navigate = useNavigate()
  const [tab, setTab] = useState(true)

  useEffect(()=>{
    if(value.exists === false){
      navigate('/login')
    }
  
    else if(value.exists===true && value.type!=='admin'){
      navigate('/login')
    }
  }, [])

  const handleClick=()=>{
    setTab(!tab)
  }
  
  return (
    <div className='bg-[#171717]'>
        <Navbar/>
        <div className='flex flex-row items-center justify-center mx-auto mt-[75px] pt-6 gap-8 w-9/12'>
          <div onClick={handleClick} className={`bg-[#303030] px-8 py-1 rounded-lg text-white font-[Poppins] w-1/2 hover:bg-blue-900 hover:cursor-pointer ${tab?"bg-blue-900":"bg-[#303030]"}`}>Task Assign</div>
          <div onClick={handleClick} className={`bg-[#303030] px-8 py-1 rounded-lg text-white font-[Poppins] w-1/2 hover:bg-blue-900 hover:cursor-pointer ${!tab?"bg-blue-900":"bg-[#303030]"}`}>Manage Employee</div>
        </div>
        {tab && <AdminDashBody/>}
        {!tab && <Table/>}
        <Footer/>
    </div>
  );
}