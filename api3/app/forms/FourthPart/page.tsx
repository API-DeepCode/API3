"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionDisplay";
import { addResponse } from "@/app/lib/firestoreService"

export default function FourthPart(){
    const questions: FormsQuestions[] = [
        {
            question: "Qual a faixa de investimento disponível para treinamentos atualmente?",
            options: ["Até R$ 10 mil", "Entre R$ 10 mil e R$ 50 mil", "Acima de R$ 50 mil"],
            outro: false,
            type: "default"
        },
        {
            question: "Quem geralmente decide sobre a contratação de treinamentos?",
            options: ["CEO / Diretor", "RH / Treinamento e Desenvolvimento", "Marketing / Comunicação"],
            outro: true,
            type: "default"
        },
        {
            question: "Vocês preferem treinamentos",
            options: ["Presenciais", "Online", "Híbridos"],
            outro: false,
            type: "default"
        },
        {
            question: "De 1 a 5, o quanto você considera importante investir em desenvolvimento profissional dos colaboradores",
            options: [""],
            outro: false,
            type: "slider"
        },
        {
            question: "De 1 a 5, o quanto você considera importante desenvolver soft skills (comunicação, liderança, criatividade, autogestão)",
            options: [""],
            outro: false,
            type: "slider"
        },
        {
            question: "De 1 a 5, o quanto você considera importante incentivar cultura, arte e hobbies",
            options: [""],
            outro: false,
            type: "slider"
        },
        {
            question: "De 1 a 5, o quanto você considera importante reconhecer impacto do desenvolvimento humano na performance da empresa",
            options: [""],
            outro: false,
            type: "slider"
        },
        {
            question: "Vocês já implementaram projetos inovadores em treinamentos anteriores?",
            options: ["Sim", "Não"],
            outro: false,
            type: "default"
        },
        {
            question: "Em quanto tempo vocês desejam iniciar o treinamento?",
            options: ["Imediatamente", "Em até 3 meses", "Em 6 meses ou mais"],
            outro: false,
            type: "default"
        },
    ];

    const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
    const handleSelect = (question: string, answer: string | string[]) => {
        setAnswers((prev) => ({ ...prev, [question]: answer}));
    }
    const totalQuestions = questions.length;
    const answered = Object.keys(answers).length;

    // Função para salvar as respostas no Firestore (mapeando para a estrutura mostrada no console)
    const handleNext = async () => {
        try {
            // Helpers
            const idxOf = (q: string, opts?: string[]) => {
                const a = answers[q];
                if (!a || !opts) return null;
                if (typeof a === "string") return Math.max(0, opts.indexOf(a));
                return null;
            };
            const toNumber = (q: string) => {
                const a = answers[q];
                if (a === undefined || a === null || a === "") return null;
                if (typeof a === "number") return a;
                const n = Number(a);
                return Number.isFinite(n) ? n : null;
            };
            const toBoolean = (q: string) => {
                const a = answers[q];
                if (typeof a === "string") return a.toLowerCase() === "sim";
                return !!a;
            };
            const toString = (q: string) => {
                const a = answers[q];
                if (!a) return "";
                return Array.isArray(a) ? a.join(", ") : String(a);
            };

            // Mapeamento baseado nas perguntas do formulário -> campos do Firestore (ajuste se quiser nomes diferentes)
            const data = {
                // prazo/abertura para iniciar (0 = Imediatamente, 1 = até 3 meses, 2 = 6+ meses)
                abertura: idxOf("Em quanto tempo vocês desejam iniciar o treinamento?", ["Imediatamente", "Em até 3 meses", "Em 6 meses ou mais"]),

                // campos de importância (sliders 1-5)
                importante_cah: toNumber("De 1 a 5, o quanto você considera importante incentivar cultura, arte e hobbies"),
                importante_desenvolvimento: toNumber("De 1 a 5, o quanto você considera importante investir em desenvolvimento profissional dos colaboradores"),
                importante_impacto: toNumber("De 1 a 5, o quanto você considera importante reconhecer impacto do desenvolvimento humano na performance da empresa"),
                importante_softskills: toNumber("De 1 a 5, o quanto você considera importante desenvolver soft skills (comunicação, liderança, criatividade, autogestão)"),

                // investimento - armazena índice da opção (0,1,2). Se preferir, converta para faixa de valor.
                invest: idxOf("Qual a faixa de investimento disponível para treinamentos atualmente?", ["Até R$ 10 mil", "Entre R$ 10 mil e R$ 50 mil", "Acima de R$ 50 mil"]),

                // já teve projeto inovador? -> boolean
                projeto_inov: toBoolean("Vocês já implementaram projetos inovadores em treinamentos anteriores?"),

                // quem decide -> texto livre (aceita opção ou "outro")
                tipo_trein: toString("Quem geralmente decide sobre a contratação de treinamentos?"),

                // preferência de formato -> texto (Presenciais / Online / Híbridos)
                treina_contra: toString("Vocês preferem treinamentos")
            };

            await addResponse("resposta_part_4", data);

            console.log("Respostas da parte 4 enviadas com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar respostas da parte 4:", error);
        }
    };

    return(
        <section className={styles.display}>
            <div className={styles.title}>
                <div className={styles.information}>
                    <h1>Investimentio, Inovação & Urgência</h1>
                    <h2>Etapa 4 de 4</h2>
                </div>

                <ProgressBar current={answered} total={totalQuestions} />
            </div>

            <div className={styles.questions_table}>
                <QuestionDisplay
                    questions={questions}
                    answers={answers}
                    handleSelect={handleSelect}
                />

                <div className={styles.navigation_area}>
                    <NavButton destination={3} buttonStyle={0} content={
                        <>
                            <ArrowLeft/>

                            <p>Voltar</p>
                        </>
                    }/>

                    <NavButton destination={0} buttonStyle={answered == totalQuestions ? 0 : 1} content={
                        <>
                            <p>Próximo</p>

                            <ArrowRight/>
                        </>
                    } onClick={handleNext}/>
                </div>
            </div>
        </section>
    );
}