"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionDisplay";

export default function ThirdPart(){
    const peopleCulture: FormsQuestions[] = [
        {
            question: "Como a comunicação acontece no dia a dia?",
            options: ["Sim", "Parcialmente", "Não", ""],
            outro: false,
            type: "default",
        },
        {
            question: "Sua empresa realiza pesquisas de satisfação?",
            options: ["Todos têm clareza e acesso fácil às informações", "Funciona na maior parte do tempo, mas com algumas falhas", "Normalmente só em reuniões formais ou quando há problemas", "É confusa, cada líder comunica de um jeito"],
            outro: false,
            type: "default",
        },
        {
            question: "Como você descreveria o estilo de liderança predominante?",
            options: ["Engajam e dão autonomia", "São bons, mas variam conforme o líder", "Centralizam muito as decisões", "Raramente exercem liderança ativa"],
            outro: false,
            type: "default",
        },
        {
            question: "Quando surgem problemas, como os times costumam agir?",
            options: ["Trazem ideias e resolvem juntos", "Resolvem, mas de forma reativa", "Dependem sempre do gestor para decidir", "Evitam mudanças e preferem manter como está"],
            outro: false,
            type: "default",
        },
        {
            question: "Como está organizada a rotina de trabalho?",
            options: ["Papéis e prioridades são claros", "Há certa clareza, mas faltam recursos ou prazos realistas", "Muitas vezes é confusa, com foco em “apagar incêndios”", "Não há organização definida, cada um faz do seu jeito"],
            outro: false,
            type: "default",
        },
        {
            question: "Até que ponto os valores da empresa estão presentes no dia a dia?",
            options: ["Claros e vividos na prática", "Conhecidos, mas pouco aplicados", "Quase não são lembrados, só em discursos", "Não há clareza sobre os valores"],
            outro: false,
            type: "default",
        },
    ]

    const structureOperations: FormsQuestions[] = [
        {
            question: "Como é a troca de informações entre áreas?",
            options: ["Integrada e frequente", "Funciona em parte, com alguns ruídos", "Depende de reuniões formais", "As áreas trabalham isoladas"],
            outro: false,
            type: "default",
        },
        {
            question: "Como os gestores lidam com delegação?",
            options: ["Delegam com clareza e confiança", "Delegam, mas acompanham em excesso", "Raramente delegam", "Não delegam, concentram tudo"],
            outro: false,
            type: "default",
        },
        {
            question: "Quando processos falham, o que acontece?",
            options: ["As equipes propõem melhorias rapidamente", "Há ajustes, mas com demora", "Só a gestão revisa processos", "Nada muda, seguimos com os problemas"],
            outro: false,
            type: "default",
        },
        {
            question: "Quanta autonomia operacional os colaboradores têm?",
            options: ["Alta, com responsabilidade", "Alguma, mas dependem de aprovações", "Pouca, com muito controle", "Nenhuma, tudo vem da gestão"],
            outro: false,
            type: "default",
        },
        {
            question: "Qual é a relação da empresa com padrões de qualidade?",
            options: ["Qualidade é prioridade e está no DNA", "Importante, mas não sempre seguida", "Depende da cobrança externa", "Não há padrão definido"],
            outro: false,
            type: "default",
        },
        {
            question: "Quais ferramentas apoiam as operações do dia a dia?",
            options: ["Sistemas integrados (ERP, CRM, dashboards)", "Algumas ferramentas digitais, mas sem integração", "Recursos básicos (planilhas, controles manuais)", "Não há ferramentas"],
            outro: false,
            type: "default",
        },
    ]

    const marketClients: FormsQuestions[] = [
        {
            question: "Como a empresa ouve seus clientes?",
            options: ["Temos pesquisa estruturada e contínua", "Fazemos de forma ocasional", "Reagimos só em reclamações", "Não há escuta formal"],
            outro: false,
            type: "default",
        },
        {
            question: "Como vendas e atendimento trabalham juntos?",
            options: ["Colaboram e compartilham informações", "Trocam parcialmente, com falhas", "Atuam isolados, sem integração", "Há conflitos ou competição entre áreas"],
            outro: false,
            type: "default",
        },
        {
            question: "Quando o mercado muda, como a empresa reage?",
            options: ["Antecipamos tendências e inovamos rápido", "Ajustamos, mas com atraso", "Só reagimos a crises", "Não temos adaptação estruturada"],
            outro: false,
            type: "default",
        },
        {
            question: "Como é o acompanhamento de metas comerciais?",
            options: ["Claro, transparente e frequente", "Existe, mas pouco revisado", "Informal, depende do gestor", "Não temos acompanhamento"],
            outro: false,
            type: "default",
        },
        {
            question: "O diferencial competitivo está claro?",
            options: ["Sim, é comunicado e reconhecido", "Existe, mas pouco divulgado", "É incerto, varia por área", "Não está claro"],
            outro: false,
            type: "default",
        },
        {
            question: "Quais ferramentas apoiam mercado & clientes?",
            options: ["CRM, BI e pesquisas estruturadas", "Algumas planilhas e relatórios", "Feedbacks informais, dados dispersos", "Não há recursos específicos"],
            outro: false,
            type: "default",
        },
    ]

    const directionFuture: FormsQuestions[] = [
        {
            question: "Como a visão de futuro é comunicada?",
            options: ["Todos conhecem e entendem", "É conhecida, mas só pela gestão", "Quase não é falada", "Não é comunicada"],
            outro: false,
            type: "default",
        },
        {
            question: "Como os líderes conectam pessoas à estratégia?",
            options: ["Inspiram e alinham metas claramente", "Tentam alinhar, mas varia muito", "Há pouca conexão", "Não há esforço de alinhamento"],
            outro: false,
            type: "default",
        },
        {
            question: "Qual é o papel da inovação no planejamento?",
            options: ["Prioridade central, com projetos claros", "Importante, mas sem orçamento", "Acontece de forma isolada", "Não é prioridade"],
            outro: false,
            type: "default",
        },
        {
            question: "Como as atividades diárias se conectam com a estratégia?",
            options: ["Sempre, com clareza", "Às vezes, depende do gestor", "Raramente, não chega claro", "Nunca, cada área segue isolada"],
            outro: false,
            type: "default",
        },
        {
            question: "Como a empresa lida com propósito e impacto social?",
            options: ["Está no centro das decisões", "É importante, mas secundário", "Fala-se, mas não se aplica", "Não há preocupação"],
            outro: false,
            type: "default",
        },
        {
            question: "Quais ferramentas apoiam a estratégia?",
            options: ["Dashboards, OKRs, planejamentos formais", "Algumas planilhas ou relatórios", "Discussões informais, sem registro contínuo", "Não temos instrumentos claros"],
            outro: false,
            type: "default",
        },
    ]

    const dimensions: Record<string, FormsQuestions[]> = {
        "Pessoas & Cultura": peopleCulture,
        "Estrutura & Operações": structureOperations,
        "Mercado & Clientes": marketClients,
        "Direção & Futuro": directionFuture,
    };

    const [currentDimension, setCurrentDimension] = useState<keyof typeof dimensions>("peopleCulture");

    const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
    const handleSelect = (question: string, answer: string | string[]) => {
        setAnswers((prev) => ({ ...prev, [question]: answer }));
    };

    const totalQuestions = Object.values(dimensions).reduce(
        (sum, dim) => sum + dim.length,
        0
    );

    const answered = Object.keys(answers).length;

    const allAnswered = answered === totalQuestions;

    const questions = dimensions[currentDimension] ?? [];

    return(
        <section className={styles.display}>
            <div className={styles.title}>
                <div className={styles.information}>
                    <h1>Mini-Diagnóstico das Dimensões</h1>

                    <h2>Etapa 3 de 4</h2>
                </div>

                <ProgressBar current={answered} total={totalQuestions} />
            </div>

            <div className={styles.questions_table}>
                <div className={styles.dimension_buttons}>
                    {Object.keys(dimensions).map((dim) => (
                        <button className={`${styles.dimension_button}
                        ${currentDimension === dim ? styles.active_dimension : ""}`}
                        key={dim}
                        onClick={() => setCurrentDimension(dim)}>
                            {dim}
                        </button>
                    ))}
                </div>

                <QuestionDisplay
                    questions={questions}
                    answers={answers}
                    handleSelect={handleSelect}
                />

                <div className={styles.navigation_area}>
                    <NavButton destination={2} buttonStyle={0} content={
                        <>
                            <ArrowLeft/>

                            <p>Voltar</p>
                        </>
                    }/>

                    <NavButton destination={4} buttonStyle={allAnswered ? 0 : 1} content={
                        <>
                            <p>Próximo</p>

                            <ArrowRight/>
                        </>
                    }/>
                </div>
            </div>
        </section>
    );
}