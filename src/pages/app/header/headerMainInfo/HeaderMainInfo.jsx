import { React, useEffect, useRef } from "react";
import { HeaderNameContent } from "../headerNameContent/HeaderNameContent";
import styles from "./headerMain.module.scss";

export const HeaderMainInfo = (props) => {
  const con = useRef(null);
  const arr = [con];
  useEffect(() => {
    props.anim(arr);
  });
  if (props.path === "/robertfox/") {
    return (
      <div className={styles.info} ref={con}>
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
  } else if (props.path === "/robertfox/about") {
    return <HeaderNameContent anim={props.anim} name="about" />;
  } else if (props.path === "/robertfox/servise") {
    return <HeaderNameContent anim={props.anim} name="servise" />;
  } else if (props.path === "/robertfox/portfolio") {
    return <HeaderNameContent anim={props.anim} name="portfolio" />;
  } else {
    return <HeaderNameContent anim={props.anim} name="contact" />;
  }
};
