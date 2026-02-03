import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import canalDeInsights from "@/assets/canal-de-insights.png";
import insightExemplo2 from "@/assets/insight-exemplo-2.png";
import insightExemplo3 from "@/assets/insight-exemplo-3.png";

// Array de imagens do carrossel - adicione mais imagens aqui
const insightImages = [
  { src: canalDeInsights, alt: "Canal de Insights do Discord - Exemplo 1" },
  { src: insightExemplo2, alt: "Canal de Insights do Discord - Análise Macro" },
  { src: insightExemplo3, alt: "Canal de Insights do Discord - BTC LTF Update" },
];

const InsightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % insightImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + insightImages.length) % insightImages.length);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="insights" className="py-24 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-olimpo-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-olimpo-gold rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
              Insights em Tempo Real
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
              Insights diários e operações em{" "}
              <span className="text-olimpo-gold">tempo real</span>
            </h2>
            <p className="text-olimpo-cream/70 text-lg mb-4 leading-relaxed">
              Todos os dias você recebe análises, ideias de trade e leituras de mercado de diferentes especialistas. 
              Um fluxo contínuo de informações com pontos claros de entrada, saída e invalidação.
            </p>
            
            <p className="text-olimpo-gold font-medium text-base mb-8 italic border-l-2 border-olimpo-gold pl-4">
              "Você nunca opera sozinho: o mercado é acompanhado em conjunto todos os dias."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://whop.com/olimpo-cada/olimpo-premium-assinatura-recorrente/" target="_blank" rel="noopener noreferrer">
                  Entrar na comunidade no Discord
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Visual - Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Images */}
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {insightImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-olimpo-dark/50 backdrop-blur-sm border border-olimpo-gold/20 rounded-2xl overflow-hidden group cursor-pointer">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300 z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {insightImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-olimpo-gold w-6" 
                      : "bg-olimpo-gold/30 hover:bg-olimpo-gold/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Floating Element - Ao vivo */}
            <div className="absolute -top-4 -right-4 bg-olimpo-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float z-20">
              <Zap className="w-4 h-4 inline mr-1" />
              Ao vivo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
