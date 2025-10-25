// Caminho: api3/app/AiAnswer/page.tsx

"use client";

import {
  UserRound,
  TrendingUp,
  Target,
  SquareCheckBig,
  CircleAlert,
  Lock,
  CircleCheck,
  ArrowRight,
  RefreshCcw, // Ícone para "Refazer"
  Sparkles,    // Ícone para destaque CTA
  AlertTriangle, // Ícone decorativo para Prioridades
} from "lucide-react";
import { useRouter } from "next/navigation"; // Para navegação
import { Button } from "@/components/ui/button"; // Botão da UI
import { Badge } from "@/components/ui/badge"; // Badge da UI (para prioridade)
import { cn } from "@/components/ui/utils"; // Importar cn

export default function AiAnswer() {
  const router = useRouter(); // Hook para navegação

  // --- DADOS DE EXEMPLO ---
  // Substitua estes valores pelos dados reais obtidos da sua lógica/API
  const score = 80;
  const healthStatus = "Excelente";
  const healthDescription = "Baseado nas suas respostas das dimensões";
  const companyInfo = [
    { Icon: UserRound, label: "Funcionários", value: "50-200" },
    { Icon: TrendingUp, label: "Mercado", value: "2-5 anos" },
    { Icon: Target, label: "Setor", value: "Tecnologia" }, // Exemplo
    { Icon: SquareCheckBig, label: "Estrutura", value: "Definida" }, // Exemplo
  ];
  const priorityAreas = [
    { name: "Engajamento de Equipe", priority: "Alta Prioridade" },
    { name: "Gestão de Setores", priority: "Alta Prioridade" },
    // Adicione mais áreas se necessário
  ];
  const planBenefits = [
    "Análise completa das 4 Dimensões",
    "Insights aprofundados e personalizados",
    "Recomendações acionáveis e estratégicas",
    "Roadmap de desenvolvimento detalhado",
  ];
  // --- FIM DOS DADOS DE EXEMPLO ---

  // Função para classes de cor do score (ajustada para texto e borda)
  const getScoreClasses = (value: number): string => {
    if (value >= 75) return "text-green-400 border-green-500/50";
    if (value >= 50) return "text-yellow-400 border-yellow-500/50";
    return "text-red-400 border-red-500/50";
  };

  return (
    // Container principal com fundo gradiente escuro e padding
    <section className="min-h-screen bg-gradient-to-b from-[#1a0a3d] via-[#100529] to-[#0a031a] text-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl space-y-16">

        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Diagnóstico Concluído!
          </h1>
          <p className="text-lg text-gray-400">
            Seu relatório preliminar está pronto.
          </p>
        </div>

        {/* Seção Principal: Score e Informações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Coluna do Score (Destaque) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900/40 via-transparent to-transparent border border-primary/30 rounded-full aspect-square shadow-2xl shadow-primary/20 relative animate-pulse animation-delay-300">
             <div className="absolute inset-2 border-2 border-primary/20 rounded-full animate-ping animation-duration-3000 opacity-50" aria-hidden="true"/>
             <div className={cn("text-7xl font-bold mb-2 z-10", getScoreClasses(score).split(' ')[0])}>
              {score}
              <span className="text-4xl">%</span>
            </div>
            <p className="text-xl font-semibold text-gray-100 mb-1 z-10">{healthStatus}</p>
            <p className="text-sm text-gray-400 text-center max-w-[15ch] z-10">{healthDescription}</p>
          </div>

          {/* Coluna de Informações da Empresa */}
          <div className="lg:col-span-2 space-y-6">
             <h2 className="text-2xl font-semibold text-gray-100 border-l-4 border-primary pl-4 mb-6">Resumo da Empresa</h2>
            <div className="grid grid-cols-2 gap-5">
              {companyInfo.map(({ Icon, label, value }, index) => (
                <div key={index} className="flex items-center p-4 rounded-lg bg-gray-800/50 border border-gray-700/60 hover:bg-gray-700/70 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-primary mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-medium text-gray-200">{label}</h3>
                    <p className="text-sm text-gray-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Áreas Prioritárias com Ícones Decorativos CORRIGIDOS */}
        <div className="relative p-8 rounded-xl bg-gradient-to-r from-red-900/30 via-red-800/20 to-transparent border border-destructive/40 shadow-lg overflow-hidden">
          {/* Ícones Decorativos - Posicionamento ajustado */}
          <AlertTriangle className="absolute -top-5 -left-5 w-20 h-20 text-red-500/25 opacity-80 transform rotate-[-20deg]" aria-hidden="true" />
          <AlertTriangle className="absolute -bottom-5 -right-5 w-24 h-24 text-red-500/25 opacity-50 transform rotate-[15deg]" aria-hidden="true" />

          {/* Conteúdo Principal (agora com z-index relativo) */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <CircleAlert className="w-7 h-7 text-red-400 animate-bounce" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-red-300">
                Áreas Prioritárias Identificadas
              </h2>
            </div>
            <ul className="space-y-4">
              {priorityAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-red-900/50 border border-red-600/50 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-medium text-gray-100 mb-1 sm:mb-0">
                    {area.name}
                  </h3>
                  <Badge variant="destructive" className="bg-red-500 text-white text-xs px-3 py-1 shadow-sm">
                    {area.priority}
                  </Badge>
                </li>
              ))}
            </ul>
            <p className="text-sm text-red-300/80 mt-5 italic">Estas áreas requerem atenção imediata para impulsionar seus resultados.</p>
          </div>
        </div>

        {/* Seção CTA para Planos */}
        <div className="relative p-10 rounded-2xl bg-gradient-to-tr from-primary/30 via-purple-900/40 to-indigo-900/50 border border-primary/50 shadow-2xl shadow-primary/20 overflow-hidden backdrop-blur-md">
           <Sparkles className="absolute -top-5 -left-5 w-24 h-24 text-primary/30 opacity-50 transform rotate-12" aria-hidden="true" />
           <Sparkles className="absolute -bottom-8 -right-8 w-32 h-32 text-pink-400/30 opacity-40 transform -rotate-12" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
              <Lock className="w-10 h-10 text-primary flex-shrink-0" aria-hidden="true" />
              <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left text-gray-100">
                Desbloqueie Insights Completos e Trilhas Personalizadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {planBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-300">
                  <CircleCheck className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            {/* Botões */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6 border-t border-primary/20">
              <Button
                size="lg"
                onClick={() => router.push("/plans")}
                aria-label="Ver planos e adquirir o relatório completo"
                className="group text-base font-medium bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white shadow-lg transition-all duration-300 hover:shadow-primary/40 transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Ver Planos e Adquirir
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/forms/firstPart")}
                aria-label="Refazer o diagnóstico"
                className="text-base font-medium transition-all duration-300 bg-transparent border-gray-500 text-gray-300 hover:border-gray-200 hover:bg-gray-800/50 hover:text-gray-100 shadow-sm transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <RefreshCcw className="mr-2 h-5 w-5" aria-hidden="true" />
                Refazer Diagnóstico
              </Button>
            </div>
          </div>
        </div>

        {/* Informação Final */}
        <div className="text-center text-base text-gray-400 border-t border-gray-700/50 pt-8 mt-16">
          <p>
            Lembre-se: este é um resumo. O relatório completo oferece análises detalhadas e um plano de ação estratégico para sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}