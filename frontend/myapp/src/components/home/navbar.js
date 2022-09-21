import React, {useState} from "react";
import {BiDownArrow, BiUpArrow} from "react-icons/bi"

import header_user from '../../../src/images/header_user.jpg'


export default function Header()
{
  let Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Contact",link:"/contact"},
  ];

  let [dropdown, setDropdown] = useState(false)

   return (
    <div className="w-full h-max bg-[#202124] py-2 shadow-md shadow-blue-200 fixed top-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <img src="logo.png" alt="logo" className="h-10 w-10"></img>
            <h1 className="text-white font-[Lobster] font-light">my city my pride</h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
          {
                Links.map((link)=>(
                  <li key={link.name} className='list-none'>
                    <a href={link.link} className='text-white hover:underline underline-offset-8 underline-white duration-500 font-[Poppins]'>{link.name}</a>
                  </li>
                ))
            }
          </div>
           <div className="flex flex-row justify-center items-center gap-2">
            <img src={header_user} alt='user_pic' className="h-10 w-10 rounded-full"></img>
            <div onClick={() => setDropdown(!dropdown)}>
              {!dropdown && <BiDownArrow className="text-white"/>}
              {dropdown && <BiUpArrow className="text-white"/>}
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
