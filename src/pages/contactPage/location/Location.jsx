import React, { useRef, useState, useEffect } from "react";
import styles from "./location.module.scss";

export const Location = (props) => {
  let con = useRef();
  let arr = [con];
  useEffect(() => {
    props.anim(arr);
  });
  return (
    <section className={styles.location} ref={con}>
      <h2 className={styles.title}>
        02
        <span className={styles.span}>location</span>
      </h2>
      <iframe
        className={styles.map}
        style={{ height: "511px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1616624.2844360645!2d-120.72697452612603!3d47.15307964747231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2z0JLQsNGI0LjQvdCz0YLQvtC9LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1688589385147!5m2!1sru!2sru"
      ></iframe>
    </section>
  );
};
