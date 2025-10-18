import { FormsQuestions } from "@/lib/type";
import styles from "@/components/styles/Forms.module.css";
import { useState } from "react";

interface Props {
  questionData: FormsQuestions;
  answers: Record<string, string | string[]>;
  handleSelect: (question: string, answer: string) => void;
}

export default function TypeSlider({ questionData, answers, handleSelect }: Props) {
  const { question } = questionData;
  const [value, setValue] = useState(Number(answers[question]) || 3);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(Number(newValue));
    handleSelect(question, newValue);
  };

  return (
    <div className={styles.question}>
      <h2 className={styles.question_title}>{question}</h2>

      <div className={styles.scale_container}>
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={handleChange}
          className={styles.scale_slider}
        />
        <div className={styles.scale_labels}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`${styles.scale_label} ${
                value === n ? styles.scale_label_selected : ""
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
