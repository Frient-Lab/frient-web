import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

export function Home() {

  return (
    <main className={styles.contentWrapper}>
      <img src={logo} alt="Logo Frient" />
      <p>Agora queremos saber mais sobre seus interesses pessoais.<br/><br/>
      Vai demorar no máximo 5 min</p>
      <Link to="quiz" className={styles.startQuiz}>INICIAR</Link>
    </main>
  )
}
