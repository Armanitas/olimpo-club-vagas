import { Star, TrendingUp, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    role: "Trader há 2 anos",
    content: "Desde que entrei no Olimpo, minha consistência mudou completamente. As calls são pontuais e a comunidade é muito séria.",
    result: "+47% em 3 meses",
    avatar: "LM",
  },
  {
    name: "Rafael S.",
    role: "Investidor",
    content: "O nível das análises é impressionante. Finalmente encontrei um lugar onde posso evoluir de verdade no mercado cripto.",
    result: "ROI de 156%",
    avatar: "RS",
  },
  {
    name: "Carolina P.",
    role: "Day Trader",
    content: "A mentoria Equilibrium transformou minha forma de operar. Saí da dependência de sinais e hoje tenho autonomia.",
    result: "Consistência mensal",
    avatar: "CP",
  },
  {
    name: "Bruno F.",
    role: "Swing Trader",
    content: "Os relatórios e insights diários são ouro puro. Vale cada centavo do investimento.",
    result: "+89% no ano",
    avatar: "BF",
  },
];

const results = [
  { label: "Média de retorno dos membros", value: "+67%", period: "nos últimos 12 meses" },
  { label: "Taxa de satisfação", value: "98%", period: "dos membros ativos" },
  { label: "Membros consistentes", value: "73%", period: "lucro recorrente" },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 section-dark-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(35 52% 55%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            O que nossos <span className="gold-gradient-text">membros</span> dizem
          </h2>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Depoimentos de traders que transformaram seus resultados com o Olimpo.
          </p>
        </div>
        
        {/* Results Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-olimpo-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-olimpo-gold/10 text-center"
            >
              <TrendingUp className="w-8 h-8 text-olimpo-gold mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                {result.value}
              </p>
              <p className="text-olimpo-cream font-medium mb-1">{result.label}</p>
              <p className="text-olimpo-cream/50 text-sm">{result.period}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-olimpo-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-olimpo-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-olimpo-gold font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold text-olimpo-cream">
                    {testimonial.name}
                  </h4>
                  <p className="text-olimpo-cream/50 text-sm">{testimonial.role}</p>
                </div>
                <Quote className="w-8 h-8 text-olimpo-gold/30" />
              </div>
              
              <p className="text-olimpo-cream/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-olimpo-gold text-olimpo-gold" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olimpo-gold/10 text-olimpo-gold text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
