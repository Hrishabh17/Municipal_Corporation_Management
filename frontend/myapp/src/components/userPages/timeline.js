import React from 'react'

export default function Timeline(){
  return(
    <div className="container mx-auto w-4/5 text-start py-4 z-5">
      <ol class="relative border-l border-[#ff6262]">                  
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#f4fa40] rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 py-1 font-[Poppins] text-sm font-medium leading-none text-white ">17 February 2022</time>
            <h3 class="text-lg font-[Poppins] font-medium text-white">Complaint Resolved</h3>
            <p class="mb-4 text-base font-[Poppins] font-normal text-gray-300">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
        </li>
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#f4fa40] rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 py-1 font-[Poppins] text-sm font-medium leading-none text-white ">15 February 2022</time>
            <h3 class="text-lg font-[Poppins] font-medium text-white">Workers working to solve the issue</h3>
            <p class="mb-4 text-base font-[Poppins] font-normal text-gray-300">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
        </li>
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#f4fa40] rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 py-1 font-[Poppins] text-sm font-medium leading-none text-white ">14 February 2022</time>
            <h3 class="text-lg font-[Poppins] font-medium text-white">Complaint Ticket created for grabage issue</h3>
            <p class="mb-4 text-base font-[Poppins] font-normal text-gray-300">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
        </li>
      </ol>
    </div>
  )
}


