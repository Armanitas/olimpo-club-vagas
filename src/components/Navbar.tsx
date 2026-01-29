import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoOlimpo from "@/assets/logo-olimpo-v2.png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#insights", label: "Insights" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#precos", label: "Preços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#sobre", label: "Sobre" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-olimpo-dark/95 backdrop-blur-md border-b border-olimpo-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src={logoOlimpo} 
              alt="Olimpo" 
              className="h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-olimpo-cream/70 hover:text-olimpo-gold transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="gold"
              size="default"
              asChild
            >
              <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                Entrar na Comunidade
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-olimpo-cream" />
            ) : (
              <Menu className="w-6 h-6 text-olimpo-cream" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-olimpo-gold/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-olimpo-cream/70 hover:text-olimpo-gold transition-colors duration-300 text-base font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="gold"
                size="lg"
                className="mt-4"
                asChild
              >
                <a href="https://discord.gg/WnWXEqHD" target="_blank" rel="noopener noreferrer">
                  Entrar na Comunidade
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
