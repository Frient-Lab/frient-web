import styles from "./styles.module.scss";
import { MdArrowBackIosNew, MdRefresh, MdPhotoCamera, MdEmojiEmotions } from "react-icons/md";
import { Link } from "react-router-dom";

export function Chat() {
  return (
    <main className={styles.contentWrapper}>
      <div className={styles.menus}>
        <Link to="/"><MdArrowBackIosNew /></Link>
          <div className={styles.profile}>
            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Logo Frient" />
            <p>Gabriel</p>
          </div>
        <Link to="#"><MdRefresh/></Link>
      </div>
      <section className={styles.chats}>
        <ul className={styles.messageList}>
          <li className={styles.messageLeft}>
            <div className={styles.messageBoxLeft}>
            <p className={styles.messageContent}>Oii tudo bem?</p>
            </div>
          </li>

          <li className={styles.messageRight}>
            <div className={styles.messageBoxRight}>
              <p className={styles.messageContent}>Tudo sim e com você?</p>
            </div>
          </li>

          <li className={styles.messageLeft}>
            <div className={styles.messageBoxLeft}>
              <p className={styles.messageContent}>Tudo tranquilo 😀</p>
            </div>
          </li>

          <li className={styles.messageRight}>
            <div className={styles.messageBoxRight}>
              <p className={styles.messageContent}>Você é da onde?</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.keyboard}>
        <div className={styles.keyboardMenu} >
        <input className={styles.keyboardContent} placeholder="Escreva..." type="text"></input>
        <MdEmojiEmotions color="white"/>
        </div>
        <div className={styles.galery} >
          <MdPhotoCamera />
        </div>
      </section>
    </main>
  );
}
