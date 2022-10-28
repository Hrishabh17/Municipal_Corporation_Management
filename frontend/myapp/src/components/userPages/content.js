import React from 'react'
import ComplaintIndividual from './complaintIndividual'

export default function ComplaintSection(){
  return(
    <div className='mt-[70px] py-8 bg-[#171717] min-h-[700px] flex flex-col items-center justify-start gap-4'>
      <ComplaintIndividual/>
      <ComplaintIndividual/>
      <ComplaintIndividual/>
      <ComplaintIndividual/>
    </div>
  )
}

