// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import GameHome from './Pages/GameHome';
import DeliveryOptions from './Pages/DeliveryOptions';
import DeliveryOptionDetail from './Pages/DeliveryOptionDetail';
import LocalSituationOptions from './Pages/LocalSituation';
import LocalSituationDetail from './Pages/LocalSituationDetail';

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameHome />} />
          <Route path="/delivery" element={<DeliveryOptions />} />
          <Route path="/delivery/:situationId" element={<DeliveryOptionDetail />} />
          <Route path="/local-situation" element={<LocalSituationOptions />} />
          <Route path="/local-situation/:situationId" element={<LocalSituationDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
