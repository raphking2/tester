
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import PhotoGallery from './PhotoGallery';

const ExpandableSections: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <Card className="border border-gold-light/50 shadow-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="burial-arrangements">
            <AccordionTrigger className="px-4 py-4 text-xl font-medium hover:text-gold-dark">
              Burial Arrangements
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4 text-lg">
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-medium">Wake Service</h3>
                  <p>Friday, June 12, 2025 | 5:00 PM - 9:00 PM</p>
                  <p>St. Mary's Catholic Church</p>
                  <p>123 Main Street, Enugu, Nigeria</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-medium">Funeral Service</h3>
                  <p>Saturday, June 13, 2025 | 10:00 AM</p>
                  <p>St. Mary's Catholic Church</p>
                  <p>123 Main Street, Enugu, Nigeria</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Interment</h3>
                  <p>Following the Funeral Service</p>
                  <p>Ugwoke Family Estate</p>
                  <p>45 Hillside Road, Nsukka, Nigeria</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="photo-gallery">
            <AccordionTrigger className="px-4 py-4 text-xl font-medium hover:text-gold-dark">
              Photo Gallery
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <PhotoGallery />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </section>
  );
};

export default ExpandableSections;
