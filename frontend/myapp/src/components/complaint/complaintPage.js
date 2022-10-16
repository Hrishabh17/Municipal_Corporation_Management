import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import Complaint from './complaint_form';

export default function ComplaintPage() {
  return (
    <div>
        <Navbar/>
        <Complaint/>
        <Footer/>
    </div>
  );
}
