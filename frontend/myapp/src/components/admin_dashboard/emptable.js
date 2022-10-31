import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import Table from './empManage';
// import "bootstrap/dist/css/bootstrap.min.css";

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