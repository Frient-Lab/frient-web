import { FC, createContext, useState, useCallback } from "react";

interface AnswerContextState {
  answers: Answer[];
  addAnswer(answer: Answer, index: number): void;
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
}

type Answer = {
  idPeople: number;
  idQuestion: number;
  answer: number;
  active: boolean;
};

export const AnswerContext = createContext<AnswerContextState>(
  {} as AnswerContextState
);

export const AnswerProvider: FC = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>((): Answer[] => {
    if (typeof window != "undefined") {
      return JSON.parse(
        localStorage.getItem("@answerArray") || "[]"
      ) as Answer[];
    }
    return [];
  });

  const addAnswer = useCallback(
    (answer: Answer, index: number) => {
      const arrayAnswer = [...answers];
      arrayAnswer[index] = answer;
      
      if (typeof window != "undefined") {
        localStorage.setItem("@answerArray", JSON.stringify(arrayAnswer));
        setAnswers(arrayAnswer);
      }
    },
    [answers]
  );

  return (
    <AnswerContext.Provider value={{ answers, addAnswer, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
