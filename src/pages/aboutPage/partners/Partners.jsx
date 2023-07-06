import { React, useRef, useEffect } from "react";
import styles from "./partner.module.scss";
import { Work } from "../../app/main/work/Work";

export const Partners = (props) => {
  let con = useRef();
  let contwo = useRef();
  let contwoo = useRef();
  let arr = [con, contwo, contwoo];
  useEffect(() => {
    props.anim(arr);
  });
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
      <div className={styles.info} ref={con}>
        <h3 className={styles.count}>{props.number}</h3>
        <p className={styles.title}>my pARTNERS</p>
      </div>

      <div className={styles.container} ref={contwo}>
        {list.map((item) => (
          <img
            key={list.indexOf(item)}
            className={styles.img}
            src={item.img}
            alt={item.img}
          />
        ))}
      </div>
      <div className={styles.containertwo} ref={contwoo}>
        {listTwo.map((item) => (
          <img
            key={listTwo.indexOf(item)}
            className={styles.img}
            src={item.img}
            alt={item.img}
          />
        ))}
      </div>
    </section>
  );
};
