import { useNavigate } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../Components/Sidebar'; 
import { Grid, BookOpen } from 'lucide-react'; 
import LeaderBoard from '../Components/LeaderBoard';  
import DailyStreakChallenge1 from '../Components/DailyStreakChallenge1';
import { useState } from 'react';

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const navigate = useNavigate();  

    return (
        <div className="flex h-screen-max">
            <Sidebar flex>
                <SidebarItem 
                    icon={<Grid />} 
                    text="Dashboard" 
                    active={activeTab === 'dashboard'} 
                    onClick={() => setActiveTab('dashboard')}  
                />
                <SidebarItem 
                    icon={<BookOpen />} 
                    text="Training" 
                    active={activeTab === 'training'} 
                    onClick={() => navigate('/training')}  
                />
            </Sidebar>

            <div className="flex-1 p-4">
                {activeTab === 'dashboard' && (
                    <div className='mb-4'>
                        <LeaderBoard />  

                        <div className='mt-4'>
                            <DailyStreakChallenge1/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
