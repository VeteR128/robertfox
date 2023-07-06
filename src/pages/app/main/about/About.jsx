import { React, useRef, useEffect } from "react";
import styles from "./about.module.scss";
export const About = (props) => {
  let card = useRef();
  let info = useRef();
  let arr = [card, info];
  useEffect(() => {
    props.anim(arr);
  });
  return (
    <section className={styles.about}>
      <div className={styles.cards} ref={card}>
        <div className={styles.card}>
          <img className={styles.img} src="aboutOne.webp" alt="one" />
          <div className={styles.card__container}>
            <h2 className={styles.card__title}>Saticfied Customers</h2>
            <p className={styles.card__subtitle}>25</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__container}>
            <p className={styles.card__subtitle}>8</p>
            <h2 className={styles.card__title}>Year of experience</h2>
          </div>
          <img className={styles.img} src="aboutTwo.webp" alt="two" />
        </div>
      </div>
      <div className={styles.info} ref={info}>
        <div className={styles.info__container}>
          <p className={styles.count}>01</p>
          <h2 className={styles.info__title}>about me</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.ul}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </li>
          <li className={styles.ul}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </li>
        </ul>
      </div>
    </section>
  );
};
