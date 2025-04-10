
import React from 'react';
import hero3 from '../assets/images/hero3.jpeg';
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4 max-w-3xl mx-auto">
      <div className="mb-8 italic text-gray-600 border-b border-gold-light pb-4 pt-2">
        <p className="text-lg md:text-xl">
          "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die."
        </p>
        <p className="text-sm md:text-base mt-2">— Ecclesiastes 3:1–2</p>
      </div>
      
      {/* <div className="relative inline-block ornament animate-fade-in">
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gold mx-auto shadow-lg">
          <img 
            src={hero3} 
            alt="Sir Cosmas Chibueze Ugwoke" 
            className="w-full h-full object-cover  memorial-image"
          />
        </div>
      </div> */}
      <div className="relative inline-block ornament animate-fade-in">
  {/* Floral Frame Container */}
  <div className="absolute inset-0 overflow-hidden rounded-full z-0">
    {/* Floral decoration elements */}
    <div className="absolute -top-4 -left-4 animate-float">
      <svg className="w-20 h-20 text-green-600" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2C15.87,2 19,5.13 19,9C19,11.38 17.81,13.47 16,14.74V22H8V14.74C6.19,13.47 5,11.38 5,9C5,5.13 8.13,2 12,2M12,4C9.24,4 7,6.24 7,9C7,11.05 8.23,12.81 10,13.58V20H14V13.58C15.77,12.81 17,11.05 17,9C17,6.24 14.76,4 12,4M12,6C13.1,6 14,6.9 14,8C14,9.1 13.1,10 12,10C10.9,10 10,9.1 10,8C10,6.9 10.9,6 12,6Z"/>
      </svg>
    </div>
    
    {/* Repeat similar floral elements around the frame */}
    {[...Array(8)].map((_, i) => (
      <div 
        key={i}
        className={`absolute w-16 h-16 text-rose-500 animate-float`}
        style={{
          transform: `rotate(${i * 45}deg) translate(140px) rotate(-${i * 45}deg)`,
          animationDelay: `${i * 0.2}s`
        }}
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,2C15.87,2 19,5.13 19,9C19,11.38 17.81,13.47 16,14.74V22H8V14.74C6.19,13.47 5,11.38 5,9C5,5.13 8.13,2 12,2M12,4C9.24,4 7,6.24 7,9C7,11.05 8.23,12.81 10,13.58V20H14V13.58C15.77,12.81 17,11.05 17,9C17,6.24 14.76,4 12,4M14.5,12.5L16,11L14.5,9.5L13,11L14.5,12.5M9.5,9.5L8,11L9.5,12.5L11,11L9.5,9.5Z"/>
        </svg>
      </div>
    ))}
  </div>

  {/* Main Image Container */}
  <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gold mx-auto shadow-lg z-10 bg-white">
    <img 
      src={hero3} 
      alt="Sir Cosmas Chibueze Ugwoke" 
      className="w-full h-full object-cover object-top memorial-image"
    />
  </div>
</div>
      
      <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-wide">Sir Ede Cosmas Chibueze</h1>
      <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wider">1963 — 2025</p>
    </header>
  );
};

export default Header;
