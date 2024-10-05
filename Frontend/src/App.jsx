import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
import Navbar from './Components/Header';
import GoogleTranslate from './snippets/GoogleTranslate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileForm from './Components/ProfileForm';
import UserDashboard from './Pages/UserDashboard';
import GameHome from './Pages/GameHome';
import DeliveryOptions from './Pages/DeliveryOptions';
import DeliveryOptionDetail from './Pages/DeliveryOptionDetail';
import LocalSituationOptions from './Pages/LocalSituation';
import LocalSituationDetail from './Pages/LocalSituationDetail';
import DeliverySimulation from './Components/DeliverySimulation';
import Rewards from './Components/Rewards';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility

  const handleOpen = () => {
    setIsFormOpen(true); // Open the ProfileForm
  };

  const handleClose = () => {
    setIsFormOpen(false); // Close the ProfileForm
  };

  return (
    <Router>
      <div className='bg-white'>
        <Navbar />
        <div>
          <GoogleTranslate />
          
        </div>
        <ToastContainer />

  

        {/* Render ProfileForm only if isFormOpen is true */}
        {isFormOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <ProfileForm onClose={handleClose} />
            </div>
          </div>
        )}

        {/* Define your routes */}
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path="/dashboard/game" element={<GameHome />} />
          <Route path="/delivery" element={<DeliveryOptions />} />
          <Route path="/delivery/:situationId" element={<DeliveryOptionDetail />} />
          <Route path="/local-situation" element={<LocalSituationOptions />} />
          <Route path="/local-situation/:situationId" element={<LocalSituationDetail />} />
          <Route path="/Delivery/sim" element={<DeliverySimulation />} />
          <Route path="/dashboard/rewards" element={<Rewards />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
