import React, { useState, useEffect } from "react";

// Dummy data for questions
const questions = [
  {
    image: "/Mandatory.png", // Image of a green traffic light
    answer: "MANDATORY",
    options: ["CAUTIONARY", "MANDATORY", "INFORMATORY", "ALL OF THE ABOVE"],
  },
  {
    image: "/RedLight.png", // Image of a red traffic light
    answer: "Stop",
    options: ["Go", "Stop", "Wait", "Speed up"],
  },
  {
    image: "/YellowLight.png",
    answer: "Wait",
    options: ["Go", "Stop", "Wait", "Speed up"],
  },
  {
    image: "/CAUTIONARY.png",
    answer: "CAUTIONARY",
    options: ["CAUTIONARY", "MANDATORY", "INFORMATORY", "ALL OF THE ABOVE"],
  },
];


const DeliverySimulation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question
  const [isFlipped, setIsFlipped] = useState(false); // Track if card is flipped
  const [timer, setTimer] = useState(10); // 10-second timer
  const [feedback, setFeedback] = useState(""); // Feedback message for answer
  const [selectedAnswer, setSelectedAnswer] = useState(""); // Store selected answer

  // Handle answer click
  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer); // Store selected answer
    if (selectedAnswer === questions[currentQuestion].answer) {
      setFeedback("Correct Answer!"); // Set feedback message
    } else {
      setFeedback(
        `Wrong Answer! Correct: ${questions[currentQuestion].answer}`
      ); // Set feedback message
    }
    setIsFlipped(true); // Flip the card
    clearInterval(timerInterval); // Stop the timer
  };

  // Timer logic
  useEffect(() => {
    let timerInterval;
    if (timer > 0 && !isFlipped) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setFeedback(`Time's up! Correct: ${questions[currentQuestion].answer}`); // Set feedback when time runs out
      setIsFlipped(true); // Flip card if time runs out
    }
    return () => clearInterval(timerInterval); // Clean up timer
  }, [timer, isFlipped]);

  // Move to next question and reset timer
  const handleNextQuestion = () => {
    setIsFlipped(false); // Unflip the card
    setTimer(10); // Reset timer
    setFeedback(""); // Clear feedback message
    setSelectedAnswer(""); // Clear selected answer
    setCurrentQuestion((prev) => (prev + 1) % questions.length); // Next question
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Outer Container */}
      <div className="relative bg-white w-[50vw] min-h-[50vh] rounded-3xl shadow-xl p-6 flex items-center justify-center transform-[preserve-3d] duration-500 ease-in transition-all">
        {/* Question Display */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center ${
            isFlipped ? "hidden" : ""
          }`}
        >
          <div className="absolute top-4 right-4 flex items-center">
            {/* Clock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
            </svg>
            <span className="text-xl font-bold ml-2">{timer}</span>{" "}
            {/* Timer */}
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={questions[currentQuestion].image}
              alt="Traffic Sign"
              className="w-24 h-24"
            />
            <div className="grid grid-cols-2 gap-8 mt-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`px-14 py-6 rounded-3xl hover:shadow-md text-3xl hover:scale-95 text-white hover:bg-red-400 ${
                    selectedAnswer === option
                      ? selectedAnswer === questions[currentQuestion].answer
                        ? "bg-green-600" // Green for correct answer
                        : "bg-red-600" // Red for wrong answer
                      : "bg-red-500" // Default button color
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Answer Display */}
        <div
          className={`absolute w-full h-full flex items-center justify-center ${
            isFlipped ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col text-center items-center justify-center">
            <h2
              className={`text-5xl  font-bold ${
                selectedAnswer === questions[currentQuestion].answer
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {feedback}
            </h2>
            <button
              onClick={handleNextQuestion}
              className="mt-8 bg-blue-500 rounded-3xl text-3xl px-16 py-6 text-white hover:scale-95"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySimulation;
