import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Zap, ArrowRight } from "lucide-react";

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-olimpo-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-olimpo-gold rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
          
          {/* Visual Mockup */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-olimpo-dark/50 backdrop-blur-sm border border-olimpo-gold/20 rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-olimpo-gold/10">
                <div className="w-10 h-10 rounded-full bg-olimpo-gold/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-olimpo-gold" />
                </div>
                <div>
                  <p className="text-olimpo-cream font-semibold">Canal de Insights</p>
                  <p className="text-olimpo-cream/50 text-sm">5 traders ativos agora</p>
                </div>
                <div className="ml-auto flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-olimpo-gold/30 border-2 border-olimpo-dark" />
                  ))}
                </div>
              </div>
              
              {/* Messages */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-olimpo-gold/20 flex-shrink-0" />
                  <div className="bg-olimpo-cream/5 rounded-lg p-3 flex-1">
                    <p className="text-olimpo-cream/90 text-sm">
                      BTC testando resistência em 68k. Olho no volume para confirmação do rompimento 📈
                    </p>
                    <p className="text-olimpo-cream/40 text-xs mt-2">há 5 min</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-olimpo-gold/30 flex-shrink-0" />
                  <div className="bg-olimpo-cream/5 rounded-lg p-3 flex-1">
                    <p className="text-olimpo-cream/90 text-sm">
                      ETH com divergência altista no 4h. Entrada montada com stop curto.
                    </p>
                    <p className="text-olimpo-cream/40 text-xs mt-2">há 12 min</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-olimpo-gold/40 flex-shrink-0" />
                  <div className="bg-olimpo-cream/5 rounded-lg p-3 flex-1">
                    <p className="text-olimpo-cream/90 text-sm">
                      Macro: dados de inflação dos EUA saindo amanhã 14h30. Mercado pode reagir forte.
                    </p>
                    <p className="text-olimpo-cream/40 text-xs mt-2">há 28 min</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-olimpo-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
              <Zap className="w-4 h-4 inline mr-1" />
              Ao vivo
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-olimpo-cream text-olimpo-dark px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">+12.4%</span>
                <span className="text-sm text-olimpo-dark/60">hoje</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
