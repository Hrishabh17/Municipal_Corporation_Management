import React from 'react';
import Navbar from "../home/navbar"
import Footer from '../home/footer';
import WorkerDashBody from './workerDashBody';

export default function WorkerDashboard() {
  return (
    <div>
        <Navbar/>
        <WorkerDashBody/>
        <Footer/>
    </div>
  );
}