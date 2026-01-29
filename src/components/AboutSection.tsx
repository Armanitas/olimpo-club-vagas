import logoOlimpo from "@/assets/logo-olimpo.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 section-dark-alt relative overflow-hidden">
      {/* Decorative Greek Temple */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 800" className="h-full w-full">
          <rect x="20" y="50" width="160" height="20" fill="currentColor" className="text-olimpo-gold" />
          <rect x="30" y="70" width="140" height="10" fill="currentColor" className="text-olimpo-gold" />
          <rect x="40" y="80" width="30" height="680" fill="currentColor" className="text-olimpo-gold" />
          <rect x="90" y="80" width="30" height="680" fill="currentColor" className="text-olimpo-gold" />
          <rect x="140" y="80" width="30" height="680" fill="currentColor" className="text-olimpo-gold" />
          <rect x="30" y="760" width="140" height="10" fill="currentColor" className="text-olimpo-gold" />
          <rect x="20" y="770" width="160" height="20" fill="currentColor" className="text-olimpo-gold" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
              Nossa Filosofia
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
              Sobre o <span className="gold-gradient-text">Olimpo</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-olimpo-cream/80 text-lg mb-6 leading-relaxed">
                O nome <strong className="text-olimpo-gold">Olimpo</strong> não foi escolhido por acaso. 
                Na mitologia grega, o Monte Olimpo era a morada dos deuses — o ponto mais alto, 
                símbolo de excelência, poder e domínio.
              </p>
              <p className="text-olimpo-cream/80 text-lg mb-6 leading-relaxed">
                Assim como os deuses gregos combinavam força com estratégia, nossa comunidade une 
                <strong className="text-olimpo-gold"> análise técnica rigorosa</strong> com 
                <strong className="text-olimpo-gold"> disciplina</strong>, método e constância.
              </p>
              <p className="text-olimpo-cream/80 text-lg leading-relaxed">
                Aqui, não vendemos ilusões. Oferecemos um ambiente onde traders sérios podem 
                evoluir juntos, aprender com profissionais experientes e alcançar seu próprio 
                topo no mercado financeiro.
              </p>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-olimpo-gold/10 to-olimpo-gold/5 rounded-2xl p-8 border border-olimpo-gold/20">
                <div className="text-center">
                  {/* Logo */}
                  <div className="w-40 h-40 rounded-full bg-olimpo-dark border-4 border-olimpo-gold/30 flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    <img 
                      src={logoOlimpo} 
                      alt="Olimpo" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-olimpo-cream mb-3">
                    Rumo ao Topo
                  </h3>
                  <p className="text-olimpo-cream/60">
                    Com método, disciplina e constância.
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center gap-2 mt-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-olimpo-gold"
                        style={{ opacity: 1 - (i - 1) * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-olimpo-gold/20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-olimpo-gold/30 animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
