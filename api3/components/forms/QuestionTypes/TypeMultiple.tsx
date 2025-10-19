import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";

interface Props {
    questionData: FormsQuestions;
    answers: Record<string, string | string[]>;
    handleSelect: (question: string, answer: string | string[]) => void;
}

export default function TypeMultiple({ questionData, answers, handleSelect }: Props) {
    const { question, options = [] } = questionData;
    const selected = (answers[question] as string[]) || [];

    const toggleOption = (opt: string) => {
        let newSelected = [...selected];
        if (newSelected.includes(opt)) {
            newSelected = newSelected.filter((o) => o !== opt);
        } else if (newSelected.length < 3) {
            newSelected.push(opt);
        }
        handleSelect(question, newSelected);
    };

    return (
        <div className={styles.question}>
            <h2 className={styles.question_title}>{question}</h2>

            <ul className={styles.questions_display}>
                {options.map((opt) => (
                    <button className={`${styles.option_button} ${
                    selected.includes(opt) ? styles.option_button_selected : ""
                    }`}
                    key={opt}
                    onClick={() => toggleOption(opt)}>
                        {opt}
                    </button>
                ))}
            </ul>
        
            <p className={styles.multi_progress}>{selected.length}/3 selecionadas</p>
        </div>
    );
}