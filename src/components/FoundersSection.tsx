import { useState } from "react";
import { Linkedin, Instagram, X } from "lucide-react";
import logoOlimpoEquilibrium from "@/assets/logo-equilibrium-olimpo.png";
import pedrocaImage from "@/assets/pedroca.jpeg";
import maxImage from "@/assets/max.png";
import enzoImage from "@/assets/enzo.png";
import richardImage from "@/assets/richard.jpg";

const founders = [
  {
    name: "Max",
    bio: "Fundador do Olimpo. Vive o mundo cripto desde 2019.",
    image: maxImage,
    imageStyle: { transform: 'scale(1.1)' },
    social: {
      linkedin: "https://www.linkedin.com/in/max-schiller-876b5a206/",
      instagram: "https://www.instagram.com/maxjschiller?igsh=YzBxMTYxM3N5YXR2",
    },
  },
  {
    name: "Enzo",
    bio: "Médico, Criador de Conteúdo em Cripto, Head de Operações P2P, Soluções de Liquidez para Empresas, analista técnico e macroeconômico, Fundador do Olimpo e sempre um passo a frente dos mercados.",
    image: enzoImage,
    imageStyle: {},
    social: {
      linkedin: "https://www.linkedin.com/in/enzo-cobucci-1b3a161b0/",
      instagram: "https://www.instagram.com/enzocobuccii?igsh=NmJ3eXZpajVqemlw",
    },
  },
  {
    name: "Richard",
    bio: "Engenheiro Mecânico, Trader de OrderFlow & Supply/Demand há 5 anos e analista oficial do Olimpo. Mentor do Equilibrium Club.",
    image: richardImage,
    imageStyle: {},
    social: {
      linkedin: "https://www.linkedin.com/in/richard-stefan-priebsch/",
      instagram: "https://www.instagram.com/richard__stfn?igsh=dGFnamRqeWtyZmZm",
    },
  },
  {
    name: "Pedroca",
    bio: "Economista | Trader | Analista macroeconômico e geopolítico. Ex-analista do banco UBS Swiss. Mentor do Equilibrium Club.",
    image: pedrocaImage,
    imageStyle: {},
    social: {
      linkedin: "https://www.linkedin.com/in/pedrocarlota/",
      instagram: "https://www.instagram.com/phcarlota?igsh=MW0zeDNxNGtsZnM5&utm_source=qr",
    },
  },
];

const FoundersSection = () => {
  const [selectedFounder, setSelectedFounder] = useState<typeof founders[0] | null>(null);

  return (
    <section id="founders" className="py-16 sm:py-20 lg:py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-10 sm:mb-16">
          <img 
            src={logoOlimpoEquilibrium} 
            alt="Olimpo x Equilibrium" 
            className="h-28 sm:h-40 md:h-48 mx-auto mb-6 sm:mb-8 object-contain rounded-2xl"
          />
          <span className="inline-block text-olimpo-gold font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-4 sm:mb-6">
            Conheça a <span className="gold-gradient-text">Equipe</span>
          </h2>
          <p className="text-olimpo-cream/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Os profissionais por trás do ecossistema Olimpo e Equilibrium.
          </p>
        </div>
        
        {/* Founders Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              onClick={() => setSelectedFounder(founder)}
              className="group relative bg-olimpo-dark-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300 hover-lift text-center flex flex-col h-full cursor-pointer"
            >
              {/* Photo Placeholder */}
              <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-6 rounded-full bg-olimpo-dark border-2 border-olimpo-gold/30 overflow-hidden flex items-center justify-center group-hover:border-olimpo-gold transition-colors duration-300">
                {founder.image ? (
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    style={founder.imageStyle}
                  />
                ) : (
                  <span className="text-2xl sm:text-4xl font-bold text-olimpo-gold/50 group-hover:text-olimpo-gold transition-colors duration-300">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              
              {/* Info */}
              <h3 className="font-display text-base sm:text-xl font-bold text-olimpo-cream mb-2 sm:mb-4">
                {founder.name}
              </h3>
              <p className="text-olimpo-cream/60 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                {founder.bio}
              </p>
              
              {/* Tap indicator on mobile */}
              <span className="text-olimpo-gold/50 text-[10px] mt-2 sm:hidden">Toque para ver mais</span>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6" onClick={(e) => e.stopPropagation()}>
                <a 
                  href={founder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href={founder.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full bio */}
      {selectedFounder && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedFounder(null)}
        >
          <div 
            className="bg-olimpo-dark border border-olimpo-gold/30 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-olimpo-dark/80 border border-olimpo-gold/30 flex items-center justify-center text-olimpo-gold hover:bg-olimpo-gold hover:text-olimpo-dark transition-all duration-300"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-olimpo-dark border-2 border-olimpo-gold/30 overflow-hidden">
                {selectedFounder.image && (
                  <img 
                    src={selectedFounder.image} 
                    alt={selectedFounder.name}
                    className="w-full h-full object-cover"
                    style={selectedFounder.imageStyle}
                  />
                )}
              </div>
              
              <h3 className="font-display text-xl font-bold text-olimpo-cream mb-4">
                {selectedFounder.name}
              </h3>
              <p className="text-olimpo-cream/70 text-sm leading-relaxed mb-6">
                {selectedFounder.bio}
              </p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={selectedFounder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={selectedFounder.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoundersSection;
