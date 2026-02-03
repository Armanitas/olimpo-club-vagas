import { TrendingUp, BarChart3, MessageSquare, Users, GraduationCap, HelpCircle, FileText, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Call de análise gráfica semanal",
    description: "Toda terça-feira às 20h30 com pontos claros de entrada, saída e invalidação",
  },
  {
    icon: BarChart3,
    title: "Call de análise macro quinzenal",
    description: "Duas quartas-feiras do mês às 20h00 para você saber exatamente o que observar em cada cenário",
  },
  {
    icon: MessageSquare,
    title: "5 canais de insights diários",
    description: "Leituras de mercado prontas para aplicação prática no mesmo dia",
  },
  {
    icon: Users,
    title: "10 canais de traders",
    description: "Operações compartilhadas diariamente com contexto e gestão de risco",
  },
  {
    icon: GraduationCap,
    title: "Curso completo de análise gráfica",
    description: "7 horas de conteúdo prático para você aplicar imediatamente",
  },
  {
    icon: HelpCircle,
    title: "Chats exclusivos",
    description: "Tire dúvidas e receba feedback em tempo real dos especialistas",
  },
  {
    icon: FileText,
    title: "Relatórios internacionais",
    description: "Das melhores casas de análise traduzidos e comentados",
  },
  {
    icon: Sparkles,
    title: "Atualizações constantes",
    description: "Novos materiais toda semana para você estar sempre à frente",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 section-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 golden-ratio-lines opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Benefícios Exclusivos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            O que você encontra no <span className="gold-gradient-text">Olimpo</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-olimpo-gold/30 bg-olimpo-gold/5 mb-4">
            <span className="text-sm text-olimpo-cream/80 font-medium">Para quem quer operar acompanhado todos os dias</span>
          </div>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Um ecossistema completo para evoluir no mercado cripto com profissionais experientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-olimpo-dark/50 backdrop-blur-sm p-6 rounded-xl border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-olimpo-gold/10 flex items-center justify-center mb-4 group-hover:bg-olimpo-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-olimpo-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-olimpo-cream mb-2">
                {benefit.title}
              </h3>
              <p className="text-olimpo-cream/60 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
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

export default BenefitsSection;
