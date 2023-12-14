"use client";
import styles from "./HowItWorks.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const tabs = [
  { text: "Тригерные рассылки", key: "trigger" },
  { text: "Push- уведомления", key: "push" },
  { text: "E-mail рассылки", key: "email" },
  { text: "Whatsapp", key: "whatsapp" },
  { text: "Telegram", key: "telegram" },
  { text: "На лендинге или веб-сайте на странице товара", key: "landing" },
  { text: "В мобильном приложении", key: "mobile" },
];

export type TabType = {
  text: string;
  key: string;
};

export const HowItWorks = () => {
  const [firstTab, setFirstTab] = useState<boolean>(true);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      const el = tabsRef.current;
      if (firstTab) el.scrollLeft = -el.scrollWidth;
      else el.scrollLeft = el.scrollWidth;
    }
  }, [firstTab]);

  return (
    <div className={styles.howSectionCont} id={"howitworks"}>
      <section className={classNames(styles.howSection)}>
        <h2 className={styles.howTitle}>Как это работает?</h2>
      </section>
      <div className={styles.howTabs} ref={tabsRef}>
        <div className={classNames(styles.howTab, { [styles.howTabSelected]: firstTab })} onClick={() => setFirstTab(true)}>
          <div className={styles.howTabText}>Посмотреть для компаний с большим количеством клиентов и данных</div>

          <div className={classNames(styles.howTabIcon, { [styles.howTabIconUnactive]: !firstTab })} />
        </div>
        <div className={classNames(styles.howTab, styles.howTabWhite, { [styles.howTabSelected]: !firstTab })} onClick={() => setFirstTab(false)}>
          <div className={styles.howTabText}>Посмотреть использование при точечном контакте</div>
          <div className={classNames(styles.howTabIcon, { [styles.howTabIconUnactive]: firstTab })} />
        </div>
      </div>
      <div className={classNames(styles.tabContent, { [styles.tabContentWhite]: !firstTab })}>
        <section className={classNames(styles.step)}>
          <div className={styles.stepSubCont}>
            <div className={styles.stepSubLineCont}>
              <div className={styles.stepSubLine}></div>
            </div>
            <div className={styles.stepSub}>Шаг 1</div>
            <div className={styles.stepSubEmpty}></div>
          </div>
          <h3 className={styles.stepTitle}>
            Запиши всего лишь <span>одно</span> видео с основным посылом,
            <br /> которым ты хочешь поделиться
          </h3>
          <div className={classNames(styles.stepVideo)}>
            <Image alt="nice" src="/stepvideo1.png" fill className={styles.stepVideoImage} />
          </div>
        </section>
        <section className={classNames(styles.contentOffset, styles.step)}>
          <div className={styles.stepSubCont}>
            <div className={styles.stepSubLineCont}>
              <div className={styles.stepSubLine}></div>
            </div>
            <div className={styles.stepSub}>Шаг 2</div>
            <div className={styles.stepSubEmpty}></div>
          </div>
          <h3 className={styles.stepTitle}>
            Добавь видео на платформу и выдели <span>любые</span> слова для создания шаблона под персонализированные видео для каждого пользователя и клиента
          </h3>
          <div className={classNames(styles.stepVideo)}>
            <Image alt="nice" src="/stepvideo2.png" fill className={styles.stepVideoImage} />
          </div>
        </section>
        {firstTab && (
          <section className={classNames(styles.contentOffset, styles.step)}>
            <div className={styles.stepSubCont}>
              <div className={styles.stepSubLineCont}>
                <div className={styles.stepSubLine}></div>
              </div>
              <div className={styles.stepSub}>Шаг 3</div>
              <div className={styles.stepSubEmpty}></div>
            </div>
            <h3 className={styles.stepTitle}>
              Моментально получи <span>бесконечное</span> количество уникальных гипер-персонифицированных видео с любыми другими словами без лишних проблем
            </h3>
            <div className={classNames(styles.stepVideo)}>
              <Image alt="nice" src="/table_image.png" fill className={styles.stepVideoImage} />
            </div>
          </section>
        )}

        <section className={classNames(styles.contentOffset, styles.step)}>
          <div className={styles.stepSubCont}>
            <div className={styles.stepSubLineCont}>
              <div className={styles.stepSubLine}></div>
            </div>
            <div className={styles.stepSub}>{firstTab ? "Шаг 4" : "Шаг 3"}</div>
            <div className={styles.stepSubEmpty}></div>
          </div>
          <h3 className={styles.stepTitle}>Получи астрономический ROI используя персонифицированное видео общение с клиентами в любом коммуникационном канале</h3>
          <div className={styles.stepTabsContainer}>
            <div className={styles.stepTabs}>
              {tabs.map((tab, i) => (
                <div key={tab.key} className={classNames(styles[tab.key], styles.stepTabsTab, { [styles.stepTabsTabActive]: i === activeTabIndex })} onClick={() => setActiveTabIndex(i)}>
                  {tab.text}
                </div>
              ))}
            </div>
            <div className={classNames(styles.stepTabsContent)}>
              <Image alt="nice" src={`/contentTab${activeTabIndex + 1}.png`} fill className={styles.stepTabsContentImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
