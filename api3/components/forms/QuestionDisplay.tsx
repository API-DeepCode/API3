import { FormsQuestions } from "@/lib/type";
import { useState } from "react";
import TypeDefault from "@/components/forms/QuestionTypes/TypeDefault";
import TypeMultiple from "@/components/forms/QuestionTypes/TypeMultiple";
import TypeSlider from "@/components/forms/QuestionTypes/TypeSlider";
import TypeOpen from "@/components/forms/QuestionTypes/TypeOpen";
import styles from "@/components/styles/Forms.module.css";

interface Props {
  questions: FormsQuestions[];
}

export default function QuestionDisplay({ questions }: Props) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const handleSelect = (question: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  return (
    <div className={styles.questions_container}>
      {questions.map((q) => {
        const commonProps = {
          questionData: q,
          answers,
          handleSelect,
        };

        switch (q.type) {
          case "multiple":
            return <TypeMultiple key={q.question} {...commonProps} />;
          case "slider":
            return <TypeSlider key={q.question} {...commonProps} />;
          case "open":
            return <TypeOpen key={q.question} {...commonProps} />;
          default:
            return <TypeDefault key={q.question} {...commonProps} />;
        }
      })}
    </div>
  );
}