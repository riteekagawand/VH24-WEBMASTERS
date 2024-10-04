import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const questions = [
  {
    image: "/Mandatory.png",
    answer: "MANDATORY",
    options: ["CAUTIONARY", "MANDATORY", "INFORMATORY", "ALL OF THE ABOVE"],
  },
  {
    image: "/RedLight.png",
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

const PartyPopup = ({ trigger }) =>
  trigger ? (
    <Confetti
      width={window.innerWidth * 0.45}
      height={window.innerHeight * 0.6}
      numberOfPieces={500}
      recycle={false}
      initialVelocityY={30}
    />
  ) : null;

const DeliverySimulation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [timer, setTimer] = useState(10);
  const [feedback, setFeedback] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const question = questions[currentQuestion];

  // Handle answer click
  const handleAnswerClick = (option) => {
    const correct = option === question.answer;
    setSelectedAnswer(option);
    setHasClicked(true);
    setFeedback(correct ? "Correct Answer!" : "Wrong Answer!");
    setIsCorrect(correct);
    setShowCorrectAnswer(!correct);
    setIsFlipped(true);
    clearInterval(timerInterval);
  };

  // Timer logic
  useEffect(() => {
    if (timer > 0 && !isFlipped) {
      const timerInterval = setInterval(
        () => setTimer((prev) => prev - 1),
        1000
      );
      return () => clearInterval(timerInterval);
    } else if (timer === 0) {
      setFeedback("Time's up!");
      setShowCorrectAnswer(true);
      setIsFlipped(true);
      setIsCorrect(false);
    }
  }, [timer, isFlipped]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setIsFlipped(false);
    setTimer(10);
    setFeedback("");
    setShowCorrectAnswer(false);
    setSelectedAnswer("");
    setIsCorrect(false);
    setHasClicked(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative bg-white w-[45vw] min-h-[60vh] rounded-3xl shadow-xl p-6 flex  items-center justify-center">
        {/* Front side */}
        <PartyPopup trigger={isCorrect} />
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center ${
            isFlipped ? "hidden" : ""
          }`}
        >
          <div className="absolute top-4 right-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-600"
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
            <span className="text-3xl font-bold ml-2">{timer}</span>
          </div>

          {/* Added margin for spacing */}
          <img
            src={question.image}
            alt="Traffic Sign"
            className="w-48 h-48 mb-8"
          />
          <div className="grid grid-cols-2 gap-8 mt-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`px-4 py-4 min-w-80 rounded-3xl text-3xl hover:shadow-md hover:scale-95 transition-all duration-300 ${
                  selectedAnswer === option
                    ? selectedAnswer === question.answer
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                    : hasClicked
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white border-2 border-red-600 text-red-700 hover:bg-red-400 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Back side */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center ${
            isFlipped ? "" : "hidden"
          }`}
        >
          <h2
            className={`text-5xl font-bold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </h2>
          {showCorrectAnswer && (
            <p className="text-2xl mt-4 text-gray-600">
              The correct answer is:{" "}
              <span className="font-bold text-blue-500">{question.answer}</span>
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="mt-8 bg-white rounded-3xl text-3xl px-16 py-6 text-blue-500 border-2 border-blue-500 hover:scale-105 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliverySimulation;
