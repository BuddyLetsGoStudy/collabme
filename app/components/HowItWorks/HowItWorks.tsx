"use client";
import styles from "./HowItWorks.module.scss";
import globalStyles from "../../page.module.scss";
import { cls } from "../Shared/helpers/css";
import classNames from "classnames";
import { useState } from "react";
import { RedTab } from "./RedTab/RedTab";
import { WhiteTab } from "./WhiteTab/WhiteTab";

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

  return (
    <div className={styles.howSectionCont} id={"howitworks"}>
      <section className={classNames(styles.howSection)}>
        <h2 className={styles.howTitle}>Как это работает?</h2>
        <div className={styles.howTabs}>
          <div className={classNames(styles.howTab, { [styles.howTabSelected]: firstTab })} onClick={() => setFirstTab(true)}>
            <div className={styles.howTabText}>Посмотреть для компаний с большим количеством клиентов и данных</div>

            <div className={classNames(styles.howTabIcon, { [styles.howTabIconUnactive]: !firstTab })} />
          </div>
          <div className={classNames(styles.howTab, styles.howTabWhite, { [styles.howTabSelected]: !firstTab })} onClick={() => setFirstTab(false)}>
            <div className={styles.howTabText}>Посмотреть использование при точечном контакте</div>

            <div className={classNames(styles.howTabIcon, { [styles.howTabIconUnactive]: firstTab })} />
          </div>
        </div>
      </section>
      <div className={classNames(styles.tabContent, { [styles.tabContentRed]: firstTab })}>{firstTab ? <RedTab tabs={tabs} /> : <WhiteTab tabs={tabs} />}</div>
    </div>
  );
};
