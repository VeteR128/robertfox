import React from "react";
import styles from "./exp.module.scss";

export const Exp = () => {
  const list = [
    { img: "linkedin.svg", count: "01" },
    { img: "yahoo.svg", count: "02" },
    { img: "zendesk.svg", count: "03" },
    { img: "webflow.svg", count: "04" },
  ];
  return (
    <section className={styles.exp}>
      <div className={styles.text}>
        <h3 className={styles.count}>03</h3>
        <p className={styles.title}>My Experiences</p>
      </div>
      <div className={styles.cards}>
        {list.map((item) => (
          <div className={styles.card} key={list.indexOf(item)}>
            <img className={styles.card__img} src={item.img} alt={item.img} />
            <div className={styles.card__container}>
              <h3 className={styles.card__count}>{item.count}</h3>
              <div className={styles.card__text}>
                <h3 className={styles.card__title}>Web Developer</h3>
                <p className={styles.card__age}>2016-2020</p>
              </div>
            </div>
            <p className={styles.card__subtitle}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
