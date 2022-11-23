import React, {useContext, useEffect} from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import AdminDashBody from './task_admin_assg';
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const {value, setValue} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(value.exists === false){
      navigate('/login')
    }
  
    else if(value.exists===true && value.type!=='admin'){
      navigate('/login')
    }
  }, [])

  
  return (
    <div>
        <Navbar/>
        <AdminDashBody/>
        <Footer/>
    </div>
  );
}