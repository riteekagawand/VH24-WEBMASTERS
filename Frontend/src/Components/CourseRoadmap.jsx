import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLock } from 'react-icons/fa'; // Import lock icon from react-icons

const courseRoadmaps = {
  1: {
    title: 'First Aid Training',
    milestones: [
      { 
        title: 'Study Material', 
        description: 'First aid handbook', 
        link: 'https://www.indianredcross.org/publications/FA-manual.pdf' 
      },
      { 
        title: 'YouTube Video', 
        description: 'Watch this video on YouTube', 
        link: 'https://youtu.be/5OKFljZ2GQE?si=1V6P6bm996gCZtMI' 
      },
      { 
        title: 'Documentation', 
        description: 'Read the official documentation', 
        link: 'https://helptown.ch/en/first-aid-basics/documentation-of-first-aid/' 
      },
      { 
        title: 'Course Completion', 
        description: 'Download Certificate',
        link: 'https://drive.google.com/uc?export=download&id=1b9LdoVQV_x3NHkH2evHHHTu3lk0MDoro'  
      },
    ],
  },
  2: {
    title: 'Fire Security',
    milestones: [
      { 
        title: 'Study Material', 
        description: 'Fire safety guide', 
        link: 'https://www.fia.uk.com/static/uploaded/1a8193bf-30f9-42db-9c7dfda0eec72e8d.pdf' 
      },
      { 
        title: 'YouTube Video', 
        description: 'Watch this video on YouTube', 
        link: 'https://youtu.be/w4jHpHoYZhk?si=NnQwmZaFl8tRdCrs' 
      },
      { 
        title: 'Documentation', 
        description: 'Read the official documentation', 
        link: 'https://www.iitr.ac.in/safety/Safety%20Awareness/Fire_Safety.pdf' 
      },
      { 
        title: 'Module Completion', 
        description: 'Download Certificate',
        link: 'https://drive.google.com/uc?export=download&id=19RdIM0ECU0CLicLIZMoNgno81e5uRnWG' 
      },
    ],
  },
};

const CourseRoadmap = () => {
  const { courseId } = useParams();
  const roadmap = courseRoadmaps[courseId];

  // State to track module completion
  const [completedModules, setCompletedModules] = useState({
    1: false,
    2: false,
    3: false,
  });

  // Simulate user login and manage which modules are accessible
  const isModuleAccessible = (moduleIndex) => {
    return Object.values(completedModules).slice(0, moduleIndex).every((completed) => completed);
  };

  if (!roadmap) {
    return <div className="text-center text-black">Course not found!</div>;
  }

  const completeModule = (index) => {
    setCompletedModules((prev) => ({
      ...prev,
      [index + 1]: true,
    }));
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8">{roadmap.title}</h1>
        <div className="flex flex-col items-center">
          {roadmap.milestones.map((milestone, index) => (
            <div key={index} className="relative mb-10 w-full flex flex-col items-center">
              {/* Connecting line */}
              {index > 0 && (
                <div className="absolute left-1/2 w-1 h-10 bg-gray-600" style={{ top: '30%' }} />
              )}
              {/* Circle for milestone */}
              <div className={`w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center z-10`}>
                <span className="text-xs text-white">{index + 1}</span>
              </div>
              {/* Milestone content with link */}
              <div className="bg-yellow-400 p-4 rounded-xl shadow-md z-10 w-3/4 text-center mt-2">
                <h2 className="text-xl font-semibold mb-2">
                  {/* Check accessibility and render accordingly */}
                  {isModuleAccessible(index) ? (
                    <a href={milestone.link} target="_blank" rel="noopener noreferrer" className="text-black underline font-semibold hover:font-bold">
                      {milestone.title}
                    </a>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FaLock className="mr-2 text-gray-500" /> {/* Lock icon */}
                      {milestone.title}
                    </span>
                  )}
                </h2>
                <p>{milestone.description}</p>
                {/* Button to complete the module, only show for accessible modules */}
                {isModuleAccessible(index) && !completedModules[index + 1] && (
                  <button 
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg" 
                    onClick={() => completeModule(index)}
                  >
                    Complete Module
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRoadmap;