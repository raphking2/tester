
import React from 'react';
import { Button } from "@/components/ui/button";

type TributeButtonProps = {
  onClick: () => void;
};

const TributeButton: React.FC<TributeButtonProps> = ({ onClick }) => {
  return (
    <div className="text-center my-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <Button 
        onClick={onClick} 
        className="bg-gold hover:bg-gold-dark text-white font-medium py-6 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
      >
        Send a Tribute or Condolence
      </Button>
    </div>
  );
};

export default TributeButton;
