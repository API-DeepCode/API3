"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Building2, Users, Star } from "lucide-react";

export function Hero() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans");
    plansSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-primary/5 via-background to-background py-24 px-6 overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent blur-3xl opacity-60 -z-10" />

      <div className="max-w-5xl mx-auto text-center animate-fadeIn">
        {/* Badge */}
        <Badge
          className="mb-6 gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20"
          variant="secondary"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          Plataforma de Desenvolvimento Corporativo
        </Badge>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] leading-tight">
           Trilhas de Treinamento Personalizadas para Sua Equipe
           </h1>


        {/* Descrição */}
        <p className="text-muted-foreground max-w-3xl mx-auto mb-10 text-lg">
          Desenvolva as competências essenciais da sua equipe com trilhas de aprendizagem sob medida.
          Conteúdos relevantes, acompanhamento em tempo real e certificações que fazem a diferença.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={scrollToPlans}
            className="group text-base font-medium shadow-lg transition-all duration-300 hover:shadow-primary/30"
          >
            Ver Planos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary"
          >
            Agendar Demonstração
          </Button>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-10 border-t border-border">
          <div className="flex flex-col items-center">
            <Building2 className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl font-semibold text-foreground">+500</div>
            <p className="text-muted-foreground text-sm">Empresas atendidas</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl font-semibold text-foreground">+50.000</div>
            <p className="text-muted-foreground text-sm">Colaboradores capacitados</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl font-semibold text-foreground">4.9/5</div>
            <p className="text-muted-foreground text-sm">Avaliação média</p>
          </div>
        </div>
      </div>
    </section>
  );
}
