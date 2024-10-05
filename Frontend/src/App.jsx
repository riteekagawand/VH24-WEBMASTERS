import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import DailyStreakChallenge from './Components/DailyStreakChallenge';
import ScrollingCards from './Components/ScrollingCards';
import DeliverySimulation from './Components/DeliverySimulation';
import Map from './Components/Map';
import Routess from './Components/Routes';
import TrafficChallengePage from "./pages/TrafficChallengePage";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Streak" element={<DailyStreakChallenge />} />
          <Route path="/Delivery" element={<DeliverySimulation />} />
          <Route
            path="/Map"
            element={<Map origin="Mumbai, India" destination="Pune, India" />}
          />
          <Route path="/Routes" element={<Routess />} />
          <Route path="/traffic-challenge" component={TrafficChallengePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
