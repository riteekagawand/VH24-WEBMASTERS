import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import DailyStreakChallenge from './Components/DailyStreakChallenge';
import ScrollingCards from './Components/ScrollingCards';
import DeliverySimulation from './Components/DeliverySimulation';


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Streak" element={<DailyStreakChallenge/>} />
            <Route path="/Delivery" element={<DeliverySimulation/>} />
           
          </Routes>
        </div>
      </Router>
  );
}

export default App;
