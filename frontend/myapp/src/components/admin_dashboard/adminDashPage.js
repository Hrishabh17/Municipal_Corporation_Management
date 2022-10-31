import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import AdminDashBody from './adminDashBody';

export default function AdminDashboard() {
  return (
    <div>
        <Navbar/>
        <AdminDashBody/>
        <Footer/>
    </div>
  );
}