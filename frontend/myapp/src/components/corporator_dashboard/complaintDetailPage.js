import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import ComplaintDetail from './complaintDetail';


export default function CorporatorComplaintDetailPage() {
  return (
    <div>
        <Navbar/>
        <ComplaintDetail/>
        <Footer/>
    </div>
  );
}
