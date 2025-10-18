import { FormsQuestions } from "@/lib/type";
import { useState } from "react";
import QuestionDefault from "@/components/forms/QuestionTypes/TypeDefault";
import QuestionMultiple from "@/components/forms/QuestionTypes/TypeMultiple";
import QuestionSlider from "@/components/forms/QuestionTypes/TypeSlider";
import QuestionOpen from "@/components/forms/QuestionTypes/TypeOpen";
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
            return <QuestionMultiple key={q.question} {...commonProps} />;
          case "slider":
            return <QuestionSlider key={q.question} {...commonProps} />;
          case "open":
            return <QuestionOpen key={q.question} {...commonProps} />;
          default:
            return <QuestionDefault key={q.question} {...commonProps} />;
        }
      })}
    </div>
  );
}