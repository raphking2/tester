
import React, { useState } from 'react';
import Header from '@/components/Header';
import Biography from '@/components/Biography';
import TributeButton from '@/components/TributeButton';
import TributeModal from '@/components/TributeModal';
import ExpandableSections from '@/components/ExpandableSections';
import Footer from '@/components/Footer';

const Index = () => {
  const [isTributeModalOpen, setIsTributeModalOpen] = useState(false);

  const openTributeModal = () => {
    setIsTributeModalOpen(true);
  };

  const closeTributeModal = () => {
    setIsTributeModalOpen(false);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Biography />
        <TributeButton onClick={openTributeModal} />
        <ExpandableSections />
        <Footer />
        
        <TributeModal 
          isOpen={isTributeModalOpen} 
          onClose={closeTributeModal} 
        />
      </div>
    </div>
  );
};

export default Index;
