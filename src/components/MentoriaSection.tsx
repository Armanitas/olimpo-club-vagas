import { Button } from "@/components/ui/button";
import { Target, Brain, TrendingUp, Compass, ArrowRight } from "lucide-react";

const mentoriaFeatures = [
  {
    icon: Target,
    title: "Acompanhamento direto",
    description: "Suporte personalizado para suas operações",
  },
  {
    icon: Brain,
    title: "Plano de evolução individual",
    description: "Roteiro adaptado ao seu nível",
  },
  {
    icon: TrendingUp,
    title: "Foco em mentalidade e gestão",
    description: "Desenvolvimento completo como trader",
  },
  {
    icon: Compass,
    title: "Da dependência à autonomia",
    description: "Aprenda a operar com independência",
  },
];

const MentoriaSection = () => {
  return (
    <section id="mentoria" className="py-24 section-dark relative overflow-hidden">
      {/* Decorative Greek Column */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
        <svg viewBox="0 0 200 800" className="h-full w-full">
          <rect x="20" y="50" width="160" height="20" fill="currentColor" className="text-olimpo-gold" />
          <rect x="30" y="70" width="140" height="10" fill="currentColor" className="text-olimpo-gold" />
          <rect x="40" y="80" width="120" height="680" fill="currentColor" className="text-olimpo-gold" />
          <rect x="30" y="760" width="140" height="10" fill="currentColor" className="text-olimpo-gold" />
          <rect x="20" y="770" width="160" height="20" fill="currentColor" className="text-olimpo-gold" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {mentoriaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-olimpo-cream/5 backdrop-blur-sm p-6 rounded-xl border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-olimpo-gold/10 flex items-center justify-center mb-4 group-hover:bg-olimpo-gold/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-olimpo-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-olimpo-cream mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-olimpo-cream/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
              Programa Avançado
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
              Mentoria{" "}
              <span className="text-olimpo-gold">Equilibrium</span>
            </h2>
            
            <p className="text-xl text-olimpo-cream/90 mb-6 font-display italic border-l-4 border-olimpo-gold pl-6">
              "Do acompanhamento à autonomia para operar com consistência."
            </p>
            
            <p className="text-olimpo-cream/70 text-lg mb-8 leading-relaxed">
              Programa mais profundo e personalizado para quem quer sair da dependência de sinais e desenvolver leitura e tomada de decisão própria.
            </p>
            
            <Button variant="gold" size="lg" asChild>
              <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                Agendar uma call de aplicação
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
