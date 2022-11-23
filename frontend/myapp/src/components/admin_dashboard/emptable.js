import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import Table from './empManage';

export default function TabEmp() {
  return (
    <div className='TabEmp'>
        <Navbar/>
        
        <div className="container-fluid">
            <Table />
        </div>
        <Footer/>
    </div>
  );
}