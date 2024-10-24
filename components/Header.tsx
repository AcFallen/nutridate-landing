"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange(() => setHidden(scrollY.get() > scrollY.getPrevious()));
  }, [scrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">NutriPlan</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="relative text-foreground hover:text-primary transition-colors py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="relative text-foreground hover:text-primary transition-colors py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="relative text-foreground hover:text-primary transition-colors py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Precios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')} 
                  className="relative text-foreground hover:text-primary transition-colors py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Equipo
                </button>
              </li>
              <li>
                <Button 
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                >
                  Iniciar Sesión
                </Button>
              </li>
              <li>
                <Button className="hover:scale-105 transition-transform">
                  Registrarse
                </Button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">Características</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">Testimonios</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">Precios</button></li>
            <li><button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Equipo</button></li>
            <li><Button variant="outline" className="w-full">Iniciar Sesión</Button></li>
            <li><Button className="w-full">Registrarse</Button></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}