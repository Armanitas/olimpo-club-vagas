import { Linkedin, Twitter, Instagram } from "lucide-react";
import logoOlimpoEquilibrium from "@/assets/logo-equilibrium-olimpo.png";
import pedrocaImage from "@/assets/pedroca.jpeg";

const founders = [
  {
    name: "Max",
    bio: "Fundador do Olimpo. Vive o mundo cripto desde 2019.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Enzo",
    bio: "Formado em medicina. Sempre um passo a frente do fed.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Richard",
    bio: "Trader de OrderFlow & Supply/Demand e analista oficial do Olimpo. Mentor do Equilibrium Club.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Pedrocas",
    bio: "Analista macroeconomico e geopolitico, com passagem no maior banco Suiço de investimentos do mundo. Também mentor do Equilibrium Club.",
    image: pedrocaImage,
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-16">
          <img 
            src={logoOlimpoEquilibrium} 
            alt="Olimpo x Equilibrium" 
            className="h-40 md:h-48 mx-auto mb-8 object-contain rounded-2xl"
          />
          <span className="inline-block text-olimpo-gold font-medium text-sm tracking-widest uppercase mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-olimpo-cream mb-6">
            Conheça a <span className="gold-gradient-text">Equipe</span>
          </h2>
          <p className="text-olimpo-cream/60 text-lg max-w-2xl mx-auto">
            Os profissionais por trás do ecossistema Olimpo e Equilibrium.
          </p>
        </div>
        
        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative bg-olimpo-dark-card/50 backdrop-blur-sm rounded-2xl p-6 border border-olimpo-gold/10 hover:border-olimpo-gold/30 transition-all duration-300 hover-lift text-center"
            >
              {/* Photo Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-olimpo-dark border-2 border-olimpo-gold/30 overflow-hidden flex items-center justify-center group-hover:border-olimpo-gold transition-colors duration-300">
                {founder.image ? (
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-olimpo-gold/50 group-hover:text-olimpo-gold transition-colors duration-300">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              
              {/* Info */}
              <h3 className="font-display text-xl font-bold text-olimpo-cream mb-4">
                {founder.name}
              </h3>
              <p className="text-olimpo-cream/60 text-sm mb-6 leading-relaxed">
                {founder.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a 
                  href={founder.social.linkedin}
                  className="w-10 h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={founder.social.twitter}
                  className="w-10 h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={founder.social.instagram}
                  className="w-10 h-10 rounded-full bg-olimpo-gold/10 flex items-center justify-center text-olimpo-cream/50 hover:text-olimpo-gold hover:bg-olimpo-gold/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
