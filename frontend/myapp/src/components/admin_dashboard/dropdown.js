import React, { useState } from "react";

const Dropdown = () => {
    const initialForm = {ssn:'', name:'', designation:'', address:'', contactNum: '', password: '', confirmPassword: '', ward: ''}
    const [form, setForm] = useState(initialForm)
    // const [valid, setValid] = useState({contact:true, password:true, confirmPassword:true, ssn:true, designation:true, ward:true})
    // const [message, setMessage] = useState({msg:''})
    // const [submit, setSubmit] = useState(false)
    
    const handleChange = (e)=>{
        // console.log(e.target.value)
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    return (
        <div className='flex flex-row items-center justify-center w-4/5'>
        <div className="relative w-full lg:max-w-sm">
            <select name = "designation" onChange={handleChange} value={form.designation} className="text-black font-[Poppins] text-xs py-1 px-2 rounded-xl bg-[#FFFFFF]">
                <option selected value="select" >Select Employee</option>
                <option value="rohan">Rohan</option>
                <option value="Mohan">Mohan</option>
                <option value="Sonal">Sonal</option>
                <option value="Minal">Minal</option>
            </select>
        </div>
        </div>
    );
  };
  
  export default Dropdown;



