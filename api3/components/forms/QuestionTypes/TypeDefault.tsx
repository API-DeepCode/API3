import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";

interface Props {
  questionData: FormsQuestions;
  answers: Record<string, string | string[]>;
  handleSelect: (question: string, answer: string | string[]) => void;
}

export default function TypeDefault({ questionData, answers, handleSelect }: Props) {
  const { question, options = [] } = questionData;

  return (
    <div className={styles.question}>
      <h2 className={styles.question_title}>{question}</h2>
      <ul className={styles.questions_display}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles.option_button} ${
              answers[question] === option ? styles.option_button_selected : ""
            }`}
            onClick={() => handleSelect(question, option)}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}