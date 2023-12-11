"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Shared/Button/Button";
import styles from "./OrderDemo.module.scss";
import { animated, useSpring } from "@react-spring/web";
import ReactInputMask from "react-input-mask";
import classNames from "classnames";

export const OrderDemo = () => {
  const [userInfo, setUserInfo] = useState({ email: "", phone: "" });
  const [checkbox, setCheckbox] = useState(true);
  const [success, setSuccess] = useState(false);

  const changeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = () => {
    if (userInfo.email && userInfo.phone && checkbox) {
      console.log(userInfo);
      setSuccess(true);
    }
  };

  // const animate = useSpring({
  //   opacity: success ? 1 : 0,
  // });

  return (
    <section className={styles.cont}>
      <div className={styles.image} />
      <div className={styles.form}>
        {success ? (
          <div className={styles.success}>Спасибо за интерес к нашему продукту!</div>
        ) : (
          <>
            <div className={styles.title}>Закажи Демо</div>
            <input type="email" placeholder="E-mail" name="email" onChange={changeUserInfo} required />
            <ReactInputMask mask="+7 (999) 999 99 99" maskChar={null} value={userInfo.phone} name="phone" onChange={changeUserInfo} placeholder="Телефон" />

            <div className={styles.policy}>
              <div onClick={() => setCheckbox((prevState) => !prevState)} className={classNames(styles.policyCheck, { [styles.policyCheckInactive]: !checkbox })} />{" "}
              <div className={styles.policyText}>
                Я согласен с <a href="#">Политика конфиденциальности</a>
              </div>
            </div>
            <Button onClick={submit}>Дальше</Button>
          </>
        )}
      </div>
    </section>
  );
};
