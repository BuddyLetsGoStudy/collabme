"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Shared/Button/Button";
import styles from "./OrderDemo.module.scss";

export const OrderDemo = () => {
  const [userInfo, setUserInfo] = useState({ email: "", phone: "" });
  const [success, setSuccess] = useState(false);

  const changeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ [name]: value, ...prevState }));
  };

  const submit = () => {
    console.log(userInfo);
    setSuccess(true);
  };

  return (
    <section className={styles.cont}>
      <div className={styles.image} />
      <div className={styles.form}>
        {success ? (
          <motion.div className={styles.success} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
            Спасибо за интерес к нашему продукту!
          </motion.div>
        ) : (
          <>
            <div className={styles.title}>Закажи Демо</div>
            <input type="email" placeholder="E-mail" name="email" onChange={changeUserInfo} required />
            <input type="tel" placeholder="Телефон" name="phone" onChange={changeUserInfo} required />
            <div className={styles.policy}>
              <div className={styles.policyCheck} />{" "}
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
