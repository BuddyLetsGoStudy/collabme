import Image from "next/image";

import styles from "./page.module.scss";
import { cls } from "./components/Shared/helpers/css";
import Button from "./components/Shared/Button/Button";
import TryDemo from "./components/TryDemo/TryDemo";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { OrderDemo } from "./components/OrderDemo/OrderDemo";
import { Results } from "./components/Results/Results";
import { ExampleSlider } from "./components/ExampleSlider/ExampleSlider";
import { Interest } from "./components/Interest/Interest";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <nav className={cls(styles.navbar)}>
          <div className={cls(styles.navbarContent, styles.contentOffset)}>
            <div className={styles.logoCont}>
              <div className={styles.logo}></div>
              <div className={styles.logoTitle}>Collabme</div>
            </div>

            {/* <div style={{ display: "flex" }}>
              <Button className={styles.navbarButtonLogin} outline={true} size="sm" style={{ marginRight: "8px" }}>
                Войти
              </Button>
              <Button className={styles.navbarButtonReg} size="sm">
                Регистрация
              </Button>
            </div> */}
          </div>
        </nav>
        <section style={{ position: "relative" }}>
          <div className={cls(styles.coverSection, styles.contentOffset)}>
            <p className={styles.coverTitleSub}>
              Запиши видео <span>один</span> раз
            </p>

            <h1 className={styles.coverTitle}>
              Персонализируй на <span>миллионы</span> своих клиентов в <span>один</span> клик
            </h1>
            <div className={styles.coverButtonsCont}>
              <a href="#howitworks" style={{ textDecoration: "none" }}>
                <Button>Как это работает</Button>
              </a>
              <a href="#examples" style={{ textDecoration: "none" }}>
                <Button outline={true} style={{ border: "1px solid #CC6028" }}>
                  Примеры использования
                </Button>
              </a>
            </div>
          </div>

          <div className={styles.flow}></div>
        </section>
        <TryDemo />
        <HowItWorks />
        <OrderDemo />
        <Results />
        <ExampleSlider />
        <Interest />
        {/* <Feedback /> */}
      </main>
      <Footer />
    </>
  );
}
