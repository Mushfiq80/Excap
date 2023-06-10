import React, { useState, useEffect } from 'react';
import './Slideshow.css'


const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center slide-img ">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="max-w-full max-h-full" />
    </div>
  );
};

export default Slideshow;
