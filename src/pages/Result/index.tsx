import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import resultImage from '../../assets/resultImage.svg';
import { Link } from "react-router-dom";

export function Result() {
  return (
    <main className={styles.contentWrapper}>
      <img src={logo} alt="Logo Frient" />
      <p>O seu tipo de personalidade é ESFP:</p>
      <img src={resultImage} alt="Foto do resultado" className={styles.resultImg} />
      <Link to="quiz" className={styles.startChat}>AVANÇAR</Link>
    </main>
  )
}
