import React from "react";
import styles from "./places.module.scss";

export const Places = () => {
  return (
    <section className={styles.places}>
      <img className={styles.image} src="behance.svg" alt="behance" />
      <img className={styles.image} src="slack.svg" alt="slack" />
      <img className={styles.image} src="dribbble.svg" alt="dribbble" />
      <img className={styles.image} src="twilio.svg" alt="twilio" />
      <img className={styles.image} src="github.svg" alt="github" />
    </section>
  );
};
