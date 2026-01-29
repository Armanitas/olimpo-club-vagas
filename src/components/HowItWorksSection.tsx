import { CheckCircle, MessageCircle, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CheckCircle,
    title: "Escolha seu plano",
    description: "Selecione o plano que melhor se adequa às suas necessidades",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Entre na comunidade privada no Discord",
    description: "Você recebe acesso imediato a todos os canais, calls e materiais.",
  },
  {
    number: "03",
    icon: Play,
    title: "Comece a acompanhar",
    description: "Assista calls, receba insights e acompanhe operações em tempo real",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Simples e Direto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            Como funciona entrar no <span className="gold-gradient-text">Olimpo</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-[2px] bg-gradient-to-r from-olimpo-gold to-olimpo-gold/20" />
              )}
              
              <div className="relative bg-olimpo-dark-card rounded-2xl p-8 border border-olimpo-gold/10 hover-lift text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-olimpo-gold text-olimpo-dark flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="pt-6">
                  <div className="w-16 h-16 rounded-2xl bg-olimpo-gold/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-olimpo-gold" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-olimpo-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-olimpo-cream/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
