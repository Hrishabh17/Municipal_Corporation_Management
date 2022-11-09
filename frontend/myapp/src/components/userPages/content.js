import React from 'react'
import ComplaintIndividual from './complaintIndividual'

export default function ComplaintSection(){
  return(
   
<div className='mt-[70px]  py-8 bg-[#171717] min-h-[700px] flex flex-col items-center justify-start gap-4'>
    

<div className="flex flex-row container mx-auto items-center justify-center mt-5 ">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-4/5 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
</div>

<div >
<h1 className="text-white font-[Poppins] text-2xl font-semibold mt-[20px]">Welcome Sarvesh!!</h1><br></br>
<h3 className="text-white font-[Poppins] text-xl font-semibold"> Your complaints</h3>
</div>

      <ComplaintIndividual/>
      <ComplaintIndividual/>
      <ComplaintIndividual/>
      <ComplaintIndividual/>
    </div>

    
  )
}

