import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home/home';
import Login from './components/Login_Signup/login';
import CitizenSignup from './components/Login_Signup/citizen_signup';
import WorkerDashboard from './components/worker_dashboard/workerDashPage';
import ComplaintPage from './components/complaint/complaintPage';
import UserCompalints from './components/userPages/userPage';
import AdminDashboard from './components/admin_dashboard/adminDashPage';
import TabEmp from './components/admin_dashboard/emptable';
import TabUser from './components/admin_dashboard/usertable';
import SuccessMsgPage from './components/successPage';
import ComplaintDetailPage from './components/complaint/complaintDetailPage';
import { UserContext } from './components/context';
import Contact from './components/contact_us/contact';
import About from './components/about_us/about1';
import WorkerSignup from './components/Login_Signup/worker_signup';
import WorkerLogin from './components/Login_Signup/worker_login';

function App() {

  const [value, setValue] = React.useState({exists: false})

  return (
    <div className="App">
      <Router>
          <UserContext.Provider value={{value, setValue}}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<CitizenSignup />}/>
                <Route path='/complaint' element={<ComplaintPage />}/>
                <Route path='/empdash' element={<WorkerDashboard/>}/>
                <Route path='/usercomplaints' element={<UserCompalints/>}/>
                <Route path='/admindash' element={<AdminDashboard/>}/>
                <Route path='/TabEmp' element={<TabEmp/>}/>
                <Route path='/TabUser' element={<TabUser/>}/>
                <Route path='/success' element={<SuccessMsgPage/>}/>
                <Route path='/viewcomplaint' element={<ComplaintDetailPage/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/WorkerSignup' element={<WorkerSignup/>}/>
                <Route path='/WorkerLogin' element={<WorkerLogin/>}/>

            </Routes>
          </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
