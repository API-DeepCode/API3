import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";
import { useState } from "react";

interface props{
    questionData: FormsQuestions;
    answers: Record<string, string>;
    handleSelect: (question: string, answer: string) => void;
}

export default function TypeDefault({questionData, answers, handleSelect}: props){
    const {question: question, options, outro} = questionData;
    const [outroText, setOutroText] = useState("");

    const handleOutro = () => {
        handleSelect(question, outroText || "Outro");
    };

    return(
        <div key={question} className={styles.question}>
            <h1 className={styles.question_title}>{question}</h1>

            <ul className={styles.questions_display}>
                {options.map((option) => (
                    <button className={`${styles.option_button} ${
                    answers[question] === option ? styles.option_button_selected : ""
                    }`}
                    key={option}
                    onClick={() => handleSelect(question, option)}>
                        {option}
                    </button>
                ))}

                {outro && (
                    <button className={`${styles.option_button} ${
                    answers[question] === outroText || answers[question] === "Outro" ? styles.option_button_selected : ""
                    }`}
                    onClick={handleOutro}>
                        Outro:

                        <input className={styles.outro_input}
                        type="text"
                        placeholder="Especifique..."
                        value={outroText}
                        onChange={(e) => setOutroText(e.target.value)}
                        />
                    </button>
                )}
            </ul>
        </div>
    )
}