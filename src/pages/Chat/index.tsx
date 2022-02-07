import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdRefresh } from "react-icons/md";

export function Chat() {
  return (
    <main className={styles.contentWrapper}>
      <div className={styles.menus}>
        <MdArrowBackIosNew/>
          <div className={styles.profile}>
            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Logo Frient" />
            <p>Gabriel</p>
          </div>
        <MdRefresh/>
      </div>
      <section className={styles.chats}>
        <ul className={styles.messageList}>
          <li className={styles.message}>
            <p className={styles.messageContent}>Oii tudo bem?</p>
          </li>

          <li className={styles.message}>
            <p className={styles.messageContent}>Tudo sim e com você?</p>
          </li>

          <li className={styles.message}>
            <p className={styles.messageContent}>Tudo tranquilo 😀</p>
          </li>

          <li className={styles.message}>
            <p className={styles.messageContent}>Você é da onde?</p>
          </li>
        </ul>
      </section>
      <section className={styles.keyboard}>
        <input className={styles.keyboardContent} type="text" />
      </section>
    </main>
  );
}
