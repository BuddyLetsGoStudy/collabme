import styles from "./ExampleModal.module.scss";

export const ExampleModal = ({ title, description, keys, name, closeModal }: any) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.video}>
            <video style={{ width: "100%" }} controls>
              <source src={`/examples/${name}.mp4`} />
            </video>
          </div>
          <div className={styles.text}>
            <div className={styles.textTitle}>Текст из видео</div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className={styles.keysTitle}>Динамичные переменные</div>
            <div className={styles.keys}>
              {keys.map((key: any) => (
                <div key={key} className={styles.keysBlock}>
                  #{key}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cross} onClick={closeModal}></div>
      </div>
    </div>
  );
};
