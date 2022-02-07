import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { api } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnswerContext } from "../../context/AnswerContext";

type Question = {
  id: number;
  title: string;
  idPersonality: number;
  active: boolean;
};

export function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const { addAnswer, answers } = useContext(AnswerContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (answers.length == 20) {
      navigate("/finishquiz");
    }
  }, [answers]);
  

  useEffect(() => {
    api.get<Question[]>("question").then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <main className={styles.contentQuiz}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Frient" />
      </div>
      <section className={styles.containerDescription}>
        <div className={styles.question}>
          <p>{questions[indexQuestion]?.title}</p>
        </div>
        <div className={styles.containerVotes}>
          <div className={styles.votes}>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 0,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                0
              </button>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 20,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                1
              </button>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 40,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                2
              </button>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 60,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                3
              </button>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 80,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                4
              </button>
              <button
                onClick={() => {
                  addAnswer(
                    {
                      idPeople: 2,
                      idQuestion: questions[indexQuestion].id,
                      answer: 100,
                      active: true,
                    },
                    indexQuestion
                  );
                  setIndexQuestion(indexQuestion + 1);
                }}
                className={styles.button}
              >
                5
              </button>
            </div>
            <div className={styles.instructions}>
              <p>0 -{">"} Nada provável</p>
              <p>5 -{">"} Muito provavel</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.movement}>
          <button
            onClick={() => {
              setIndexQuestion(indexQuestion - 1);
            }}
            disabled={indexQuestion == 0}
            className={styles.leftDirection}
          >
            <MdChevronLeft size={"1.875rem"} />
          </button>
          <span className={styles.verticalRow}></span>
          <button
            onClick={() => {
              setIndexQuestion(indexQuestion + 1);
            }}
            disabled={answers[indexQuestion] == null}
            className={styles.rightDirection}
          >
            <MdChevronRight size={"1.875rem"} />
          </button>
        </div>
      </footer>
    </main>
  );
}
