import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import Table from './userManage';
// import "bootstrap/dist/css/bootstrap.min.css";

export default function UserEmp() {
  return (
    <div className='UserEmp'>
        <Navbar/>
        <div className="container-fluid">
            <Table />
        </div>
        <Footer/>
    </div>
  );
}