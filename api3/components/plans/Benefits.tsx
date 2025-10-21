import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, BarChart3, Shield, Users2, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Totalmente Personalizado",
    description:
      "Trilhas criadas especificamente para as necessidades da sua empresa e cultura organizacional.",
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description:
      "Suas equipes começam a treinar em até 48 horas após a contratação do plano.",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description:
      "Dashboards interativos para acompanhar progresso, engajamento e resultados.",
  },
  {
    icon: Shield,
    title: "Conteúdo Atualizado",
    description:
      "Acesso contínuo a novos conteúdos e atualizações sem custos adicionais.",
  },
  {
    icon: Users2,
    title: "Suporte Especializado",
    description:
      "Equipe dedicada para ajudar na criação e otimização das trilhas de aprendizagem.",
  },
  {
    icon: Rocket,
    title: "Resultados Comprovados",
    description:
      "Aumento médio de 40% na retenção de conhecimento dos colaboradores.",
  },
];

export function Benefits() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl blur-3xl opacity-70 -z-10" />

      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 mb-6">
          Por Que Escolher Nossas Trilhas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Uma plataforma completa para transformar o desenvolvimento da sua equipe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="group relative border border-border bg-gradient-to-b from-card/60 to-card/40 backdrop-blur-md rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:border-primary/50"
          >
            <CardContent className="p-8 flex flex-col items-start">
              {/* Ícone com brilho */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
