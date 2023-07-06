import { React, useRef, useEffect } from "react";
import styles from "./skills.module.scss";

export const Skills = (props) => {
  let con = useRef();
  let contwo = useRef();
  let arr = [con, contwo];
  useEffect(() => {
    props.anim(arr);
  });
  const list = [
    { name: "UI/UX Design", count: "90%", width: "502" },
    { name: "Front End Developer", count: "95%", width: "527" },
    { name: "Graphic Design", count: "90%", width: "502" },
    { name: "Product Design", count: "85%", width: "481" },
  ];
  return (
    <section className={styles.skills}>
      <div className={styles.info} ref={con}>
        <div className={styles.info__container}>
          <h3 className={styles.count}>02</h3>
          <p className={styles.title}>My Skills</p>
        </div>
        <p className={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className={styles.button}>DOWNLOAD CV</button>
      </div>
      <div className={styles.container} ref={contwo}>
        {list.map((item) => (
          <div
            className={styles.card}
            key={list.indexOf(item)}
            style={{
              borderImage: `linear-gradient(90deg, #fe390c ${item.count}, #dddee0 ${item.count})`,
              borderImageSlice: "1",
            }}
          >
            <p className={styles.card__title}>{item.name}</p>
            <p className={styles.card__title}>{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
