import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";

interface Props {
  questionData: FormsQuestions;
  answers: Record<string, string | string[]>;
  handleSelect: (question: string, answer: string) => void;
}

export default function TypeOpen({ questionData, answers, handleSelect }: Props) {
  const { question } = questionData;
  const value = (answers[question] as string) || "";

  return (
    <div className={styles.question}>
      <h2 className={styles.question_title}>{question}</h2>
      <input
        type="text"
        className={styles.open_input}
        placeholder="Digite sua resposta..."
        value={value}
        onChange={(e) => handleSelect(question, e.target.value)}
      />
    </div>
  );
}
