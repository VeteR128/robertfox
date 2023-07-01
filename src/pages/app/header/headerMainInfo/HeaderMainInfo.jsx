import React from "react";
import { HeaderNameContent } from "../headerNameContent/HeaderNameContent";
import styles from "./headerMain.module.scss";

export const HeaderMainInfo = (props) => {
  if (props.path === "/") {
    return (
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
    );
  } else if (props.path === "/about") {
    return <HeaderNameContent name="about" />;
  } else if (props.path === "/servise") {
    return <HeaderNameContent name="servise" />;
  } else if (props.path === "/portfolio") {
    return <HeaderNameContent name="portfolio" />;
  } else {
    return <HeaderNameContent name="contact" />;
  }
};
