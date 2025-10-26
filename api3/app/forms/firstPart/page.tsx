"use client"

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/forms/ProgressBar";
import styles from "@/components/styles/Forms.module.css"
import NavButton from "@/components/globals/NavButton"
import { FormsQuestions } from "@/lib/type";
import QuestionDisplay from "@/components/forms/QuestionDisplay";
import { addResponse, reserveNextId } from "@/app/lib/firestoreService";


export default function FirstPart(){
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

    const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
    const handleSelect = (question: string, answer: string | string[]) => {
        setAnswers((prev) => ({ ...prev, [question]: answer}));
    }

    const totalQuestions = questions.length;
    const answered = Object.keys(answers).length;

    //Função para salvar as respostas no Firestore
    const handleNext = async () => {
        try {
        // Monte o objeto com as respostas da parte 1
        const data = {
            num_colaboradores: answers["Número de coladoradores"],
            porte: answers["Porte da empresa"],
            localizacao: answers["Localização"],
            setor: answers["Setor principal da sua empresa"]
        };

        // Reserva um ID numérico e salva o documento mestre com esse ID
        const nextId = await reserveNextId('respostas_part1');
        await addResponse('respostas_part1', data, { numericDocId: nextId });

        console.log("Respostas da parte 1 enviadas com sucesso! id:", nextId);
    } catch (error) {
        console.error("Erro ao enviar respostas:", error);
    }
    };


    return(
        <section className={styles.display}>
            <div className={styles.title}>
                <div className={styles.information}>
                    <h1>Perfil da Empresa</h1>
                    <h2>Etapa 1 de 4</h2>
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
                    <NavButton destination={0} buttonStyle={0} content={
                        <>
                            <ArrowLeft/>

                            <p>Voltar</p>
                        </>
                    }/>

                    <NavButton destination={2} buttonStyle={answered == totalQuestions ? 0 : 1} content={
                        <>
                            <p>Próximo</p>

                            <ArrowRight/>
                        </>
                    }
                     onClick={handleNext}
                    />
                </div>
            </div>
        </section>
    );
}