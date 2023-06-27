import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>
        Copyright<span className={styles.span}> Banana Studio </span> 2022 All
        Right Reserved
      </h3>
    </footer>
  );
};
