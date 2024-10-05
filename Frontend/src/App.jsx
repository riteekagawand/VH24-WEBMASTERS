import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
import Navbar from './Components/Header'
import GoogleTranslate from './snippets/GoogleTranslate';

function App() {
  return (
    <Router>
      <div className='bg-white'>
        <Navbar/>
        <div>
          <GoogleTranslate />
        </div>
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