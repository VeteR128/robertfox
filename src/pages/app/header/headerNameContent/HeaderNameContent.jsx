import React from "react";
import styles from "./headerNameContent.module.scss";

export const HeaderNameContent = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.bg}>{props.name}</p>
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.subtitle}>
        Home /<span className={styles.span}> {props.name}</span>
      </p>
    </div>
  );
};
