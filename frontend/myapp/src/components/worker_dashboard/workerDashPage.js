import React, {useEffect, useContext} from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import WorkerDashBody from './workerDashBody';
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function WorkerDashboard() {

  const {value, setValue} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(value.exists === false){
      navigate('/login')
    }
  
    else if(value.exists===true && value.type!=='employee'){
      navigate('/login')
    }
  }, [])

  return (
    <div>
        <Navbar/>
        <WorkerDashBody empId={value.user_id}/>
        <Footer/>
    </div>
  );
}