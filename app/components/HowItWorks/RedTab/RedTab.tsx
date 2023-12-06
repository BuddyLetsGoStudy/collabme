import classNames from "classnames";
import styles from "../HowItWorks.module.scss";
import { TabType } from "../HowItWorks";
import { useState } from "react";

export const RedTab = ({ tabs }: { tabs: TabType[] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <>
      <section className={classNames(styles.step)}>
        <div className={styles.stepSub}>Шаг 1</div>
        <h3 className={styles.stepTitle}>
          Запиши всего лишь <span>одно</span> видео с основным посылом,
          <br /> которым ты хочешь поделиться
        </h3>
        <div className={classNames(styles.stepVideo, styles.stepVideo1)} />
      </section>
      <section className={classNames(styles.contentOffset, styles.step)}>
        <div className={styles.stepSub}>Шаг 2</div>
        <h3 className={styles.stepTitle}>
          Добавь видео на платформу и выдели <span>любые</span> слова для создания шаблона под персонализированные видео для каждого пользователя и клиента
        </h3>
        <div className={classNames(styles.stepVideo, styles.stepVideo2)} />
      </section>
      <section className={classNames(styles.contentOffset, styles.step)}>
        <div className={styles.stepSub}>Шаг 3</div>
        <h3 className={styles.stepTitle}>
          Моментально получи <span>бесконечное</span> количество уникальных гипер-персонифицированных видео с любыми другими словами без лишних проблем
        </h3>
        <div className={classNames(styles.stepVideo, styles.stepVideo3)} />
      </section>
      <section className={classNames(styles.contentOffset, styles.step)}>
        <div className={styles.stepSub}>Шаг 4</div>
        <h3 className={styles.stepTitle}>Получи астрономический ROI используя персонифицированное видео общение с клиентами в любом коммуникационном канале</h3>
        <div className={styles.stepTabsContainer}>
          <div className={styles.stepTabs}>
            {tabs.map((tab, i) => (
              <div key={tab.key} className={classNames(styles[tab.key], styles.stepTabsTab, { [styles.stepTabsTabActive]: i === activeTabIndex })} onClick={() => setActiveTabIndex(i)}>
                {tab.text}
              </div>
            ))}
          </div>
          <div className={classNames(styles.stepTabsContent, styles[`stepTabsContent${activeTabIndex + 1}`])} />
        </div>
      </section>
    </>
  );
};
