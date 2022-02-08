import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AnswerContext } from "../../context/AnswerContext";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import { QuizContext } from "../../context/QuizContext";

type QuizResponse = {
  id: number;
  idPeople: number;
  idAcronyms: number;
};

export function FinishQuiz() {
  const { answers } = useContext(AnswerContext);

  const { addQuiz } = useContext(QuizContext);

  async function handleQuiz() {
    const response = await api.post<QuizResponse>("quiz", { answers });

    addQuiz(response.data);

    localStorage.removeItem("@answerArray");

  };

  return (
    <main className={styles.contentWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Frient" />
      </div>
      <div className={styles.results}>
        <Link to="/result" onClick={handleQuiz} className={styles.startResult}>
          RESULTADOS
        </Link>
        <p>revisar respostas</p>
      </div>
    </main>
  );
}
