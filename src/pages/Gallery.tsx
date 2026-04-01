import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { GALLERY_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-offwhite">
      <SEO title="Γκαλερί" description="Δείτε φωτογραφίες από την Ταβέρνα Ο Γιώργος. Ο χώρος μας, τα πιάτα μας και η ατμόσφαιρα της αυθεντικής ελληνικής φιλοξενίας." />

      {/* Hero Section */}
      <section className="relative py-24 bg-brand-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/gallery-hero/1920/1080" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-beige font-bold uppercase tracking-widest text-sm">Εικόνες & Στιγμές</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4">Γκαλερί</h1>
            <p className="text-brand-beige/80 text-xl max-w-2xl mx-auto mt-6 italic">
              "Μια ματιά στο χώρο μας και τις γεύσεις που δημιουργούμε καθημερινά."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all"
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-brand-dark/80 to-transparent">
                  <p className="text-white font-medium text-sm">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={GALLERY_IMAGES[selectedImage].url} 
                alt={GALLERY_IMAGES[selectedImage].alt} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/80 to-transparent">
                <p className="text-white text-xl font-serif font-bold">{GALLERY_IMAGES[selectedImage].alt}</p>
              </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4">
              <button 
                className="text-white/40 hover:text-white transition-colors px-4 py-2 bg-white/5 rounded-full text-sm font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
                }}
              >
                Προηγούμενη
              </button>
              <span className="text-white/60 text-sm font-bold tracking-widest">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </span>
              <button 
                className="text-white/40 hover:text-white transition-colors px-4 py-2 bg-white/5 rounded-full text-sm font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
                }}
              >
                Επόμενη
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Footer CTA */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="bg-brand-olive rounded-3xl p-12 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <Camera size={200} className="absolute -bottom-10 -right-10 text-white rotate-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white relative z-10">Θέλετε να δείτε τις γεύσεις μας από κοντά;</h2>
            <p className="text-brand-beige/80 text-lg max-w-2xl mx-auto italic relative z-10">
              "Επισκεφθείτε μας και απολαύστε μια αυθεντική εμπειρία ελληνικής ταβέρνας."
            </p>
            <div className="pt-4 relative z-10">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-10 py-4 bg-brand-burgundy text-white rounded-full font-bold hover:bg-brand-burgundy/90 transition-all shadow-lg"
              >
                Βρείτε μας στο χάρτη
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
