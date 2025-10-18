"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionDisplay";

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
            options: ["Região Sudeste", "Região Sul", "Região Nordeste", "Região Norte", "Região Centro-Oeste"],
            outro: false,
            type: "default"
        },
        {
            question: "De 1 a 5, o quanto você considera importante desenvolver soft skills (comunicação, liderança, criatividade, autogestão)",
            options: ["Presenciais", "Online", "Híbridos"],
            outro: false,
            type: "default"
        },
        {
            question: "De 1 a 5, o quanto você considera importante incentivar cultura, arte e hobbies",
            options: ["Região Sudeste", "Região Sul", "Região Nordeste", "Região Norte", "Região Centro-Oeste"],
            outro: false,
            type: "slider"
        },
        {
            question: "De 1 a 5, o quanto você considera importante reconhecer impacto do desenvolvimento humano na performance da empresa",
            options: ["Presenciais", "Online", "Híbridos"],
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
            options: ["Imediatamente", "Em até 3 meses", "Em até 3 meses"],
            outro: false,
            type: "default"
        },
    ];

    const [answers] = useState<Record<string, string>>({});

    const totalQuestions = questions.length;
    const answered = Object.keys(answers).length;

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
                    />

                <div className={styles.navigation_area}>
                    <NavButton destination={3} buttonStyle={0} content={
                        <>
                            <ArrowLeft/>

                            <p>Voltar</p>
                        </>
                    }/>

                    <NavButton destination={4} buttonStyle={answered == totalQuestions ? 0 : 1} content={
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