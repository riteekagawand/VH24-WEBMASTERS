// src/components/FlashCardQuiz.jsx
import React, { useState } from "react";

const questions = [
  {
    image: "/mandatory.jpg", // Use relevant images of traffic symbols
    answer: "Mandatory",
    options: ["Cautionary", "Mandatory", "Informatory", "All of the Above"],
  },
  {
    image: "/stop_sign.jpg",
    answer: "Stop",
    options: ["Go", "Stop", "Wait", "Speed up"],
  },
  {
    image: "/yield.jpg",
    answer: "Yield",
    options: ["Go", "Stop", "Yield", "Speed up"],
  },
  {
    image: "/no_entry.jpg",
    answer: "No Entry",
    options: ["No Entry", "Mandatory", "Informatory", "All of the Above"],
  },
];

const FlashCardQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const question = questions[currentQuestion];

  const handleAnswerClick = (option) => {
    const isCorrect = option === question.answer;
    setFeedback(isCorrect ? "Correct!" : "Wrong!");
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setSelectedAnswer("");
    setFeedback("");
  };

  return (
    <div className="absolute top-0 left-0 z-20 bg-white p-4 w-80">
      <h2 className="text-xl font-bold mb-2">Traffic Symbol Quiz</h2>
      <img
        src={question.image}
        alt="Traffic Symbol"
        className="w-full h-32 object-cover mb-4"
      />
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`block w-full p-2 mb-2 rounded ${
              selectedAnswer === option
                ? selectedAnswer === question.answer
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="text-lg">{feedback}</p>}
      {selectedAnswer && (
        <button
          onClick={handleNextQuestion}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default FlashCardQuiz;
