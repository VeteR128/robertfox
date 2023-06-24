import React, { useRef, useState } from "react";
import styles from "./test.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export const Test = () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 2 }];
  const slideRef = useRef();
  const [cou, setCou] = useState("01");
  const prev = (item) => {
    slideRef.current.swiper.slidePrev();
    if (cou !== "01") {
      setCou(String(`0${item - 1}`));
    }
  };
  const next = (item) => {
    slideRef.current.swiper.slideNext();
    if (cou !== "03") {
      setCou(String(`0${item + 1}`));
    }
  };
  return (
    <section className={styles.test}>
      <img className={styles.img} src="test.webp" alt="test" />
      <div className={styles.container}>
        <div className={styles.text__container}>
          <h2 className={styles.text}>
            <span className={styles.span}>04</span>testimonial
          </h2>
          <div className={styles.count__container}>
            <p className={styles.count_active}>{cou}</p>
            <p className={styles.count}>/03</p>
          </div>
        </div>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={1}
          pagination={{ clickable: true }}
          ref={slideRef}
        >
          {list.map((item) => (
            <SwiperSlide className={styles.slide} key={list.indexOf(item)}>
              <img className={styles.icon} src="testIcon.svg" alt="testIcon" />
              <h2 className={styles.title}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h2>
              <p className={styles.subtitle}>Esther Howard</p>
              <p className={styles.subtitle}>CEO of Adebe</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => prev(Number(cou))}>
            <img src="prev.svg" alt="prev" />
          </button>
          <button className={styles.button} onClick={() => next(Number(cou))}>
            <img src="Next.svg" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};
