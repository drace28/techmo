import React, { useState } from 'react';
import cardData from './cardData'; // Import cardData
import './CardSlider.css';

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < cardData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="card-slider-container">
      <div className="card-slider-wrapper">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={item.image} alt={`Card ${index}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="slider-button prev-button">
        Prev
      </button>
      <button onClick={handleNext} className="slider-button next-button">
        Next
      </button>
    </div>
  );
};

export default CardSlider;
