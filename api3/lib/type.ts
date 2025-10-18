export interface FormsQuestions{
    question: string;
    options: string[];
    outro: boolean;
    type: "default" | "multiple" | "slider" | "open";
}