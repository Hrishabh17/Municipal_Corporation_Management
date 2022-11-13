import React, {useState} from 'react'
import Timeline from './timeline'

export default function ComplaintIndividual(props) {
    const [expand, setExpand] = useState(false)

    function handleClick()
    {
        setExpand(!expand)
    }

    return (
        <div className='flex flex-col items-center justify-center w-2/3 hover:cursor-pointer' onClick={handleClick}>
            <div className='bg-[#303030] container mx-auto flex flex-row justify-between px-10 items-center py-4 gap-6 rounded-xl'>
            <h1 className="text-white font-[Poppins] font-semibold text-lg">{props.ComplaintNo}</h1>
            <h1 className="text-white font-[Poppins] font-semibold text-lg">{props.Issue}</h1>
            <h1 className="text-white font-[Poppins] font-semibold text-lg">{props.Location}</h1>
            </div>
            {expand && <Timeline/>}
        </div>
    )
}


