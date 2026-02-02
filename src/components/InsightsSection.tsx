import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import canalDeInsights from "@/assets/canal-de-insights.png";

const InsightsSection = () => {
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
                <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                  Entrar na comunidade no Discord
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Visual - Image */}
          <div className="relative">
            {/* Main Card with Image */}
            <div className="bg-olimpo-dark/50 backdrop-blur-sm border border-olimpo-gold/20 rounded-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src={canalDeInsights} 
                alt="Canal de Insights do Discord" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Element - Ao vivo */}
            <div className="absolute -top-4 -right-4 bg-olimpo-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
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
