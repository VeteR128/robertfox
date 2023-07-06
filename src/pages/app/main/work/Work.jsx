import { React, useRef, useEffect } from "react";
import styles from "./work.module.scss";

export const Work = (props) => {
  let con = useRef();
  let arr = [con];
  useEffect(() => {
    props.anim(arr);
  });
  return (
    <div className={styles.container} style={{ background: `${props.color}` }}>
      <div className={styles.work} ref={con}>
        <h3 className={styles.title}>
          let’s work together on Your Next Project
        </h3>
        <button className={styles.button}>HIRE ME NOW</button>
        <a className={styles.link} href="#">
          <img src="down.svg" alt="down" />
          <p className={styles.text}>Download CV</p>
        </a>
      </div>
    </div>
  );
};
