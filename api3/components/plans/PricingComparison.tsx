import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

const features: Feature[] = [
  {
    name: "Número de trilhas personalizadas",
    starter: "Até 3",
    professional: "Até 10",
    enterprise: "Ilimitado"
  },
  {
    name: "Colaboradores inclusos",
    starter: "20",
    professional: "100",
    enterprise: "Ilimitado"
  },
  {
    name: "Duração do acesso",
    starter: "6 meses",
    professional: "12 meses",
    enterprise: "Vitalício"
  },
  {
    name: "Relatórios e analytics",
    starter: "Básico",
    professional: "Avançado",
    enterprise: "Personalizado"
  },
  {
    name: "Certificados de conclusão",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "Consultoria especializada",
    starter: false,
    professional: "2h/mês",
    enterprise: "Semanal"
  },
  {
    name: "Suporte prioritário",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "Suporte 24/7 dedicado",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Dashboard executivo",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Integração com sistemas corporativos",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Gamificação e engajamento",
    starter: false,
    professional: false,
    enterprise: true
  }
];

const plans = [
  { name: "Starter", price: "R$ 499/mês", cta: "Começar Agora", variant: "outline" as const },
  { name: "Profissional", price: "R$ 1.299/mês", cta: "Começar Agora", variant: "default" as const, popular: true },
  { name: "Enterprise", price: "Personalizado", cta: "Fale Conosco", variant: "outline" as const }
];

export function PricingComparison() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          Compare os Planos
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Veja em detalhes o que cada plano oferece para escolher a melhor opção para sua empresa
        </p>
      </div>

      <div className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left p-4 min-w-64 text-gray-200">Recursos</th>
              {plans.map((plan) => (
                <th key={plan.name} className="p-4 min-w-52 text-white">
                  <div className="flex flex-col items-center gap-2">
                    {plan.popular && (
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Mais Popular
                      </span>
                    )}
                    <div className="font-semibold text-lg">{plan.name}</div>
                    <div className="text-gray-300">{plan.price}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/10 transition-colors">
                <td className="p-4 text-gray-300">{feature.name}</td>

                {[feature.starter, feature.professional, feature.enterprise].map((value, i) => (
                  <td key={i} className="p-4 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="w-5 h-5 text-pink-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-300">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <td className="p-4"></td>
              {plans.map((plan) => (
                <td key={plan.name} className="p-4">
                  <Button className="w-full" variant={plan.variant}>
                    {plan.cta}
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
