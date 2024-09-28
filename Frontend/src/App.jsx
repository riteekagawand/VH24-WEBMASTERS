import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import VolunteerRegistration from './Components/VolunteerRegistration';
import Login from './Components/login';
import TrainingModules from './Components/TrainingModules';
import OrganizationRegister from './Components/OrganizationRegister';
import OrganizationLogin from './Components/OrganizationLogin';
import Inventory from './Pages/Inventory';
import UserDashboardPage from './Pages/UserDashboardPage';
import OrganizationDashboard from './Pages/OrganizationDashboard'
import Inventor from './Pages/Inventory-org';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<VolunteerRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modules" element={<TrainingModules />} />
          <Route path="/organization-register" element={<OrganizationRegister />} />
          <Route path="/organization-login" element={<OrganizationLogin />} />
          <Route path='/userdash' element={<UserDashboardPage />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/org/inventor' element={<Inventor />} />
          <Route path='/orgdash' element={<OrganizationDashboard />} /> {/* Ensure correct path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
