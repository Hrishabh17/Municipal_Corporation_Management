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
import SuccessMsgPage from './components/successPage';
import ComplaintDetailPage from './components/complaint/complaintDetailPage';
import { UserContext } from './components/context';
import Contact from './components/contact_us/contact';
import About from './components/about_us/about1';
import WorkerSignup from './components/Login_Signup/worker_signup';
import CorporatorDashboard from './components/corporator_dashboard/corporatorDashPage';
import CorporatorComplaintDetailPage from './components/corporator_dashboard/complaintDetailPage';
import Updateform from './components/Update_Profile/Update_page';
import MayorPage from './components/Mayor/mayor_page';
import MayorWater from './components/Mayor/water';
import MayorGarbage from './components/Mayor/garbage';
import MayorRoad from './components/Mayor/road';
import MayorPower from './components/Mayor/power';

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
                <Route path='/success' element={<SuccessMsgPage/>}/>
                <Route path='/viewcomplaint' element={<ComplaintDetailPage/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/WorkerSignup' element={<WorkerSignup/>}/>
                <Route path='/corporatordash' element={<CorporatorDashboard/>}/>
                <Route path='/viewcorporatorcomplaint' element={<CorporatorComplaintDetailPage/>}/>
                <Route path='/updateprofile' element={<Updateform/>}/>
                <Route path='/mayor' element={<MayorPage/>}/>
                <Route path='/water' element={<MayorWater/>}/>
                <Route path='/garbage' element={<MayorGarbage/>}/>
                <Route path='/road' element={<MayorRoad/>}/>
                <Route path='/power' element={<MayorPower/>}/>
            </Routes>
          </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
