"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    name: 'Sara Jiménez',
    role: 'Nutricionista',
    content: '¡NutriPlan ha optimizado mi flujo de trabajo y ha facilitado enormemente la planificación de comidas para mis clientes! La interfaz intuitiva y las características completas me permiten crear planes nutricionales personalizados en cuestión de minutos.',
    impact: 'Aumento del 40% en la productividad',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5
  },
  {
    name: 'Miguel Torres',
    role: 'Entrenador Personal',
    content: 'La función de informes en Excel es revolucionaria para hacer seguimiento del progreso nutricional de mis clientes. Puedo visualizar fácilmente las tendencias a lo largo del tiempo y ajustar los planes según sea necesario.',
    impact: 'Retención de clientes mejorada en un 60%',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5
  },
  {
    name: 'Elena Castro',
    role: 'Cocinera Aficionada',
    content: 'Me encanta lo fácil que es crear y gestionar mis recetas. ¡NutriPlan ha hecho que comer saludable sea divertido! Puedo experimentar con nuevas ideas y ver instantáneamente cómo afectan a mi ingesta nutricional.',
    impact: '30% de ahorro en compras semanales',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" ref={ref} className="py-16 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">TESTIMONIOS</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Lo que Dicen Nuestros Usuarios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo NutriPlan está transformando la manera en que los profesionales y entusiastas manejan su planificación nutricional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <QuoteIcon size={40} className="text-primary" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                        {testimonial.rating} ★
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground relative">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
                <CardFooter className="border-t bg-muted/50">
                  <div className="w-full pt-4">
                    <p className="text-sm font-medium text-primary">
                      Impacto Medible
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.impact}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Únete a más de <span className="text-primary font-semibold">10,000+ usuarios satisfechos</span> que confían en NutriPlan
          </p>
        </motion.div>
      </div>
    </section>
  );
}