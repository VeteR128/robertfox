import React from "react";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <img className={styles.img} src="AboutImg.webp" alt="aboutImg" />
      <div className={styles.container}>
        <div className={styles.count__container}>
          <h2 className={styles.count}>01</h2>
          <p className={styles.count__title}>about me</p>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>
            I'm Professional Designer and Front-End Web Developer That Solve
            Your Problems
          </h3>
          <p className={styles.subtitle}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className={styles.subtitle}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card__container}>
            <h3 className={styles.card__count}>8</h3>
            <p className={styles.card__title}>Year of experience</p>
          </div>
          <div className={styles.card__container}>
            <h3 className={styles.card__count}>25</h3>
            <p className={styles.card__title}>Saticfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
