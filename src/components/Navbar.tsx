import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#mentoria", label: "Mentoria Equilibrium" },
  { href: "#insights", label: "Insights" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre o Olimpo" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-olimpo-cream/95 backdrop-blur-md border-b border-olimpo-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-olimpo-gold flex items-center justify-center">
              <span className="font-display text-olimpo-gold text-xl font-bold">Ω</span>
            </div>
            <span className="font-display text-xl font-semibold text-olimpo-dark tracking-wide">
              OLIMPO
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-olimpo-dark/80 hover:text-olimpo-gold transition-colors duration-300 text-sm font-medium tracking-wide"
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
              <X className="w-6 h-6 text-olimpo-dark" />
            ) : (
              <Menu className="w-6 h-6 text-olimpo-dark" />
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
                  className="text-olimpo-dark/80 hover:text-olimpo-gold transition-colors duration-300 text-base font-medium py-2"
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
