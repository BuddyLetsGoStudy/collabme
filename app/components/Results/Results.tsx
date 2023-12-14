"use client";
import classNames from "classnames";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import styles from "./Results.module.scss";

import { useCallback, useRef } from "react";

const slides = [
  { title: "5x", subtitle: "увеличение просматриваемости персонифицированного видео до конца", active: true },
  { title: "250%", subtitle: "возрастает взаимодействие с e-mail рассылками", active: false },
  { title: "3x", subtitle: "количество ответов", active: false },
  { title: "85%", subtitle: "рост у тех кто просмотрел в покупку", active: false },
  { title: "10x", subtitle: "рост вовлеченности клиентов", active: false },
];

export const Results = () => {
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
      <div className={styles.top}>
        <div className={styles.title}>Персонифицированные видео дают феноменальные результаты</div>
        <div className={styles.buttons}>
          <div className={styles.buttonLeft} onClick={handlePrev}></div>
          <div className={styles.buttonRight} onClick={handleNext}></div>
        </div>
      </div>
      <div className={styles.carouselCont}>
        <div className={styles.carousel}>
          <Swiper
            className={styles.swiper}
            centeredSlides={true}
            ref={sliderRef}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              600: {
                spaceBetween: 100,
              },
              1200: {
                spaceBetween: 200,
              },
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={slide.title} className={styles.slideCont}>
                {({ isActive }) => (
                  <div className={classNames(styles.slide, { [styles.slideActive]: isActive })}>
                    <div className={styles.slideTitle}>{slide.title}</div>
                    <div className={styles.slideTitleSub}>{slide.subtitle}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
