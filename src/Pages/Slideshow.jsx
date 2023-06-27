import React, { useState, useEffect } from 'react';
import './Slideshow.css'



const images = [
  'https://i.ibb.co/mcJ4pYz/image1.jpg',
  'https://i.ibb.co/Hnn72HJ/image2.jpg',
  'https://i.ibb.co/WkVW3SV/image3.jpg',
  'https://i.ibb.co/NLjN464/image4.jpg',
  'https://i.ibb.co/gM1fR5x/image5.jpg',
  'https://i.ibb.co/m4qzh3y/image6.jpg',
  'https://i.ibb.co/7n8X2BC/image7.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center slide-img ">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="max-w-full max-h-full" />
    </div>
  );
};

export default Slideshow;
