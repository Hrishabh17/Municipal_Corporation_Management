import React from 'react';
import Navbar from "../home/navbar"
import HomeBody from "../home/home_content"
import Footer from '../home/footer';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBody/>
        <Footer/>
    </div>
  );
}

