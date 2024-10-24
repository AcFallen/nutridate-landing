import { UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <UtensilsCrossed className="h-6 w-6 text-primary mr-2" />
            <span className="text-xl font-bold">NutriPlan</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contáctanos</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} NutriPlan. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}