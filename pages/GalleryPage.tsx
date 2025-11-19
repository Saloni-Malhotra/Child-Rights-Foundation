import React, { useState } from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';

const galleryItems = [
  { id: 1, src: img1, category: 'event', title: 'Group Discussion' },
  { id: 2, src: img2, category: 'event', title: 'Foundation Assembly' },
  { id: 3, src: img3, category: 'program', title: 'Learning in Circles' },
  { id: 4, src: img4, category: 'program', title: 'Team Activities' },
  { id: 5, src: img5, category: 'community', title: 'Community Building' },
  { id: 6, src: img6, category: 'program', title: 'Card Activities' },
  { id: 7, src: img7, category: 'program', title: 'Sharing Knowledge' },
  { id: 8, src: img8, category: 'community', title: 'Joyful Moments' },
  { id: 9, src: img9, category: 'event', title: 'Proud Participant' },
  { id: 10, src: img10, category: 'program', title: 'Focused Learning' },
];

const filters = ['all', 'event', 'program', 'community'];

const Lightbox: React.FC<{ image: typeof galleryItems[0] | null; onClose: () => void }> = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
            <div className="relative" onClick={e => e.stopPropagation()}>
                <img src={image.src} alt={image.title} className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl" />
                <p className="text-white text-center mt-4 text-lg">{image.title}</p>
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-white text-text-dark rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg">&times;</button>
            </div>
        </div>
    );
};

const GalleryPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-background">
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      <header className="bg-ice-blue text-center py-20">
        <h1 className="text-5xl font-bold text-text-dark">Media & Gallery</h1>
        <p className="text-xl text-text-light mt-4 max-w-3xl mx-auto">
          A glimpse into our world — capturing moments of joy, learning, and hope.
        </p>
      </header>
      
      <div className="container mx-auto px-6 py-20">
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
            {filters.map(filter => (
                <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`capitalize font-semibold py-2 px-6 rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-white shadow-md' : 'bg-white text-text-light hover:bg-primary/20'}`}
                >
                    {filter}
                </button>
            ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {filteredItems.map(item => (
                <div key={item.id} className="overflow-hidden rounded-xl shadow-lg break-inside-avoid cursor-pointer group relative" onClick={() => setSelectedImage(item)}>
                    <img src={item.src} alt={item.title} className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
