import React from 'react';
import Footer from '../home/footer';
import Header from '../home/navbar';
import UpdateProfile from './update_profile';

export default function Updateform() {
  return (
    <div className='mt-[70px]'>
        <Header/>
        <UpdateProfile/>
        <Footer/>
    </div>
  );
}
