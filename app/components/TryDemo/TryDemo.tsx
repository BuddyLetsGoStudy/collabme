"use client";

import { useState } from "react";
import Button from "../Shared/Button/Button";
import { cls } from "../Shared/helpers/css";
import styles from "./TryDemo.module.scss";

export default function TryDemo() {
  const [screen, setScreen] = useState<number>(0);
  return (
    <section className={cls(styles.contentOffset, styles.videoSection)}>
      <div className={styles.videoContent}>
        <div className={styles.videoContentText}>
          <div className={styles.videoContentTextSub}>Посмотри в действии</div>
          {screen === 0 ? (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Привет</div>
              <input placeholder="Введите свое имя" type="text" className={styles.videoContentTextContainerInput}></input>
              <div className={styles.videoContentTextContainerTextBottom}>У меня есть персональное видео для тебя!</div>
            </div>
          ) : screen === 1 ? (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Заполни данные для начала генерации видео</div>
              <div className={styles.form}>
                <input type="email" placeholder="E-mail" name="email" required />
                <input type="tel" placeholder="Телефон" name="phone" required />
                <div className={styles.policy}>
                  <div className={styles.policyCheck} />{" "}
                  <div className={styles.policyText}>
                    Я согласен с <a href="#">Политика конфиденциальности</a>
                  </div>
                </div>
              </div>
            </div>
          ) : screen === 2 ? (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Спасибо за интерес к нашему продукту! </div>

              <div className={styles.ok}>Проверим на наличие неприличных слов и отправим персонифицированное видео на указанный e-mail</div>
            </div>
          ) : null}
        </div>
        <div>
          {screen === 2 ? null : (
            <Button size="md" onClick={() => setScreen((prevState) => prevState + 1)}>
              Дальше
            </Button>
          )}
        </div>
      </div>
      <div className={styles.videoVideo}></div>
    </section>
  );
}
