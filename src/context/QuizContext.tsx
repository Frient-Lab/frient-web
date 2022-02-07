import { FC, createContext, useState, useCallback } from "react";

interface QuizContextState {
  quiz: Quiz;
  addQuiz(quiz: Quiz): void;
}

type Quiz = {
  id: number;
  idPeople: number;
  idAcronyms: number;
};

export const QuizContext = createContext<QuizContextState>(
  {} as QuizContextState
);

export const QuizProvider: FC = ({ children }) => {

  const [quiz, setQuiz] = useState<Quiz>((): Quiz => {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("@quiz:id") || "true") as Quiz;
    }
    return quiz;
  });

  const addQuiz = useCallback((quiz: Quiz) => {
    if (typeof window != "undefined") {
      localStorage.setItem("@quiz:id", JSON.stringify(quiz));
      setQuiz(quiz);
    }
  }, []);

  return (
    <QuizContext.Provider value={{ quiz, addQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
