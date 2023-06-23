import React from "react";
import styles from "./service.module.scss";
export const Service = () => {
  return (
    <section className={styles.service}>
      <div className={styles.work}>
        <h3 className={styles.title}>
          let’s work together on Your Next Project
        </h3>
        <button className={styles.button}>HIRE ME NOW</button>
        <a className={styles.link} href="#">
          <img src="down.svg" alt="down" />
          <p className={styles.text}>Download CV</p>
        </a>
      </div>
      <div className={styles.spaces}>
        <h2 className={styles.spaces__title}>
          <span className={styles.span}>02</span>my service
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.card__img} src="cardOne.svg" alt="cardOne" />
            <h3 className={styles.card__title}>UI/UX Design</h3>
            <p className={styles.card__subtitle}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
          <div className={styles.card}>
            <img className={styles.card__img} src="cardTwo.svg" alt="cardTwo" />
            <h3 className={styles.card__title}>Product Design</h3>
            <p className={styles.card__subtitle}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
          <div className={styles.card}>
            <img className={styles.card__img} src="cardThree.svg" alt="" />
            <h3 className={styles.card__title}>Brand Identity</h3>
            <p className={styles.card__subtitle}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
          <div className={styles.card}>
            <img className={styles.card__img} src="cardOne.svg" alt="" />
            <h3 className={styles.card__title}>Website Design</h3>
            <p className={styles.card__subtitle}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
