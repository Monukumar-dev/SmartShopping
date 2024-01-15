import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 2 : prevSlide - 2
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-wrapper">
        {images.slice(currentSlide, currentSlide + 2).map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`slide ${currentSlide + index + 1}`} />
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
