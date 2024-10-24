"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo funciona el período de prueba gratuito?",
    answer: "El período de prueba gratuito te da acceso a todas las funcionalidades básicas de NutriPlan durante 14 días. No requiere tarjeta de crédito y puedes cancelar en cualquier momento."
  },
  {
    question: "¿Puedo exportar mis planes de comidas e informes?",
    answer: "Sí, todos los planes pueden exportarse en varios formatos, incluyendo PDF y Excel. Los informes nutricionales detallados están disponibles para su descarga en el plan mensual y anual."
  },
  {
    question: "¿La base de datos de alimentos incluye productos locales?",
    answer: "Sí, nuestra base de datos se actualiza regularmente con productos locales e internacionales. Además, puedes añadir tus propios alimentos personalizados con información nutricional detallada."
  },
  {
    question: "¿Puedo usar NutriPlan en mi móvil?",
    answer: "Sí, NutriPlan es completamente responsive y funciona en cualquier dispositivo. También estamos desarrollando aplicaciones nativas para iOS y Android."
  },
  {
    question: "¿Ofrecen soporte en español?",
    answer: "Sí, nuestro equipo de soporte está disponible en español 24/7 a través de chat en vivo, correo electrónico y llamadas telefónicas."
  },
  {
    question: "¿Cómo puedo cancelar mi suscripción?",
    answer: "Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay períodos de permanencia ni penalizaciones por cancelación."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="faq" ref={ref} className="py-16 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre NutriPlan
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}