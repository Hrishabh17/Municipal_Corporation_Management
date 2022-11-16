import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import ComplaintIndividual from './complaintIndividual'
const axios = require('axios')


export default function ComplaintSection(){

  const {value, setValue} = useContext(UserContext)
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(()=>{
    if(value.exists ===false){
      navigate('/login')
    }
    else{
      setUserId(value.user_id)
      fetchComplaints(value.user_id)
    }
  },[])

  const fetchComplaints = async(id)=>{
    await axios.post('/complaint/fetchusercomplaints', {id:id}).then((response)=>{
      console.log(response)
      setData(response.data)
    }).catch((err)=>{
        console.log(err)
    })
  }

  return(
    <div className='mt-[70px] py-8 bg-[#171717] min-h-[700px] flex flex-col items-center justify-start gap-4'>
      {
        data?.map((data)=>
          <ComplaintIndividual data={data}/>
        )
      }
    </div>
  )
}

