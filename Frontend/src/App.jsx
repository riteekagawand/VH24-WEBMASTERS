import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Register from './Components/Register';


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />

           
          </Routes>
        </div>
      </Router>
  );
}

export default App;
