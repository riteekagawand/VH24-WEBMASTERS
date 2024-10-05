import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
//import DailyStreakChallenge1 from './Components/DailyStreakChallenge1'
import UserDashboard from './Pages/UserDashboard';
import RedeemPage from './Components/Rewards';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />}/>
          <Route path='/userboard' element={<UserDashboard/>}/>
          <Route path='/rpage' element={<RedeemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
