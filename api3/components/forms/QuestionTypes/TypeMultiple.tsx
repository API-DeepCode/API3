import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";

interface Props {
  questionData: FormsQuestions;
  answers: Record<string, string[]>;
  handleSelect: (question: string, answers: string[]) => void;
}

export default function TypeMultiple({
  questionData,
  answers,
  handleSelect,
}: Props) {
  const { question, options } = questionData;
  const selectedAnswers = answers[question] || [];

  const handleToggle = (option: string) => {
    let updatedAnswers = [...selectedAnswers];

    if (updatedAnswers.includes(option)) {
      // Se já estava selecionada, remove
      updatedAnswers = updatedAnswers.filter((a) => a !== option);
    } else if (updatedAnswers.length < 3) {
      // Se não estava e ainda há espaço, adiciona
      updatedAnswers.push(option);
    }

    handleSelect(question, updatedAnswers);
  };

  return (
    <div key={question} className={styles.question}>
      <h1 className={styles.question_title}>{question}</h1>

      <ul className={styles.questions_display}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles.option_button} ${
              selectedAnswers.includes(option)
                ? styles.option_button_selected
                : ""
            }`}
            onClick={() => handleToggle(option)}
          >
            {option}
          </button>
        ))}
      </ul>

      <p className={styles.helper_text}>
        {selectedAnswers.length}/3 opções selecionadas
      </p>
    </div>
  );
}