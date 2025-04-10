
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import hero3 from '../assets/images/hero3.jpeg';
import EBERE1 from '../assets/images/EBERE1.jpg';

import EBERE3 from '../assets/images/EBERE3.jpg';

import EBERE5 from '../assets/images/EBERE5.jpg';

import EBERE7 from '../assets/images/EBERE7.jpg';
import EBERE8 from '../assets/images/EBERE8.jpg';
import EBERE9 from '../assets/images/EBERE9.jpg';
import EBERE10 from '../assets/images/EBERE10.jpg';
import EBERE11 from '../assets/images/EBERE11.jpg';
import EBERE12 from '../assets/images/EBERE12.jpg';
import EBERE13 from '../assets/images/EBERE13.jpg';
import EBERE14 from '../assets/images/EBERE14.jpg';
import EBERE15 from '../assets/images/EBERE15.jpg';
import EBERE16 from '../assets/images/EBERE16.jpg';
import EBERE17 from '../assets/images/EBERE17.jpg';

import EBERE20 from '../assets/images/EBERE20.jpg';

import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';


type Photo = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  year: string;
};



const photos: Photo[] = [
  {
    id: 1,
    src: EBERE1,
    alt: "Sir Cosmas at his graduation",
    caption: "",
    year: ""
  },
  {
    id: 2,
    src: hero3,
    alt: "Sir Cosmas with his family",
    caption: "",
    year: ""
  },
  {
    id: 3,
    src: EBERE10,
    alt: "Sir Cosmas at work",
    caption: "",
    year: ""
  },
  {
    id: 4,
    src: EBERE11,
    alt: "Sir Cosmas with colleagues",
    caption: "",
    year: ""
  },
  {
    id: 5,
    src: EBERE12,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 6,
    src: EBERE13,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 7,
    src: EBERE14,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 8,
    src: EBERE15,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 9,
    src: EBERE16,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 10,
    src: EBERE17,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 11,
    src: ,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 12,
    src: ,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 13,
    src: ,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 14,
    src: EBERE3,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 15,
    src: ,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 16,
    src: EBERE5,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 17,
    src: ,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 18,
    src: EBERE7,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 19,
    src: EBERE8,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 20,
    src: EBERE9,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 21,
    src: EBERE20,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  
  {
    id: 22,
    src: pic2,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  },
  {
    id: 23,
    src: pic3,
    alt: "Sir Cosmas with grandchildren",
    caption: "",
    year: ""
  }

];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="cursor-pointer group overflow-hidden rounded-lg border border-gold-light/30 transition-all duration-300 hover:shadow-lg"
            onClick={() => openPhotoModal(photo)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-medium text-lg">{photo.caption}</h3>
              <p className="text-gray-600">{photo.year}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={closePhotoModal}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedPhoto?.caption}</DialogTitle>
            <DialogDescription>{selectedPhoto?.year}</DialogDescription>
          </DialogHeader>
          <div className="overflow-hidden rounded-lg">
            {selectedPhoto && (
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
