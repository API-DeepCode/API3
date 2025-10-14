"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"

export default function FirstPart(){
    const questions = [
        {
            id: 1,
            question: "Setor principal da sua empresa",
            options: ["Indústria", "Serviços", "Comércio/Varejo", "Tecnologia/Startups", "Educação/Cultura", "Outro"]
        },
        {
            id: 2,
            question: "Número de coladoradores",
            options: ["Até 10", "Entre 11 e 30", "Entre 30 e 100", "Acima de 100", "Acima de 500"]
        },
        {
            id: 3,
            question: "Porte da empresa",
            options: ["Startup", "PME (Pequena/Média Empresa)", "Grande Empresa"]
        },
        {
            id: 4,
            question: "Localização",
            options: ["Região Sudeste", "Região Sul", "Região Nordeste", "Região Norte", "Região Centro-Oeste"]
        }
    ];

    const [answers, setAnswers] = useState<Record<number, string>>({});
    const handleSelect = (id: number, answer: string) => {
        setAnswers((prev) => ({...prev, [id]: answer}));
    };

    const totalQuestions = questions.length;
    const answered = Object.keys(answers).length;

    return(
        <section className={styles.display}>
            <div className={styles.title}>
                <div className={styles.information}>
                    <h1>Parte 1 - Exemplo 1</h1>

                    <h2>Etapa 1 de 4</h2>
                </div>

                <ProgressBar current={answered} total={totalQuestions} />
            </div>

            <div className={styles.questions_table}>
                {questions.map((p) => (
                    <div key={p.id} className={styles.question}>
                        <h1 className={styles.question_title}>{p.question}</h1>

                        <ul className={styles.questions_display}>
                            {p.options.map((option) => (
                                <button className={`${styles.option_button} ${
                                    answers[p.id] === option ? styles.option_button_selected : ""}`}
                                key={option}
                                onClick={() => handleSelect(p.id, option)}>
                                    {option}
                                </button>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className={styles.navigation_area}>
                    <NavButton destination={0} buttonStyle={0} content={
                        <>
                            <ArrowLeft/>

                            <p>Voltar</p>
                        </>
                    }/>

                    <NavButton destination={1} buttonStyle={answered == totalQuestions ? 0 : 1} content={
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