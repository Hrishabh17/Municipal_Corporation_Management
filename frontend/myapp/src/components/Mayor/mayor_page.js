import React from 'react';
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import MayorContent from './mayor_content';



export default function MayorPage() {
  return (
    <div>
        <Navbar/>
        <MayorContent/>
        <Footer/>
    </div>
  );
}

