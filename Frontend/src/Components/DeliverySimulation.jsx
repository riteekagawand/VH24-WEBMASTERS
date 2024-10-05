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
    image: "/PedestrianCrossing.jpg",
    answer: "Pedestrian Crossing",
    options: [
      "No Pedestrians",
      "Pedestrian Crossing",
      "Crosswalk Ahead",
      "Watch for Children",
    ],
  },
  {
    image: "/SpeedLimit60.png",
    answer: "60 km/h",
    options: ["50 km/h", "60 km/h", "70 km/h", "40 km/h"],
  },
  {
    image: "/NoParking.png",
    answer: "No Parking",
    options: ["No Stopping", "No Parking", "No Standing", "No Halting"],
  },
  {
    image: "/OneWay.png",
    answer: "One Way",
    options: ["No Entry", "One Way", "Two Way", "Dead End"],
  },
  {
    image: "/RailroadCrossing.png",
    answer: "Railroad Crossing",
    options: [
      "Intersection Ahead",
      "Railway Station",
      "Railroad Crossing",
      "Bridge Ahead",
    ],
  },
  {
    image: "/Hospital.png",
    answer: "Hospital",
    options: [
      "School Ahead",
      "Hospital",
      "Medical Center",
      "Emergency Services",
    ],
  },
  {
    image: "/Roundabout.png",
    answer: "Roundabout",
    options: ["Traffic Circle", "Roundabout", "Rotary", "Intersection"],
  },
  {
    image: "/SchoolZone.png",
    answer: "School Zone",
    options: [
      "School Zone",
      "School Area",
      "Pedestrian Zone",
      "Playground Ahead",
    ],
  },
  {
    image: "/SlipperyRoad.png",
    answer: "Slippery Road",
    options: ["Wet Surface", "Slippery Road", "Icy Conditions", "Frozen Road"],
  },
  {
    image: "/TrafficSignalAhead.png",
    answer: "Traffic Signal Ahead",
    options: [
      "Intersection Ahead",
      "Signal Crossing",
      "Traffic Signal Ahead",
      "Stop Ahead",
    ],
  },
  {
    image: "/TruckParking.png",
    answer: "Truck Parking",
    options: ["Rest Area", "Truck Stop", "Truck Parking", "Loading Zone"],
  },
  {
    image: "/BicycleLane.png",
    answer: "Bicycle Lane",
    options: ["Cycle Route", "Bicycle Crossing", "Bicycle Lane", "Pedal Zone"],
  },
  {
    image: "/NoUTurn.png",
    answer: "No U-Turn",
    options: ["No Left Turn", "No Right Turn", "No U-Turn", "No Turns Allowed"],
  },
  {
    image: "/RoadWork.png",
    answer: "Road Work",
    options: ["Construction Zone", "Repair Ahead", "Road Work", "Work Zone"],
  },
];

const PartyPopup = ({ trigger }) =>
  trigger ? (
    <Confetti
      width={window.innerWidth }
      height={window.innerHeight  }
      numberOfPieces={500}
      recycle={false}
      initialVelocityY={30}
    />
  ) : null;

const DeliverySimulation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [timer, setTimer] = useState(10);
  const [feedback, setFeedback] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
  }, []);

  const question = randomizedQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const correct = option === question.answer;
    setSelectedAnswer(option);
    setHasClicked(true);
    setFeedback(correct ? "Correct Answer!" : "Wrong Answer!");
    setIsCorrect(correct);
    setShowCorrectAnswer(!correct);
    setIsFlipped(true);
  };

  useEffect(() => {
    let timerInterval;
    if (timer > 0 && !isFlipped) {
      timerInterval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setFeedback("Time's up!");
      setShowCorrectAnswer(true);
      setIsFlipped(true);
      setIsCorrect(false);
    }
    return () => clearInterval(timerInterval);
  }, [timer, isFlipped]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % randomizedQuestions.length);
    setIsFlipped(false);
    setTimer(10);
    setFeedback("");
    setShowCorrectAnswer(false);
    setSelectedAnswer("");
    setIsCorrect(false);
    setHasClicked(false);
  };

  if (!question) {
    return (
      <div className="text-2xl font-bold text-center mt-10">Loading...</div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-300 to-red-700 ">
      <PartyPopup trigger={isCorrect} />
      <div className="relative bg-white w-full max-w-4xl h-[500px] rounded-3xl shadow-2xl mt-[-80px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105">
        
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center ${
            isFlipped ? "hidden" : ""
          }`}
        >
          <div className="absolute top-4 right-4 flex items-center bg-red-200 rounded-full px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
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
            <span className="text-2xl font-bold ml-2">{timer}</span>
          </div>

          <img
            src={question.image}
            alt="Traffic Sign"
            className="w-64 h-64 object-contain mb-8 rounded-lg shadow-md"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full max-w-3xl">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`px-6 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                  selectedAnswer === option
                    ? selectedAnswer === question.answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : hasClicked
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white border-2 border-red-500 text-red-700 hover:bg-red-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center ${
            isFlipped ? "" : "hidden"
          }`}
        >
          <h2
            className={`text-6xl font-bold mb-6 ${
              isCorrect ? "text-green-500" : "text-red-500"
            }`}
          >
            {feedback}
          </h2>
          {showCorrectAnswer && (
            <p className="text-3xl mb-8 text-gray-700">
              The correct answer is:{" "}
              <span className="font-bold text-red-600">{question.answer}</span>
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="mt-8 bg-gradient-to-r from-red-300 to-red-700 text-white rounded-full text-2xl px-12 py-4 font-semibold hover:from-red-400 hover:to-red-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliverySimulation;