import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonialImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="depoimentos" className="py-24 section-dark-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(35 52% 55%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            O que nossos <span className="gold-gradient-text">membros</span> dizem
          </h2>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Depoimentos de traders que transformaram seus resultados com o Olimpo.
          </p>
        </div>
        
        {/* Image Carousel */}
        <div className="relative max-w-6xl mx-auto px-16">
          {/* Carousel Container - adapts to image height */}
          <div className="relative overflow-hidden rounded-2xl border border-olimpo-gold/20 bg-olimpo-dark/50">
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
                  style={{ transform: 'scale(1.12)', transformOrigin: 'center' }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - positioned at the edges */}
          <button
            onClick={goToPrevious}
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
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
    </section>
  );
};

export default TestimonialsSection;
