import React, {useState} from 'react'
import Timeline from './timeline'
const axios = require('axios')

export default function ComplaintIndividual(props) {

    console.log(props)

    const [expand, setExpand] = useState(false)
    const[id, setId] = useState(53254)
    const [data, setData] = useState([])

    async function getTimeline(){
        await axios.post('/complaint/getcomplainttimeline', 
            {id:props.data.complaint_number}
          )
          .then(function (response) {
            setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    } 



    function handleClick()
    {
        if(!expand){
            getTimeline()
        }
        setExpand(!expand)
        
    }

    return (
        <div className='mx-auto container'>
            <div className='bg-[#303030] flex flex-col justify-center hover:cursor-pointer rounded-md hover:bg-blue-700 min-h-[90px]' onClick={handleClick}>
                <div className='py-2 flex flex-row justify-between px-10 items-center gap-8'>
                    <h1 className="text-white font-[Poppins] text-lg w-1/5">{props.data.complaint_number}</h1>
                    <h1 className="text-white font-[Poppins] text-lg w-1/5">{props.data.registration_date.slice(0,10)}</h1>
                    <h1 className="text-white font-[Poppins] text-lg w-1/5">{props.data.complaint_status}</h1>
                    <h1 className="text-white font-[Poppins] text-lg w-1/5">{props.data.complaint_type}</h1>
                    <h1 className="text-white font-[Poppins] text-lg w-1/5">{props.data.complaint_address}</h1>
                </div>
            </div>
            {expand && <Timeline data={data}/>}
        </div>
    )
}


