import Home from '../src/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VolunteerRegistration from './Components/VolunteerRegistration';
import Login from './Components/login';
import TrainingModules from './Components/TrainingModules';

function App() {

	return (
		
		<Router>
      <div>
        <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/register" element={<VolunteerRegistration />} />
		<Route path="/login" element={<Login />} />
		<Route path="/modules" element={<TrainingModules />} />
        </Routes>
      </div>
    </Router>
	);
}

export default App;
