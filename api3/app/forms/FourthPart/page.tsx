"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionTypes/TypeDefault";

export default function FourthPart(){
    const questions: FormsQuestions[] = [
        {
            question: "Setor principal da sua empresa",
            options: ["Indústria", "Serviços", "Comércio/Varejo", "Tecnologia/Startups", "Educação/Cultura"],
            outro: true,
            type: "default"
        },
        {
            question: "Número de coladoradores",
            options: ["Até 10", "Entre 11 e 30", "Entre 30 e 100", "Acima de 100", "Acima de 500"],
            outro: false,
            type: "default"
        },
        {
            question: "Porte da empresa",
            options: ["Startup", "PME (Pequena/Média Empresa)", "Grande Empresa"],
            outro: false,
            type: "default"
        },
        {
            question: "Localização",
            options: ["Região Sudeste", "Região Sul", "Região Nordeste", "Região Norte", "Região Centro-Oeste"],
            outro: false,
            type: "default"
        }
    ];

    const [answers, setAnswers] = useState<Record<string, string>>({});
    const handleSelect = (question: string, answer: string) => {
        setAnswers((prev) => ({...prev, [question]: answer}));
    };

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
                {questions.map((p) => (
                    <QuestionDisplay
                        key={p.question}
                        questionData={p}
                        answers={answers}
                        handleSelect={handleSelect}
                    />
                ))}

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