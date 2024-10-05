import React, { useState } from 'react';
import Lottie from 'react-lottie';
import globe from '../assets/json/GLOBE.json';
import countryData from '../data/countryData.json'; // Local country 


const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handlePinClick = () => {
    
    const randomCountry = countryData[Math.floor(Math.random() * countryData.length)];
    setSelectedCountry(randomCountry);
    setQuizStarted(true);
  };

  // Adjust the Lottie options based on quizStarted state
  const defaultOptions = {
    loop: !quizStarted, // Stop looping when quiz starts
    autoplay: !quizStarted, // Stop autoplay when quiz starts
    animationData: globe,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="relative flex flex-col items-center h-[100vh]">
      <h1 className="text-2xl mb-6">Geography Quiz Game</h1>

      {/* Lottie Animation for the Globe */}
      <div className="inline-block w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] relative">
        <Lottie options={defaultOptions} height="100%" width="100%" />
        
        {/* Pin Button */}
        {!quizStarted && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:scale-110 transition"
            onClick={handlePinClick}
            style={{ width: '40px', height: '40px' }} // Pin Size
          >
            📍
          </button>
        )}
      </div>

      {/* Start Quiz */}
      {quizStarted && selectedCountry && (
        <QuizComponent country={selectedCountry} />
      )}
    </div>
  );
};

// Quiz Component (Example)
const QuizComponent = ({ country }) => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Array of questions related to the country
  const questions = [
    { question: `What is the capital of ${country.name}?`, options: [country.capital, 'Option B', 'Option C'], correctAnswer: country.capital },
    { question: `What is the population of ${country.name}?`, options: ['Option A', 'Option B', country.population], correctAnswer: country.population },
    
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  if (questionIndex >= questions.length) {
    return <h2>Your Score: {score} / {questions.length}</h2>;
  }

  return (
    <div className="mt-4">
      <h2>{questions[questionIndex].question}</h2>
      {questions[questionIndex].options.map((option, index) => (
        <button 
          key={index}
          className="block mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Home;
