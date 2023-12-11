"use client";
import { ChangeEvent, useState } from "react";
import styles from "./Interest.module.scss";
import classNames from "classnames";
import { useSpring, animated } from "@react-spring/web";
import ReactInputMask from "react-input-mask";

export const Interest = () => {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    email: "",
    phone: "",
  });

  const [checkbox, setCheckbox] = useState(true);

  const changeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const confirm = () => {
    if (!checkbox) return;
    setStep(2);
    console.log(data);
  };

  // const animate = useSpring({
  //   opacity: step === 1 ? 1 : 0,
  // });

  // const animate2 = useSpring({
  //   opacity: step === 2 ? 1 : 0,
  // });

  return (
    <section className={styles.section}>
      {step === 0 ? (
        <>
          <div className={styles.title}>Заинтересовала платформа?</div>
          <div className={styles.subtitle}> Открой мир феноменальных результатов с нашими персонифицированными видео</div>
          <div className={styles.button} onClick={() => setStep(1)}>
            Узнать цену
          </div>
        </>
      ) : step === 1 ? (
        <>
          <animated.div className={styles.title}>Удачной нам интеграции</animated.div>
          <animated.div className={styles.subtitle}>Оставь свои контактные данные!</animated.div>
          <animated.input className={styles.input} type="email" name="email" placeholder="E-mail" onChange={changeData} />
          <ReactInputMask className={styles.input} mask="+7 (999) 999 99 99" maskChar={null} value={data.phone} name="phone" onChange={changeData} placeholder="Телефон" />

          <animated.div className={styles.policy}>
            <div className={classNames(styles.checkbox, { [styles.checkboxInactive]: !checkbox })} onClick={() => setCheckbox((prevState) => !prevState)} />
            <div className={styles.policyText}>
              Я согласен с <a href="#"> Политикой конфиденциальности</a>
            </div>
          </animated.div>
          <animated.div className={styles.button} onClick={confirm}>
            Отправить
          </animated.div>
        </>
      ) : step === 2 ? (
        <>
          <animated.div className={styles.title}>
            Спасибо за интерес к нашему <br />
            продукту
          </animated.div>
          <animated.div className={styles.subtitle}>Скоро наш менеджер свяжется с вами для согласования условий</animated.div>
        </>
      ) : null}
    </section>
  );
};
