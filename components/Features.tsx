"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, ChefHat, CalendarDays, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: 'Base de Datos de Alimentos',
    description: 'Añade y gestiona fácilmente alimentos en tu base de datos personal. Accede a información nutricional detallada y personaliza tus entradas.',
    benefits: [
      'Más de 10,000 alimentos precargados',
      'Información nutricional completa',
      'Personalización de ingredientes',
      'Búsqueda inteligente'
    ]
  },
  {
    icon: <ChefHat className="h-12 w-12 text-primary" />,
    title: 'Creación de Recetas',
    description: 'Crea y almacena tus recetas favoritas con información nutricional completa. Calcula automáticamente los valores nutricionales.',
    benefits: [
      'Cálculo automático de nutrientes',
      'Gestión de porciones',
      'Categorización de recetas',
      'Fotos y notas personalizadas'
    ]
  },
  {
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
    title: 'Planificación de Comidas',
    description: 'Planifica tus comidas usando tus recetas y haz seguimiento de tu ingesta nutricional. Organiza tus menús semanales.',
    benefits: [
      'Planificador semanal intuitivo',
      'Balance nutricional automático',
      'Lista de compras generada',
      'Recordatorios personalizables'
    ]
  },
  {
    icon: <FileSpreadsheet className="h-12 w-12 text-primary" />,
    title: 'Informes en Excel',
    description: 'Genera informes nutricionales completos en formato Excel. Analiza tendencias y obtén insights valiosos sobre tus hábitos.',
    benefits: [
      'Informes personalizables',
      'Gráficos detallados',
      'Exportación múltiple',
      'Análisis de tendencias'
    ]
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="py-16 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">CARACTERÍSTICAS</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Todo lo que Necesitas para una Nutrición Efectiva</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas poderosas y fáciles de usar para profesionales y entusiastas de la nutrición
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <CardHeader>
                  <div className="mb-4 relative z-10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Saber más
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