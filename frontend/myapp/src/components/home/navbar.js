import React, {useState, useEffect, useRef} from "react";
import {BiDownArrow, BiUpArrow} from "react-icons/bi"

import header_user from '../../../src/images/header_user.jpg'


export default function Header()
{
  const Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Contact",link:"/contact"},
  ];

  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef()

  useEffect(()=>{
    const closeDropDown = e =>{
    if(dropdown && dropdownRef.current && !dropdownRef.current.contains(e.target))
    {
      setDropdown(false)
    }
  }

  document.addEventListener('mousedown', closeDropDown)
  return () => document.body.removeEventListener('mousedown', closeDropDown)

}, [dropdown])

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
            <div ref={dropdownRef}>
              <div>
                <div className="flex flex-row justify-center items-center gap-2 relative" onClick={() => setDropdown(dropdown => !dropdown)}>
                  <img src={header_user} alt='user_pic' className="h-10 w-10 rounded-full"></img>
                  
                    {!dropdown && <BiDownArrow className="text-white"/>}
                    {dropdown && <BiUpArrow className="text-white"/>}
                
                </div>
                {
                  dropdown && 
                  <div className="flex flex-col justify-center items-center absolute text-white text-center px-4 w-[200px] py-2 bg-gray-700 text-md rounded-md list-none gap-2">
                      <li className="hover:underline underline-offset-8 underline-white w-full hover:cursor-pointer"><a href="/settings">Settings</a></li>
                      <li className="hover:underline underline-offset-8 underline-white w-full hover:cursor-pointer"><a href="/mycomplaints">Complaints</a></li>
                      <li className="hover:underline underline-offset-8 underline-white w-full hover:cursor-pointer"><a href='/logout'>Logout</a></li>
                  </div>
                }
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}
