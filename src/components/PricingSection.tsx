import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Calendar, Clock, Star, ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "250",
    period: "/mês",
    icon: Zap,
    highlight: false,
  },
  {
    name: "Trimestral",
    price: "700",
    period: "à vista",
    discount: "7% off",
    icon: Calendar,
    highlight: false,
  },
  {
    name: "Semestral",
    price: "1.200",
    period: "à vista",
    discount: "20% off",
    icon: Clock,
    highlight: false,
  },
  {
    name: "Anual",
    price: "1.500",
    period: "à vista",
    discount: "50% off",
    icon: Star,
    highlight: true,
  },
];

const benefits = [
  "Acesso às calls semanais",
  "Canais de insights diários",
  "Operações dos traders",
  "Curso completo de análise gráfica",
  "Chats exclusivos para dúvidas",
  "Relatórios internacionais",
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(3); // Default to Annual (index 3)
  
  return (
    <section id="precos" className="py-16 sm:py-20 lg:py-24 section-light relative overflow-hidden">
      <div className="absolute inset-0 golden-ratio-lines opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Investimento
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-4 sm:mb-6">
            Escolha seu <span className="gold-gradient-text">plano</span>
          </h2>
          <p className="text-olimpo-cream/60 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Todos os planos incluem acesso completo a toda a estrutura do Olimpo.
          </p>
          
          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 max-w-4xl mx-auto px-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-olimpo-gold flex-shrink-0" />
                <span className="text-olimpo-cream/80 text-xs sm:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-olimpo-gold/10 text-olimpo-cream border-2 border-olimpo-gold shadow-2xl scale-[1.02]"
                    : "bg-olimpo-dark/50 text-olimpo-cream border border-olimpo-gold/20 shadow-xl hover:border-olimpo-gold/40"
                }`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-5 ${
                  isSelected ? "bg-olimpo-gold/20" : "bg-olimpo-gold/10"
                }`}>
                  <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 text-olimpo-gold" />
                </div>
                
                {/* Plan Name */}
                <h3 className="font-display text-base sm:text-xl font-bold mb-2 sm:mb-4">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm">R$</span>
                    <span className="text-2xl sm:text-4xl font-bold font-display">{plan.price}</span>
                    {plan.discount && (
                      <span className="bg-olimpo-gold text-olimpo-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                  <span className="text-olimpo-cream/60 text-xs sm:text-sm">
                    {plan.period}
                  </span>
                </div>
                
                {/* CTA */}
                <Button
                  variant={isSelected ? "gold" : "goldOutline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://whop.com/olimpo-cada/olimpo-premium-assinatura-recorrente/" target="_blank" rel="noopener noreferrer">
                    Assinar
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-olimpo-cream/50 mt-10 text-sm">
          Sem taxas ocultas. Cancele quando quiser.
        </p>
        
        {/* Decision Block - Main CTA */}
        <div className="text-center mt-12 sm:mt-20 pt-10 sm:pt-16 pb-6 sm:pb-8 border-t border-olimpo-gold/20 bg-gradient-to-b from-olimpo-gold/5 to-transparent rounded-2xl sm:rounded-3xl mx-auto max-w-2xl px-4">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-olimpo-cream mb-6 sm:mb-8">
            Pronto para entrar no Olimpo?
          </h3>
          <Button variant="gold" size="xl" className="shadow-lg shadow-olimpo-gold/20 w-full sm:w-auto" asChild>
            <a href="https://whop.com/olimpo-cada/olimpo-premium-assinatura-recorrente/" target="_blank" rel="noopener noreferrer">
              Entrar na comunidade no Discord
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <p className="text-olimpo-gold/80 text-xs sm:text-sm mt-4 sm:mt-6 font-medium">
            Acesso imediato após entrar no Discord.
          </p>
          <p className="text-olimpo-cream/60 text-sm sm:text-base mt-2 sm:mt-3">
            Comece hoje a operar em um ambiente focado em performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
