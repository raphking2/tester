
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
                  <p>Thursday, May 8, 2025 | 7:30 PM - 9:00 PM</p>
                  <p>19b Amaogwu street</p>
                  <p>Ibagwa-Aka, Igbo-Eze south LGA. Enugu state</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-medium">Funeral Service</h3>
                  <p>Friday, May 9, 2025 7:30 AM| Body leaves Bishop Shanahan Hospital Nsukka</p>
                  <p>7:45 AM| Brief stop at his Nsukka residence. No 7 Liberty street Isiuja Nsukka</p>
                  <p>8:30 AM| Lying in state at his compound 19b Amaogwu Street Ibagwa-Aka</p>
                  <p>10:00 AM| Church service at st Mary's Catholic Church Ibagwa-Aka</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Internment</h3>
                  <p>Following the Funeral Service</p>
                  <p>Internment follows after at Township school 1 field Ibagwa-Aka</p>
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
