
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    src: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=500&h=350&fit=crop",
    alt: "Sir Cosmas at his graduation",
    caption: "University Graduation",
    year: "1979"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=350&fit=crop",
    alt: "Sir Cosmas with his family",
    caption: "Family Gathering",
    year: "1995"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=350&fit=crop",
    alt: "Sir Cosmas at work",
    caption: "Professional Life",
    year: "2005"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=350&fit=crop",
    alt: "Sir Cosmas with colleagues",
    caption: "Community Service Award",
    year: "2015"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=500&h=350&fit=crop",
    alt: "Sir Cosmas with grandchildren",
    caption: "With Grandchildren",
    year: "2022"
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
