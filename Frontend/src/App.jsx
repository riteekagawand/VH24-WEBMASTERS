import Home from '../src/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VolunteerRegistration from './Components/VolunteerRegistration';
import Login from './Components/login';
import TrainingModules from './Components/TrainingModules';
import OrganizationRegister from './Components/OrganizationRegister';
import OrganizationLogin from './Components/OrganizationLogin';
function App() {

	return (
		
		<Router>
      <div>
        <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/register" element={<VolunteerRegistration />} />
		<Route path="/login" element={<Login />} />
		<Route path="/modules" element={<TrainingModules />} />
		<Route path="/organization-register" element={<OrganizationRegister />} />
		<Route path="/organization-login" element={<OrganizationLogin />} />
        </Routes>
      </div>
    </Router>
	);
}

export default App;
