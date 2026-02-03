import { Shield, Users, Lock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExclusivitySection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(35 52% 55%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Comunidade Exclusiva
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-8">
            Exclusividade e{" "}
            <span className="text-olimpo-gold">performance</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, text: "Comunidade focada em resultados" },
              { icon: Lock, text: "Entradas controladas ao longo do ano" },
              { icon: Shield, text: "Ambiente sério e profissional" },
              { icon: Award, text: "Sem excesso de pessoas" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-olimpo-cream/5 backdrop-blur-sm rounded-xl p-6 border border-olimpo-gold/10"
              >
                <item.icon className="w-8 h-8 text-olimpo-gold mx-auto mb-4" />
                <p className="text-olimpo-cream/80 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          
          {/* Impact Phrase */}
          <p className="text-olimpo-cream/70 text-lg mb-8">
            Poucas vagas, mais foco, mais qualidade nas análises e interações.
          </p>
          
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-olimpo-gold/0 via-olimpo-gold/20 to-olimpo-gold/0 h-[1px] top-1/2" />
            <blockquote className="font-display text-2xl md:text-3xl text-olimpo-cream italic relative bg-olimpo-dark px-8 inline-block">
              "Você não está entrando em um grupo, está entrando em um{" "}
              <span className="text-olimpo-gold">ecossistema de evolução</span>."
            </blockquote>
          </div>
          
          {/* CTA Button */}
          <Button variant="gold" size="lg" asChild>
            <a href="https://whop.com/olimpo-cada/olimpo-premium-assinatura-recorrente/" target="_blank" rel="noopener noreferrer">
              Entrar na comunidade no Discord
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
