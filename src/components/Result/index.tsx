import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import resultImage from '../../assets/resultImage.svg';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { api } from '../../services/api';

type Quiz = {
  id: number;
  idPeople: number;
  idAcronyms: number;
  personality: {
    acronyms: string,
  }
};

export function Result() {
  const [quizes, setQuiz] = useState<Quiz>();

  const { quiz } = useContext(QuizContext);

  useEffect(() => {
    if (quiz && quiz.id) {
      api.get<Quiz>("quiz/" + quiz.id).then((response) => {
        setQuiz(response.data);
      });
    }
  }, [quiz]);

  return (
    <main className={styles.contentWrapper}>
      <img src={logo} alt="Logo Frient" />
      <p>O seu tipo de personalidade é {quizes?.personality.acronyms}</p>
      <img src={resultImage} alt="Foto do resultado" className={styles.resultImg} />
      <Link to="/filter" className={styles.startChat}>AVANÇAR</Link>
    </main>
  )
}
