import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star } from "lucide-react";

const features = [
  "Acesso às calls semanais",
  "Canais de insights diários",
  "Operações dos traders",
  "Curso completo de análise gráfica",
  "Chats exclusivos para dúvidas",
  "Relatórios internacionais",
];

const plans = [
  {
    name: "Mensal",
    price: "97",
    period: "/mês",
    description: "Ideal para experimentar",
    icon: Zap,
    highlight: false,
  },
  {
    name: "Semestral",
    price: "77",
    period: "/mês",
    fullPrice: "462",
    description: "Mais popular",
    icon: Crown,
    highlight: true,
    badge: "ECONOMIA DE 20%",
  },
  {
    name: "Anual",
    price: "57",
    period: "/mês",
    fullPrice: "684",
    description: "Melhor custo-benefício",
    icon: Star,
    highlight: false,
    badge: "ECONOMIA DE 40%",
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 section-light relative overflow-hidden">
      <div className="absolute inset-0 golden-ratio-lines opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            Escolha seu <span className="gold-gradient-text">plano</span>
          </h2>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Todos os planos incluem acesso completo a toda a estrutura do Olimpo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 hover-lift ${
                plan.highlight
                  ? "bg-olimpo-gold/10 text-olimpo-cream border-2 border-olimpo-gold shadow-2xl scale-105 z-10"
                  : "bg-olimpo-dark/50 text-olimpo-cream border border-olimpo-gold/20 shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-olimpo-gold text-olimpo-dark px-4 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlight ? "bg-olimpo-gold/20" : "bg-olimpo-gold/10"
              }`}>
                <plan.icon className="w-7 h-7 text-olimpo-gold" />
              </div>
              
              {/* Plan Name */}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-olimpo-cream/60 text-sm mb-6">
                {plan.description}
              </p>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-sm">R$</span>
                <span className="text-5xl font-bold font-display">{plan.price}</span>
                <span className="text-olimpo-cream/60 text-sm">
                  {plan.period}
                </span>
                {plan.fullPrice && (
                  <p className="text-olimpo-cream/50 text-sm mt-1">
                    ou R${plan.fullPrice} à vista
                  </p>
                )}
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 text-olimpo-gold" />
                    <span className="text-olimpo-cream/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button
                variant={plan.highlight ? "gold" : "goldOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                  Entrar na comunidade
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-olimpo-cream/50 mt-10 text-sm">
          Sem taxas ocultas. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
