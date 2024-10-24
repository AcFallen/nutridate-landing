"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Plan de Prueba",
    price: "Gratis",
    description: "Perfecto para probar nuestra plataforma",
    features: [
      "Hasta 5 planificaciones de comidas",
      "Base de datos de alimentos básica",
      "Creación de recetas limitada",
      "Soporte por correo electrónico",
      "Acceso a funciones básicas",
    ],
    buttonText: "Comenzar Gratis",
    popular: false
  },
  {
    name: "Plan Mensual",
    price: "€9.99",
    period: "/mes",
    description: "Ideal para usuarios comprometidos",
    features: [
      "Planificaciones ilimitadas",
      "Base de datos completa de alimentos",
      "Creación ilimitada de recetas",
      "Soporte prioritario",
      "Actualizaciones constantes",
      "Sugerencias personalizadas",
      "Exportación de informes",
    ],
    buttonText: "Comenzar Ahora",
    popular: true
  },
  {
    name: "Plan Anual",
    price: "€99.99",
    period: "/año",
    description: "La mejor opción para ahorro",
    features: [
      "Todo lo incluido en el plan mensual",
      "2 meses gratis",
      "Soporte premium 24/7",
      "Acceso anticipado a nuevas funciones",
      "Consulta nutricional mensual",
      "Plantillas personalizadas",
      "Descuentos exclusivos",
    ],
    buttonText: "Obtener Descuento",
    popular: false
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-16 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Planes Simples y Transparentes</h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </span>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full hover:scale-105 transition-transform" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}