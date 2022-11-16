import React, { useEffect, useState } from 'react'

export default function Timeline(props){
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(()=>{

    if(props.data.length === 0){
      console.log('zero')
      setLoading(true)
    }
    else{
      if(data.length===0){
        setData(props.data)
        setLoading(true)
      }
      else{
        console.log("data- ", data)
        setLoading(false)
      }
    }
  }, [props, data])

  if(loading){
    return <div className='text-white text-xl'>Loading</div>
  }


  return(
    <div className="container mx-auto w-4/5 text-start py-4 z-5">
      <ol className="relative border-l border-[#ff6262]">   
      {!loading && 
        data?.map((items, index)=>
          <li className="mb-10 ml-4" key={index}>
            <div className="absolute w-3 h-3 bg-[#f4fa40] rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 py-1 font-[Poppins] text-base font-medium leading-none text-white ">{items.comment_time.slice(0,10)} {items.comment_time.slice(11,19)}</time>
            <p className="mb-4 text-md font-[Poppins] font-normal text-gray-300">{items.comment_description}</p>
        </li>
        )
      }
      </ol>
    </div>
  )
}


