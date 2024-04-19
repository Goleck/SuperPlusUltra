import React, { useState, useEffect } from 'react';
import Slogan1 from '../Images/INFO1C1.webp';
import Slogan2 from '../Images/INFO2C.webp';
import Slogan3 from '../Images/INFO3C.webp';
// Style
import '../Styles/CarouselStyle.css';

const Carousel = () => {
    const images = [Slogan1, Slogan2, Slogan3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => {
      clearInterval(intervalId); 
    };
  }, [currentIndex, images.length]);

  return (
    <div>
      <div className="Carousel">
        <img className="Carousel-image" fetchpriority="low" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default Carousel;
