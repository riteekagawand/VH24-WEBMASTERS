import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  { id: 1, title: 'First Aid Training', description: 'Learn the essentials of first aid.' },
  { id: 2, title: 'Fire Safety', description: 'Master fire safety protocols.' },
]

const CourseCards = () => {
  const navigate = useNavigate();


  const handleStartCourse = (courseId) => {
    navigate(`/course-roadmap/${courseId}`);
  };

  return (
    
    <div className="min-h-screen flex  flex-col justify-center items-center">
      <h1 className='font-black text-[50px] text-black'>Training Modules</h1>
      <div className="flex space-x-6 mt-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 text-white rounded-xl shadow-md p-6 w-64 h-80 flex flex-col justify-between mx-4 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-300 text-sm">{course.description}</p>
            </div>
            <button
              onClick={() => handleStartCourse(course.id)}
              className="bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500"
            >
              Start Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;