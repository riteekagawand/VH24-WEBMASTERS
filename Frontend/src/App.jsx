import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home';
// import Leaderboard from './Components/LeaderBoard';
// import DailyStreakChallenge from './Components/DailyStreakChallenege';
import DailyStreakChallenge1 from './Components/DailyStreakChallenge1'

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
          <Route path='/userboard' element={<UserDashboard/>}/>
          <Route path='/challenge1' element={<DailyStreakChallenge1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
