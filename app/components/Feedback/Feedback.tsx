"use client";
import classNames from "classnames";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import styles from "./Feedback.module.scss";
import { useCallback, useRef } from "react";

export const Feedback = () => {
  const sliderRef = useRef<any>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.title}>Отзывы</div>
      <div className={styles.slider}>
        <Swiper ref={sliderRef} slidesPerView={"auto"} centeredSlides={true} spaceBetween={20} loop onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide className={styles.sliderCardCont}>
            {({ isActive }) => (
              <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                <div className={styles.slideText}>
                  Я хочу поделиться своим восторгом от использования платформы генерации видео. Недавно я столкнулся с необходимостью создания профессионального видеоролика для своего бизнеса, и,
                  честно говоря, был приятно удивлен тем, насколько легко и эффективно можно было это сделать.
                  <br /> <br /> Во-первых, что меня поразило, так это разнообразие возможностей, предоставляемых этой платформой. Независимо от того, нужно ли мне создать короткое промо-видео, обзор
                  продукта или даже анимацию, я всегда мог полагаться на разнообразные инструменты и шаблоны, предоставленные платформой.
                  <br /> <br /> Интерфейс платформы также заслуживает отдельного упоминания. Он интуитивно понятен, даже для тех, кто не имеет опыта в области видеомонтажа
                </div>
                <div className={styles.slideCompany}>
                  <div className={classNames(styles.slideCompanyIcon, styles.slideCompanyIconRealState)} />
                  <div className={styles.slideCompanyText}>
                    <div className={styles.slideCompanyTextTitle}>REAL ESTATE</div>
                    <div className={styles.slideCompanyTextSub}>Агентство по продаже недвижимости</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={styles.sliderCardCont}>
            {({ isActive }) => (
              <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                <div className={styles.slideText}>
                  Я хочу поделиться своим восторгом от использования платформы генерации видео. Недавно я столкнулся с необходимостью создания профессионального видеоролика для своего бизнеса, и,
                  честно говоря, был приятно удивлен тем, насколько легко и эффективно можно было это сделать.
                  <br /> <br /> Во-первых, что меня поразило, так это разнообразие возможностей, предоставляемых этой платформой. Независимо от того, нужно ли мне создать короткое промо-видео, обзор
                  продукта или даже анимацию, я всегда мог полагаться на разнообразные инструменты и шаблоны, предоставленные платформой.
                  <br /> <br /> Интерфейс платформы также заслуживает отдельного упоминания. Он интуитивно понятен, даже для тех, кто не имеет опыта в области видеомонтажа
                </div>
                <div className={styles.slideCompany}>
                  <div className={classNames(styles.slideCompanyIcon, styles.slideCompanyIconIvan)} />
                  <div className={styles.slideCompanyText}>
                    <div className={styles.slideCompanyTextTitle}>Иван Алексеев</div>
                    <div className={styles.slideCompanyTextSub}>Менеджер по продажам</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={styles.sliderCardCont}>
            {({ isActive }) => (
              <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                <div className={styles.slideText}>
                  Я хочу поделиться своим восторгом от использования платформы генерации видео. Недавно я столкнулся с необходимостью создания профессионального видеоролика для своего бизнеса, и,
                  честно говоря, был приятно удивлен тем, насколько легко и эффективно можно было это сделать.
                  <br /> <br /> Во-первых, что меня поразило, так это разнообразие возможностей, предоставляемых этой платформой. Независимо от того, нужно ли мне создать короткое промо-видео, обзор
                  продукта или даже анимацию, я всегда мог полагаться на разнообразные инструменты и шаблоны, предоставленные платформой.
                  <br /> <br /> Интерфейс платформы также заслуживает отдельного упоминания. Он интуитивно понятен, даже для тех, кто не имеет опыта в области видеомонтажа
                </div>
                <div className={styles.slideCompany}>
                  <div className={classNames(styles.slideCompanyIcon, styles.slideCompanyIconAnna)} />
                  <div className={styles.slideCompanyText}>
                    <div className={styles.slideCompanyTextTitle}>Анна Алексеева</div>
                    <div className={styles.slideCompanyTextSub}>Агентство по продаже недвижимости</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={styles.sliderCardCont}>
            {({ isActive }) => (
              <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                <div className={styles.slideText}>
                  Я хочу поделиться своим восторгом от использования платформы генерации видео. Недавно я столкнулся с необходимостью создания профессионального видеоролика для своего бизнеса, и,
                  честно говоря, был приятно удивлен тем, насколько легко и эффективно можно было это сделать.
                  <br /> <br /> Во-первых, что меня поразило, так это разнообразие возможностей, предоставляемых этой платформой. Независимо от того, нужно ли мне создать короткое промо-видео, обзор
                  продукта или даже анимацию, я всегда мог полагаться на разнообразные инструменты и шаблоны, предоставленные платформой.
                  <br /> <br /> Интерфейс платформы также заслуживает отдельного упоминания. Он интуитивно понятен, даже для тех, кто не имеет опыта в области видеомонтажа
                </div>
                <div className={styles.slideCompany}>
                  <div className={classNames(styles.slideCompanyIcon, styles.slideCompanyIconRealState)} />
                  <div className={styles.slideCompanyText}>
                    <div className={styles.slideCompanyTextTitle}>REAL ESTATE</div>
                    <div className={styles.slideCompanyTextSub}>Агентство по продаже недвижимости</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={styles.sliderCardCont}>
            {({ isActive }) => (
              <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                <div className={styles.slideText}>
                  Я хочу поделиться своим восторгом от использования платформы генерации видео. Недавно я столкнулся с необходимостью создания профессионального видеоролика для своего бизнеса, и,
                  честно говоря, был приятно удивлен тем, насколько легко и эффективно можно было это сделать.
                  <br /> <br /> Во-первых, что меня поразило, так это разнообразие возможностей, предоставляемых этой платформой. Независимо от того, нужно ли мне создать короткое промо-видео, обзор
                  продукта или даже анимацию, я всегда мог полагаться на разнообразные инструменты и шаблоны, предоставленные платформой.
                  <br /> <br /> Интерфейс платформы также заслуживает отдельного упоминания. Он интуитивно понятен, даже для тех, кто не имеет опыта в области видеомонтажа
                </div>
                <div className={styles.slideCompany}>
                  <div className={classNames(styles.slideCompanyIcon, styles.slideCompanyIconAnna)} />
                  <div className={styles.slideCompanyText}>
                    <div className={styles.slideCompanyTextTitle}>Анна Алексеева</div>
                    <div className={styles.slideCompanyTextSub}>Агентство по продаже недвижимости</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
