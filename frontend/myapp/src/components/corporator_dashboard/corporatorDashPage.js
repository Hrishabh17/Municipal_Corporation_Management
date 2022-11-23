import React, {useEffect, useContext} from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import CorporatorDashBody from './corporatorDashBody';

export default function CorporatorDashboard() {

  const {value, setValue} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(value.exists === false){
      navigate('/login')
    }
  
    else if(value.exists===true && value.type!=='corporator'){
      navigate('/login')
    }
  }, [])

  return (
    <div>
        <Navbar/>
        <CorporatorDashBody empId={value.user_id}/>
        <Footer/>
    </div>
  );
}