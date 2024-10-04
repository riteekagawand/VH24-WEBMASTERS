import { useRef } from "react"; // Import useRef for managing animation state
import { leftCards, rightCards } from "../assets/helper"; // Import the cards arrays

const ScrollingCards = ({ direction = "left" }) => {
  // Choose cards based on the direction
  const cards = direction === "left" ? leftCards : rightCards;

  // Extend the cards array to allow infinite scrolling
  const extendedCards = [...cards, ...cards, ...cards]; // Duplicate cards three times to ensure smooth transition

  const marqueeRef = useRef(null); // Create a ref to the marquee

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused"; // Pause animation on hover
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running"; // Resume animation on leave
    }
  };

  return (
    <div className="w-full mt-2 m-auto overflow-hidden relative">
      <div
        className={`flex gap-2 ${
          direction === "left" ? "animate-loopLeft" : "animate-loopRight"
        } space-x-4 duration-150`}
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter} // Add hover event
        onMouseLeave={handleMouseLeave} // Add leave event
      >
        {extendedCards.map((card, index) => (
          <div
            key={index}
            className={`card hover:scale-95 w-80 h-36 flex-shrink-0 flex flex-col justify-between my-2 px-4 py-6 rounded-xl shadow-slate-500 shadow-md ${
              direction === "left"
                ? "bg-custom-gradient-green-right"
                : "bg-custom-gradient-green-left"
            }`}
          >
            <div className="flex items-center gap-4 justify-start">
              <img
                src={card.image} // Use the image URL from the card data
                alt={card.name}
                className="w-16 h-16 rounded-full object-cover bg-black" // Ensure the image is rounded and fits nicely
              />
              <div>
                <h3 className="text-xl font-bold">{card.name}</h3>
                <span className="text-black">{card.username}</span>
              </div>
            </div>
            <div>
              <p className="text-md text-center text-gray-900">
                {card.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCards;