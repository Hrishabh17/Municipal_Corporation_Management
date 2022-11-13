import React from 'react';
import Navbar from './home/navbar'
import Footer from './home/footer';
import SuccessMsg from './successfullMsg';

export default function SuccessMsgPage() {
  return (
    <div>
        <Navbar/>
        <SuccessMsg/>
        <Footer/>
    </div>
  );
}
