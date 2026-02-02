import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Placeholder for testimonial images - will be replaced with actual images
const testimonialImages: string[] = [];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonialImages.length - 1) : prev - 1
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
        <div className="relative max-w-4xl mx-auto">
          {testimonialImages.length > 0 ? (
            <>
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl border border-olimpo-gold/20 bg-olimpo-dark/50">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img 
                        src={image} 
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300"
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-olimpo-gold w-8' 
                        : 'bg-olimpo-gold/30 hover:bg-olimpo-gold/50'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-olimpo-dark/30 rounded-2xl border border-olimpo-gold/10">
              <p className="text-olimpo-cream/60">
                Carrossel pronto para receber as imagens dos depoimentos.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
