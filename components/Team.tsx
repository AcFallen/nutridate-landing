"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Linkedin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const teamMembers = [
  {
    name: "Rober Solis Cornejo",
    role: "Licenciado en Nutrición Humana",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    description: "Especialista en nutrición clínica y deportiva, con amplia experiencia en planificación de dietas personalizadas.",
    email: "rober.solis@nutriplan.com",
    linkedin: "https://linkedin.com/in/rober-solis",
    cv: "/cv-rober-solis.pdf"
  },
  {
    name: "Ludesmi Vilca Alarcon",
    role: "Licenciada en Nutrición Humana",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    description: "Experta en nutrición y dietética, especializada en trastornos alimenticios y educación nutricional.",
    email: "ludesmi.vilca@nutriplan.com",
    linkedin: "https://linkedin.com/in/ludesmi-vilca",
    cv: "/cv-ludesmi-vilca.pdf"
  },
  {
    name: "Roberto Carlos Apaza Cornejo",
    role: "Desarrollador Web",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Desarrollador full-stack con experiencia en aplicaciones web de salud y nutrición.",
    email: "roberto.apaza@nutriplan.com",
    linkedin: "https://linkedin.com/in/roberto-apaza",
    cv: "/cv-roberto-apaza.pdf"
  }
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" ref={ref} className="py-16 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground">
            Conoce a los expertos detrás de NutriPlan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-4">
                    {member.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    asChild
                  >
                    <a href={`mailto:${member.email}`} title="Enviar correo">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    asChild
                  >
                    <a href={member.cv} target="_blank" rel="noopener noreferrer" title="Ver CV">
                      <FileText className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="Ver LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
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