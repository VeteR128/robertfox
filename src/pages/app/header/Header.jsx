import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src="logo.svg" alt="logo" />
        <nav>
          <a className={styles.link} href="#">
            Home
          </a>
          <a className={styles.link} href="#">
            about
          </a>
          <a className={styles.link} href="#">
            service
          </a>
          <a className={styles.link} href="#">
            portfolio
          </a>
        </nav>
        <button className={styles.button}>contact</button>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <h1 className={styles.title}>
            <span className={styles.span}>Hello</span>, I’m
          </h1>
          <p className={styles.subtitle}>robert fox</p>
          <p className={styles.paragraph}>Professional Product Designer</p>
          <button className={styles.info_button}>let’s talk</button>
        </div>
        <div className={styles.contact}>
          <a className={styles.contact__link} href="">
            <img className={styles.image} src="inst.svg" alt="instagramm" />
          </a>
          <a className={styles.contact__link} href="">
            <img className={styles.image} src="face.svg" alt="facebook" />
          </a>
          <a className={styles.contact__link} href="">
            <img className={styles.image} src="in.svg" alt="in" />
          </a>
          <a className={styles.contact__link} href="">
            <img className={styles.image} src="ball.svg" alt="ball" />
          </a>
        </div>
      </div>
    </header>
  );
};
