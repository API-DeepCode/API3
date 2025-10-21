"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Ideal para pequenas equipes iniciando sua jornada de aprendizado corporativo.",
    price: "R$ 499",
    features: [
      "Até 3 trilhas personalizadas",
      "Suporte para 20 colaboradores",
      "Relatórios básicos de progresso",
      "Acesso por 6 meses",
      "Suporte por e-mail"
    ]
  },
  {
    name: "Profissional",
    description: "Perfeito para empresas em crescimento que buscam desenvolvimento contínuo.",
    price: "R$ 1.299",
    features: [
      "Até 10 trilhas personalizadas",
      "Suporte para 100 colaboradores",
      "Relatórios avançados e analytics",
      "Acesso por 12 meses",
      "Suporte prioritário",
      "Consultoria mensal de 2 horas",
      "Certificados de conclusão"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes organizações com necessidades específicas.",
    price: "Personalizado",
    features: [
      "Trilhas ilimitadas",
      "Usuários ilimitados",
      "Dashboard executivo personalizado",
      "Acesso vitalício",
      "Suporte dedicado 24/7",
      "Consultoria semanal",
      "Integração com sistemas corporativos",
      "Gamificação e engajamento"
    ]
  }
];

export function PricingSection() {
  return (
    <section
      id="plans"
      className="w-full bg-gradient-to-b from-[#4B006E] via-[#5A0A7A] to-background py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Planos de Trilhas Personalizadas
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Escolha o plano ideal para potencializar o desenvolvimento da sua equipe com trilhas sob medida e resultados reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border transition-all duration-300 backdrop-blur-lg ${
              tier.highlighted
                ? "border-pink-400 bg-gradient-to-b from-pink-500/20 to-purple-800/20 shadow-xl scale-105"
                : "border-white/20 bg-white/5 hover:border-pink-400/50"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Mais Popular
              </div>
            )}

            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
              <CardDescription className="text-gray-300 mt-2">
                {tier.description}
              </CardDescription>
              <div className="mt-5">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== "Personalizado" && (
                  <span className="text-gray-300 ml-1 text-lg">/mês</span>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col text-left px-8 pb-8">
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-200">
                    <Check className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-lg font-medium transition-all ${
                  tier.highlighted
                    ? "bg-pink-500 hover:bg-pink-600 text-white shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
                }`}
              >
                {tier.price === "Personalizado" ? "Fale Conosco" : "Começar Agora"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}