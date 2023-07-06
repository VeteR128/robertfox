import { React, useRef, useEffect } from "react";

import styles from "./places.module.scss";

export const Places = (props) => {
  let con = useRef();
  let arr = [con];
  useEffect(() => {
    props.anim(arr);
  });
  return (
    <section className={styles.places} ref={con}>
      <img className={styles.image} src="behance.svg" alt="behance" />
      <img className={styles.image} src="slack.svg" alt="slack" />
      <img className={styles.image} src="dribbble.svg" alt="dribbble" />
      <img className={styles.image} src="twilio.svg" alt="twilio" />
      <img className={styles.image} src="github.svg" alt="github" />
    </section>
  );
};
