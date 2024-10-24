"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const images = [
  {
    url: "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=2070",
    alt: "Planificación de comidas saludables"
  },
  {
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070",
    alt: "Ingredientes frescos"
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    alt: "Platos preparados"
  }
];

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, loop: true })
  );

  return (
    <section className="pt-32 pb-16 min-h-screen flex items-center bg-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Revoluciona tu Planificación de Comidas
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Gestiona fácilmente tu base de datos de alimentos, crea recetas, planifica comidas y genera informes nutricionales.
            </p>
            <Button size="lg" className="group">
              Comienza Ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Carousel
              className="w-full max-w-xl mx-auto"
              plugins={[plugin.current]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}