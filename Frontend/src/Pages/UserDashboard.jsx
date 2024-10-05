import { useNavigate } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../Components/Sidebar'; 
import { Grid, BookOpen } from 'lucide-react'; 
import LeaderBoard from '../Components/LeaderBoard';  // Assuming you have this component
//import DailyStreakChallenge from '../Components/DailyStreakChallenege';  // Assuming you have this component
import DailyStreakChallenge1 from '../Components/DailyStreakChallenge1';
import { useState } from 'react';

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const navigate = useNavigate();  // For navigating to different pages

    return (
        <div className="flex h-screen-max">
            {/* Sidebar Component */}
            <Sidebar flex>
                {/* Dashboard: Leaderboard and Daily Streak */}
                <SidebarItem 
                    icon={<Grid />} 
                    text="Dashboard" 
                    active={activeTab === 'dashboard'} 
                    onClick={() => setActiveTab('dashboard')}  // Toggle Dashboard view
                />
                {/* Training: New Page */}
                <SidebarItem 
                    icon={<BookOpen />} 
                    text="Training" 
                    active={activeTab === 'training'} 
                    onClick={() => navigate('/training')}  // Open Training on a new page
                />
            </Sidebar>

            {/* Main Content Area */}
            <div className="flex-1 p-4 bg-gray-50">
                {/* Toggle views based on the active sidebar item */}
                {activeTab === 'dashboard' && (
                    <div>
                        <LeaderBoard />  {/* Display Leaderboard */}
                        <div className='mt-20'>
                        <DailyStreakChallenge1/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
