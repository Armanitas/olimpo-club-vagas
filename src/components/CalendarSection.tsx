import { Calendar, Clock, Video } from "lucide-react";

const calls = [
  {
    day: "Terça-feira",
    time: "20h30",
    title: "Call de Análise Gráfica",
    description: "Leitura técnica semanal dos principais ativos",
    color: "bg-olimpo-gold",
  },
  {
    day: "Quartas selecionadas",
    time: "20h00",
    title: "Call de Análise Macro",
    description: "Visão macroeconômica e cenários globais",
    color: "bg-olimpo-cream",
  },
];

const CalendarSection = () => {
  return (
    <section className="py-24 section-light relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Encontros ao Vivo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            Calendário de <span className="gold-gradient-text">Calls</span>
          </h2>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Encontros ao vivo para leitura de mercado, cenários e oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {calls.map((call, index) => (
            <div
              key={index}
              className="relative bg-olimpo-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-olimpo-gold/10 hover-lift group"
            >
              {/* Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${call.color} rounded-t-2xl`} />
              
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl ${call.color === "bg-olimpo-gold" ? "bg-olimpo-gold/10" : "bg-olimpo-cream/10"} flex items-center justify-center flex-shrink-0`}>
                  <Video className={`w-8 h-8 ${call.color === "bg-olimpo-gold" ? "text-olimpo-gold" : "text-olimpo-cream"}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-olimpo-gold" />
                    <span className="text-sm font-medium text-olimpo-cream/70">{call.day}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-olimpo-gold" />
                    <span className="text-sm font-medium text-olimpo-cream/70">{call.time}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-olimpo-cream mb-2">
                    {call.title}
                  </h3>
                  <p className="text-olimpo-cream/60 text-sm">
                    {call.description}
                  </p>
                </div>
              </div>
              
              {/* Live Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-400">AO VIVO</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Text */}
        <p className="text-center text-olimpo-cream/70 text-lg max-w-3xl mx-auto mt-10 leading-relaxed">
          Toda semana você tem encontros ao vivo para ajustar sua leitura de mercado e alinhar os próximos movimentos.
        </p>
      </div>
    </section>
  );
};

export default CalendarSection;
