import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.firstRow}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <div className={styles.logoText}>COLLABME.AI</div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackPhone}>Заказать звонок</div>
            <div className={styles.feedbackEmail}>Обратная связь</div>
          </div>
          {/* <div className={styles.social}>
            <div className={styles.socialText}>Мы в социальных сетях</div>
            <div className={styles.socialIcons}>
              <div className={styles.socialFb}></div>
              <div className={styles.socialIg}></div>
              <div className={styles.socialTg}></div>
              <div className={styles.socialVk}></div>
            </div>
          </div> */}
        </div>
        <div className={styles.secondRow}>
          <div className={styles.copyright}>2024 • COLLABME.AI • все права защищены</div>
          <div className={styles.policies}>
            <Link href="/usage.pdf" className={styles.policiesItem}>
              Политика обработки данных
            </Link>
            <Link href="/policy.pdf" className={styles.policiesItem}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
