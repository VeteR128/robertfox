import React from "react";
import styles from "./faq.module.scss";

export const Faq = () => {
  const tab = (id, e) => {
    let item = document.getElementById(id);
    let itemBg = document.getElementById(id + 100);
    if (item.classList.contains("active")) {
      e.target.setAttribute("style", "transform:rotate(0deg)");
      item.setAttribute("style", "display:none");
      itemBg.setAttribute("style", "background:#f7f7f7");
      item.classList.remove("active");
    } else {
      e.target.setAttribute("style", "transform:rotate(180deg)");
      item.classList.add("active");
      item.setAttribute("style", " display: block");
      itemBg.setAttribute("style", "background:rgb(233, 213, 213)");
    }
  };
  const list = [
    { count: 1, name: "Where Can I Find More Information?" },
    { count: 2, name: "What Kinds of Payment Do You Accept?" },
    { count: 3, name: "What Are Your Terms and Conditions?" },
  ];
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          04
          <span className={styles.span}>HAVE ANY QUESTIONS?</span>
        </h2>
        {list.map((item) => (
          <div
            className={styles.quest}
            id={item.count + 100}
            key={list.indexOf(item)}
          >
            <div className={styles.quest__container}>
              <h3 className={styles.quest__title}>{item.name}</h3>
              <img
                className={styles.quest__btn}
                src="req.svg"
                alt="req"
                onClick={(e) => {
                  tab(item.count, e);
                }}
              />
            </div>
            <p className={styles.quest__subtitle} id={item.count}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
