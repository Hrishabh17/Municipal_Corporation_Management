import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar1";
import Footer from './footer1';
import UserBody from "./content";

export default function User() {
  return (
    <div>
        <Navbar/>
        <UserBody/>
        <Footer/>
    </div>
  );
}

