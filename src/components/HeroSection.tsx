import { Button } from "@/components/ui/button";
import heroChart from "@/assets/hero-chart.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden section-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-32 h-32 border border-olimpo-gold/20 rounded-full animate-float" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-olimpo-gold/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-olimpo-gold/30 bg-olimpo-gold/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-olimpo-gold animate-pulse-gold" />
              <span className="text-sm text-olimpo-cream/70 font-medium">Comunidade de Elite</span>
            </div>
            
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
                <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
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
