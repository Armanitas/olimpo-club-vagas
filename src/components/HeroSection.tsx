import { Button } from "@/components/ui/button";
import heroChart from "@/assets/hero-chart.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden section-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      {/* Fibonacci Spiral - Top Right */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] animate-float opacity-15 pointer-events-none">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Golden ratio rectangles */}
          {/* Main outer rectangle */}
          <rect x="400" y="0" width="400" height="300" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" fill="none" />
          {/* Vertical division */}
          <line x1="647" y1="0" x2="647" y2="300" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          {/* Horizontal division in left part */}
          <line x1="400" y1="153" x2="647" y2="153" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          {/* Small squares */}
          <line x1="400" y1="153" x2="400" y2="300" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          <line x1="491" y1="153" x2="491" y2="300" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          <line x1="400" y1="244" x2="491" y2="244" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          {/* Tiny center squares */}
          <line x1="456" y1="244" x2="456" y2="300" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          <line x1="400" y1="265" x2="456" y2="265" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          <line x1="421" y1="244" x2="421" y2="265" stroke="currentColor" strokeWidth="1" className="text-olimpo-gold" />
          
          {/* Fibonacci spiral - quarter circle arcs */}
          {/* Largest arc - sweeps from bottom-left to center-right */}
          <path
            d="M 400 600 A 300 300 0 0 1 100 300"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Second arc */}
          <path
            d="M 400 300 A 153 153 0 0 1 647 153"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Third arc */}
          <path
            d="M 491 153 A 94 94 0 0 1 400 244"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Fourth arc */}
          <path
            d="M 400 244 A 56 56 0 0 1 456 300"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Fifth arc */}
          <path
            d="M 456 300 A 35 35 0 0 1 491 265"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Sixth arc */}
          <path
            d="M 491 265 A 21 21 0 0 1 470 244"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
          {/* Tiny arc */}
          <path
            d="M 421 244 A 13 13 0 0 1 434 257"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-olimpo-gold"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-olimpo-gold/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-olimpo-cream leading-tight mb-6">
              Uma comunidade de{" "}
              <span className="gold-gradient-text">elite</span>{" "}
              para traders que buscam{" "}
              <span className="gold-gradient-text">performance real</span>
            </h1>
            
            <p className="text-lg md:text-xl text-olimpo-cream/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Análises profissionais, calls ao vivo e um ecossistema completo para evoluir no mercado cripto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl" asChild>
                <a href="#precos">Ver planos e preços</a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="https://whop.com/olimpo-cada/olimpo-premium-assinatura-recorrente/" target="_blank" rel="noopener noreferrer">
                  Entrar na comunidade
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-lg bg-olimpo-gold/10 border border-olimpo-gold/20 max-w-fit">
              <div className="w-2 h-2 rounded-full bg-olimpo-gold animate-pulse" />
              <p className="text-sm text-olimpo-gold font-medium">
                Entradas limitadas e abertas apenas em períodos específicos do ano.
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-delay-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-olimpo-gold/10">
              <img
                src={heroChart}
                alt="Gráfico de performance Olimpo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olimpo-dark/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-olimpo-dark-card p-6 rounded-xl shadow-xl border border-olimpo-gold/20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olimpo-gold/10 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <p className="text-sm text-olimpo-cream/60">Comunidade ativa</p>
                  <p className="text-xl font-bold text-olimpo-cream">+500 traders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-olimpo-dark-card to-transparent" />
    </section>
  );
};

export default HeroSection;
