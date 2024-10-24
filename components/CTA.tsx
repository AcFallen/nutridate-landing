"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-primary text-primary-foreground bg-pattern">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para Transformar tu Planificación de Comidas?</h2>
          <p className="text-lg md:text-xl mb-8">Únete a NutriPlan hoy y toma el control de tu viaje nutricional.</p>
          <Button size="lg" variant="secondary">
            Comienza tu Prueba Gratuita
          </Button>
        </motion.div>
      </div>
    </section>
  );
}