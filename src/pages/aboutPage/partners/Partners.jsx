import React from "react";
import styles from "./partner.module.scss";
import { Work } from "../../app/main/work/Work";

export const Partners = () => {
  const list = [
    { img: "behance.svg" },
    { img: "slack.svg" },
    { img: "dribbble.svg" },
    { img: "twilio.svg" },
    { img: "github.svg" },
    { img: "chargebee.svg" },
  ];
  const listTwo = [
    { img: "udemy.svg" },
    { img: "instagram.svg" },
    { img: "mapbox.svg" },
  ];
  return (
    <section className={styles.partners}>
      <div className={styles.info}>
        <h3 className={styles.count}>04</h3>
        <p className={styles.title}>my pARTNERS</p>
      </div>

      <div className={styles.container}>
        {list.map((item) => (
          <img
            key={list.indexOf(item)}
            className={styles.img}
            src={item.img}
            alt={item.img}
          />
        ))}
      </div>
      <div className={styles.containertwo}>
        {listTwo.map((item) => (
          <img
            key={listTwo.indexOf(item)}
            className={styles.img}
            src={item.img}
            alt={item.img}
          />
        ))}
      </div>

      <div className={styles.work__container}>
        <Work />
      </div>
    </section>
  );
};
