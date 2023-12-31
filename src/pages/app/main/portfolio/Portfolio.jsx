import { React, useRef, useEffect } from "react";
import styles from "./portfolio.module.scss";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export const Portfolio = (props) => {
  let con = useRef();
  let arr = [con];
  useEffect(() => {
    props.anim(arr);
  });
  const slideRef = useRef();
  const list = [
    { src: "portfolioOne.webp", alt: "portfolioOne" },
    { src: "portfolioTwo.webp", alt: "portfolioTwo" },
    { src: "portfolioThree.webp", alt: "portfolioThree" },
    { src: "portfolioTwo.webp", alt: "portfolioTwo" },
    { src: "portfolioOne.webp", alt: "portfolioOne" },
  ];
  return (
    <section className={styles.portfolio} ref={con}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.span}>{props.number}</span> portfolio
        </h2>
        <div>
          <button
            className={styles.button}
            onClick={() => slideRef.current.swiper.slidePrev()}
          >
            <img src="prev.svg" alt="prev" />
          </button>
          <button
            className={styles.button}
            onClick={() => slideRef.current.swiper.slideNext()}
          >
            <img src="Next.svg" alt="Next" />
          </button>
        </div>
      </div>

      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        ref={slideRef}
      >
        {list.map((item) => (
          <SwiperSlide className={styles.slide} key={list.indexOf(item)}>
            <a href="#" className={styles.card}>
              <img className={styles.img} src={item.src} alt={item.alt} />
              <h3 className={styles.text}>MOBILE DESIGN</h3>
              <p className={styles.card__text}>UI/UX Design</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
