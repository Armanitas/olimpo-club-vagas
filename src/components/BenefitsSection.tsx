import { TrendingUp, BarChart3, MessageSquare, Users, GraduationCap, HelpCircle, FileText, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Call de análise gráfica semanal",
    description: "Toda terça-feira às 20h30",
  },
  {
    icon: BarChart3,
    title: "Call de análise macro quinzenal",
    description: "Duas quartas-feiras do mês às 20h00",
  },
  {
    icon: MessageSquare,
    title: "5 canais de insights diários",
    description: "Leituras de mercado todos os dias",
  },
  {
    icon: Users,
    title: "10 canais de traders",
    description: "Operações compartilhadas diariamente",
  },
  {
    icon: GraduationCap,
    title: "Curso completo de análise gráfica",
    description: "7 horas de conteúdo exclusivo",
  },
  {
    icon: HelpCircle,
    title: "Chats exclusivos",
    description: "Para tirar todas as suas dúvidas",
  },
  {
    icon: FileText,
    title: "Relatórios internacionais",
    description: "Das melhores casas de análise",
  },
  {
    icon: Sparkles,
    title: "Atualizações constantes",
    description: "Materiais novos regularmente",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 section-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 golden-ratio-lines opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Benefícios Exclusivos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-dark mb-6">
            O que você encontra no <span className="gold-gradient-text">Olimpo</span>
          </h2>
          <p className="text-olimpo-dark/60 text-lg max-w-2xl mx-auto">
            Um ecossistema completo para evoluir no mercado cripto com profissionais experientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-olimpo-gold/10 flex items-center justify-center mb-4 group-hover:bg-olimpo-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-olimpo-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-olimpo-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-olimpo-dark/60 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
