import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
