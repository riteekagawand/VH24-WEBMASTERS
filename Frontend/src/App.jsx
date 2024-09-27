import Home from '../src/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import VolunteerRegistration from './Components/VolunteerRegistration';
import Login from './Components/login';

function App() {

	return (
		
		<Router>
      <div>
        <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/register" element={<VolunteerRegistration />} />
		<Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
	);
}

export default App;
