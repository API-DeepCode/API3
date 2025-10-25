// Caminho: api3/app/page.tsx

"use client";

import {
  Bot,
  ArrowDown,
  UserRound,
  Goal,
  PencilRuler,
  ChartNoAxesCombined,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChatToggler } from "@/components/chatToggler/ChatToggler";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();

  return (
  <main className="pt-24 pb-24 px-4 sm:px-8 md:px-16 lg:px-40 text-foreground bg-gradient-to-b from-background via-background/95 to-background">

    {/* Seção de Boas-vindas - Bordas estáticas removidas */}
    <section className="mb-20 ml-4 sm:ml-8 md:ml-12 lg:ml-16 pl-8 relative"> {/* Removeu border-l-8 border-primary */}
      {/* Elemento de brilho gradiente (ajustado para ficar mais próximo) */}
      <div className="absolute -left-2 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-500 via-primary to-purple-400 blur-sm opacity-80 rounded-full" /> {/* Ajustado left, blur, opacity */}

      <h1 className="text-4xl sm:text-5xl font-semibold mb-3 text-gray-300 tracking-tight animate-fade-in">
        Bem-vindo ao
      </h1>

      <div className="flex items-center gap-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)] hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] transition-all duration-500">
          EntrenovaFlix
        </h1>
        <Bot
          size={58}
          className="text-primary shrink-0 drop-shadow-[0_0_12px_rgba(236,72,153,0.4)] animate-pulse-slow"
          aria-hidden="true"
        />
      </div>

      {/* Animações CSS (mantidas) */}
      <style jsx>{`@keyframes fade-in {

      from { opacity: 0; transform: translateY(10px); }

      to { opacity: 1; transform: translateY(0); }

    }

    .animate-fade-in {

      animation: fade-in 1s ease-out forwards;

    }

    @keyframes pulse-slow {

      0%, 100% { opacity: 1; transform: scale(1); }

      50% { opacity: 0.85; transform: scale(1.05); }

    }

    .animate-pulse-slow {

      animation: pulse-slow 3s ease-in-out infinite;

    }
      `}</style>
    </section>


      {/* Hero Section */}
      <section className="text-center mb-24 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 max-w-3xl leading-tight bg-gradient-to-r from-pink-400 via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
          Identifique os desafios da sua empresa com precisão
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Um diagnóstico completo em 4 etapas que analisa várias dimensões para transformar dados em insights acionáveis.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Button
            size="lg"
            onClick={() => router.push("/forms/firstPart")}
            aria-label="Preencher o formulário de diagnóstico"
            className="group text-base font-medium shadow-lg transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            Preencher o Formulário
            <ArrowRight
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base font-medium transition-all duration-300 border-primary/40 text-primary hover:border-primary hover:bg-primary/10 hover:text-primary shadow-sm hover:shadow-primary/20"
          >
            <Link href="/plans" aria-label="Ver planos disponíveis">
              Ver Planos
            </Link>
          </Button>
        </div>
      </section>

      {/* Seção de Informações */}
      <section className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-3 mb-14 text-center text-primary">
          <h2 className="text-3xl font-semibold tracking-tight">
            Saiba Mais sobre o Formulário
          </h2>
          <ArrowDown className="mt-1" aria-hidden="true" />
        </div>

        {/* Etapas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mb-24">
          {[
            { Icon: UserRound, title: "Parte 1: Perfil", description: "Parâmetros básicos da sua empresa: setor, porte e localização." },
            { Icon: Goal, title: "Parte 2: Objetivos", description: "Principais desafios e metas estratégicas para alcançar seus resultados." },
            { Icon: PencilRuler, title: "Parte 3: Dimensões", description: "Análise de quatro dimensões: pessoas, estrutura, mercado e futuro." },
            { Icon: ChartNoAxesCombined, title: "Parte 4: Inovação", description: "Avaliação de investimento, inovação e urgência de transformação." }
          ].map((part, index) => (
            <Card
              key={index}
              className="bg-card/60 border-border hover:border-primary/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 flex flex-col group rounded-2xl backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="relative w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <part.Icon className="w-7 h-7 text-primary relative z-10" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-100 group-hover:text-primary transition-colors text-center">
                  {part.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed text-center px-3">
                {part.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Descobertas */}
        <Card className="bg-card/60 border-border w-full max-w-6xl mb-24 p-10 rounded-2xl shadow-md hover:shadow-primary/20 transition-all backdrop-blur-sm">
          <CardTitle className="text-center text-3xl font-semibold mb-10 bg-gradient-to-r from-pink-400 via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
            O que Você vai Descobrir
          </CardTitle>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-muted-foreground text-base leading-relaxed">
              {[
                "Principais gargalos operacionais",
                "Oportunidades de melhoria imediata",
                "Pontos fortes da sua organização",
                "Áreas críticas que precisam de atenção",
                "Comparativo com empresas do seu setor",
                "Recomendações personalizadas de ação"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 hover:text-foreground transition-colors"
                >
                  <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <section className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
            Pronto para Transformar sua Empresa?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Leva apenas 10 minutos para completar o diagnóstico e receber insights valiosos.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/forms/firstPart")}
            aria-label="Iniciar o diagnóstico agora"
            className="group text-base font-medium shadow-lg transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            Iniciar o diagnóstico
            <ArrowRight
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Button>
        </section>

        <ChatToggler />
      </section>
    </main>
  );
}
