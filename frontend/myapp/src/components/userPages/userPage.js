import React from 'react';
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import ComplaintSection from './content';

export default function UserCompalints() {
  return (
    <div>
        <Navbar/>
        <ComplaintSection/>
        <Footer/>
    </div>
  );
}

