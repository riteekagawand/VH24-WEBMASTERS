import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
import Leaderboard from './Components/LeaderBoard';
import DailyStreakChallenge from './Components/DailyStreakChallenege';
// import RouteFinder from './Components/RouteFinder';
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />}/>
          <Route path='/leader' element={<Leaderboard />} />
          <Route path='/daily' element={<DailyStreakChallenge/>}/>
          <Route path='/userboard' element={<UserDashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
