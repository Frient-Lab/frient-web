import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

export function Filter() {
  return (
    <main className={styles.contentWrapper}>
      <img src={logo} alt="Logo Frient" />
      <p>
        Pronto, agora que já mapeamos seu perfil, você deseja se conectar com
        que tipo de perfis?
      </p>
      <div className={styles.filters}>
      <button className={styles.filter}>
        <MdFavorite />
        Perfis compatíveis
      </button>
      <button className={styles.filter}>
        <MdFavorite />
        Perfis diferentes
      </button>
      </div>
      <Link to="/chat" className={styles.startQuiz}>
        INICIAR
      </Link>
    </main>
  );
}
