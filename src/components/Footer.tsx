import { Button } from "@/components/ui/button";
import logoOlimpo from "@/assets/logo-olimpo-v2.png";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#mentoria", label: "Mentoria Equilibrium" },
  { href: "#insights", label: "Insights" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre o Olimpo" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-olimpo-dark relative overflow-hidden border-t border-olimpo-gold/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, hsl(35 52% 55%) 1px, transparent 1px),
                            linear-gradient(0deg, hsl(35 52% 55%) 1px, transparent 1px)`,
          backgroundSize: '61.8px 61.8px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoOlimpo} 
                alt="Olimpo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-olimpo-cream/60 text-sm max-w-xs">
              Uma comunidade de elite para traders que buscam performance real no mercado cripto.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-olimpo-cream mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-olimpo-cream/60 hover:text-olimpo-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold text-olimpo-cream mb-4">
              Junte-se a nós
            </h4>
            <p className="text-olimpo-cream/60 text-sm mb-4">
              Entre para a comunidade e comece sua evolução como trader.
            </p>
            <Button variant="gold" asChild>
              <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                Entrar na Comunidade
              </a>
            </Button>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-olimpo-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-olimpo-cream/40 text-sm">
              © {new Date().getFullYear()} Olimpo. Todos os direitos reservados.
            </p>
            <p className="font-display text-olimpo-gold italic text-lg">
              "Rumo ao topo, com método."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
