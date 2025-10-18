"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionDisplay";

export default function ThirdPart(){
    const questions: FormsQuestions[] = [
        {
            question: "Em desenvolvimento",
            options: ["Pode ir"],
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
                    <h1>Mini-Diagnóstico das Dimensões</h1>

                    <h2>Etapa 3 de 4</h2>
                </div>

                <ProgressBar current={answered} total={totalQuestions} />
            </div>

            <div className={styles.questions_table}>
                    <QuestionDisplay
                        questions={questions}
                    />

                <div className={styles.navigation_area}>
                    <NavButton destination={2} buttonStyle={0} content={
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