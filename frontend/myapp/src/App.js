import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/home';
import Login from './components/Login_Signup/login';
import CitizenSignup from './components/Login_Signup/citizen_signup';
import WorkerDashboard from './components/worker_dashboard/workerDashPage';
import ComplaintPage from './components/complaint/complaintPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<CitizenSignup />}/>
          <Route path='/complaint' element={<ComplaintPage />}/>
          <Route path='/empdash' element={<WorkerDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
