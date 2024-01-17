"use client";

import { ChangeEvent, RefObject, useEffect, useMemo, useRef, useState } from "react";
import Button from "../Shared/Button/Button";
import { cls } from "../Shared/helpers/css";
import styles from "./TryDemo.module.scss";
import classNames from "classnames";
import InputMask from "react-input-mask";
import Image from "next/image";

export default function TryDemo() {
  const [screen, setScreen] = useState<number>(0);

  const [data, setData] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const [checkbox, setCheckbox] = useState(true);

  const changeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const confirm = () => {
    if (!checkbox) return;
    setScreen(2);
    console.log(data);
  };

  const changeScreen = () => {
    console.log(data);
    if (screen === 0 && !data.name) return;
    if (screen === 1 && (!data.phone || !data.email || !checkbox)) return;

    setScreen((prevState) => prevState + 1);
  };
  const inputNameRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputNameRef.current) {
      inputNameRef.current.focus({
        preventScroll: true,
      });
    }
  }, []);

  return (
    <section className={cls(styles.contentOffset, styles.videoSection)}>
      <div className={styles.videoContent}>
        <div className={styles.videoContentText}>
          <div className={styles.videoContentTextSub}>Посмотри в действии</div>
          {screen === 0 && (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Привет</div>
              <input onChange={changeData} name="name" placeholder="Введите свое имя" type="text" className={styles.videoContentTextContainerInput} ref={inputNameRef}></input>
              <div className={styles.videoContentTextContainerTextBottom}>У меня есть персональное видео для тебя!</div>
            </div>
          )}
          {screen === 1 && (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Заполни данные для начала генерации видео</div>
              <div className={styles.form}>
                <input onChange={changeData} name="email" type="email" placeholder="E-mail" required ref={emailInputRef} autoFocus />
                <InputMask mask="+7 (999) 999 99 99" maskChar={null} value={data.phone} name="phone" onChange={changeData} placeholder="Телефон" />
                <div className={styles.policy}>
                  <div className={classNames(styles.policyCheck, { [styles.policyCheckInactive]: !checkbox })} onClick={() => setCheckbox((prevState) => !prevState)} />
                  <div className={styles.policyText}>
                    Я согласен с <a href="#">Политика конфиденциальности</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {screen === 2 && (
            <div className={styles.videoContentTextContainer}>
              <div className={styles.videoContentTextContainerText}>Спасибо за интерес к нашему продукту! </div>

              <div className={styles.ok}>Проверим на наличие неприличных слов и отправим персонифицированное видео на указанный e-mail</div>
            </div>
          )}
        </div>
        <div className={styles.buttonchik}>
          {screen === 2 ? null : (
            <Button size="md" onClick={changeScreen}>
              Дальше
            </Button>
          )}
        </div>
      </div>
      <div className={classNames(styles.videoContentTextSub, styles.byebye)}>Посмотри в действии</div>

      <div className={styles.videoVideo}>
        <Image alt="nice" src="/cool.jpg" fill className={styles.videoVideoImage} />
      </div>
      <div className={styles.line}>
        <div className={styles.aiIcon} />
      </div>
    </section>
  );
}
