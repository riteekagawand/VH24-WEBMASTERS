// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import GameHome from './Pages/GameHome';
import DeliveryOptions from './Pages/DeliveryOptions';
import DeliveryOptionDetail from './Pages/DeliveryOptionDetail';

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameHome />} />
          <Route path="/delivery" element={<DeliveryOptions />} />
          <Route path="/delivery/:situationId" element={<DeliveryOptionDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
