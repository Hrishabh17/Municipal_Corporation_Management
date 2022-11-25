import React, {useState, useEffect, useContext} from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import WorkerDashBody from './workerDashBody';
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const axios = require('axios')

export default function WorkerDashboard() {

  const {value, setValue} = useContext(UserContext)
  const navigate = useNavigate()
  const [warning, setWarning] = useState([])


  const getWarning = async()=>{
    await axios.get(`/complaint/warning/${value.user_id}`).then((response)=>{
      console.log(response)
      setWarning(response.data)
      }).catch((err)=>{
        console.log(err)
    })
  }


  useEffect(()=>{
    if(value.exists === false){
      navigate('/login')
    }
  
    else if(value.exists===true && value.type!=='employee'){
      navigate('/login')
    }
    if(value.exists===true && value.type === 'employee'){
      getWarning()
    }
  }, [])


  useEffect(()=>{
    if(warning.length!==0){
      warning.map((data)=>{
        toast.error(data.notification+ ' for complaint CUID: '+ data.complaint_number)
      })
    }
  }, [warning])


  return (
    <div>
        <Toaster/>
        <Navbar/>
        <WorkerDashBody empId={value.user_id}/>
        <Footer/>
    </div>
  );
}