
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4 max-w-3xl mx-auto">
      <div className="mb-8 italic text-gray-600 border-b border-gold-light pb-4 pt-2">
        <p className="text-lg md:text-xl">
          "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die."
        </p>
        <p className="text-sm md:text-base mt-2">— Ecclesiastes 3:1–2</p>
      </div>
      
      <div className="relative inline-block ornament animate-fade-in">
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gold mx-auto shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1553551234-a4971f8fb85e?fit=crop&w=800&h=800" 
            alt="Sir Cosmas Chibueze Ugwoke" 
            className="w-full h-full object-cover memorial-image"
          />
        </div>
      </div>
      
      <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-wide">Sir Cosmas Chibueze Ugwoke</h1>
      <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wider">1955 — 2025</p>
    </header>
  );
};

export default Header;
