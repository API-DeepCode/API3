import { ClipboardList, Users, TrendingUp, Award } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Análise de Necessidades",
    description:
      "Nossa equipe analisa as competências necessárias e os objetivos de desenvolvimento da sua empresa para criar trilhas sob medida.",
  },
  {
    icon: Users,
    title: "Implementação da Trilha",
    description:
      "Seus colaboradores recebem acesso imediato às trilhas personalizadas com conteúdos relevantes, vídeos, exercícios práticos e avaliações.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento em Tempo Real",
    description:
      "Monitore o progresso de cada colaborador através de dashboards interativos com métricas de engajamento e performance.",
  },
  {
    icon: Award,
    title: "Certificação e Evolução",
    description:
      "Ao concluir as trilhas, colaboradores recebem certificados e você tem acesso a relatórios completos para planejar próximos passos.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24">
      {/* Fundo com gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-3xl blur-3xl opacity-70 -z-10" />

      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 mb-6">
          Como Funciona a Adesão
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Nosso processo é simples e eficiente. Do diagnóstico à certificação,
          acompanhamos toda a jornada de desenvolvimento da sua equipe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-b from-card/60 to-card/40 border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_25px_-5px_var(--tw-shadow-color)] hover:shadow-primary/40"
          >
            {/* Linha conectando os passos */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 w-14 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
            )}

            {/* Ícone com brilho */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/50">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-pink-500 text-white shadow-md">
                {index + 1}
              </span>
            </div>

            {/* Conteúdo */}
            <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
