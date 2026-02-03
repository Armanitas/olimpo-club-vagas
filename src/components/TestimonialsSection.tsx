import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import depoimento4 from "@/assets/depoimento-4.png";
import depoimento5 from "@/assets/depoimento-5.png";
import depoimento6 from "@/assets/depoimento-6.png";

const testimonialImages = [
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4,
  depoimento5,
  depoimento6,
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => 
      prev === testimonialImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Auto-advance timer (15 seconds)
  useEffect(() => {
    if (isModalOpen) return; // Pause when modal is open
    
    const timer = setInterval(() => {
      goToNext();
    }, 15000);

    return () => clearInterval(timer);
  }, [isModalOpen, goToNext]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 section-dark-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(35 52% 55%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Resultados Reais
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-4 sm:mb-6">
            O que nossos <span className="gold-gradient-text">membros</span> dizem
          </h2>
          <p className="text-olimpo-cream/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Depoimentos de traders que transformaram seus resultados com o Olimpo.
          </p>
        </div>
        
        {/* Image Carousel */}
        <div className="relative mx-auto px-4 md:px-16" style={{ maxWidth: '90rem' }}>
          {/* Carousel Container - adapts to image height */}
          <div 
            className="relative overflow-hidden rounded-2xl border border-olimpo-gold/20 bg-olimpo-dark/50 cursor-pointer group"
            onClick={openModal}
          >
            {testimonialImages.map((image, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
            
            {/* Zoom hint overlay */}
            <div className="absolute inset-0 bg-olimpo-dark/0 group-hover:bg-olimpo-dark/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-olimpo-gold text-olimpo-dark px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                <ZoomIn className="w-5 h-5" />
                <span className="hidden sm:inline">Clique para ampliar</span>
                <span className="sm:hidden">Toque para ampliar</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - positioned at the edges */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-olimpo-gold w-8' 
                    : 'bg-olimpo-gold/30 hover:bg-olimpo-gold/50 w-3'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-olimpo-dark/95 flex items-center justify-center overflow-auto"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-olimpo-gold text-olimpo-dark flex items-center justify-center hover:bg-olimpo-cream transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation in modal */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image container - centered and zoomable */}
          <div 
            className="p-4 flex items-center justify-center max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={testimonialImages[currentIndex]} 
              alt={`Depoimento ${currentIndex + 1}`}
              className="max-w-[95vw] md:max-w-5xl max-h-[85vh] h-auto w-auto object-contain rounded-lg"
              style={{ touchAction: 'pinch-zoom' }}
            />
          </div>

          {/* Dots indicator in modal */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-olimpo-gold w-8' 
                    : 'bg-olimpo-gold/30 hover:bg-olimpo-gold/50 w-3'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
