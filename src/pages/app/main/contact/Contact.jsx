import React, { useRef, useState, useEffect } from "react";
import styles from "./contact.module.scss";

export const Contact = (props) => {
  let con = useRef();
  let contwo = useRef();
  let arr = [con, contwo];
  useEffect(() => {
    props.anim(arr);
  });
  const cards = [
    { img: "Call.svg", title: "Phone", subtitle: "(219) 555-0114" },
    { img: "Message.svg", title: "Email", subtitle: "robertfox@example.com" },
    {
      img: "location.svg",
      title: "Address",
      subtitle: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
  ];
  const links = [
    { img: "in.svg" },
    { img: "ball.svg" },
    { img: "inst.svg" },
    { img: "face.svg" },
  ];
  return (
    <section
      className={styles.contact}
      style={{ background: `${props.color}` }}
    >
      <div className={styles.info} ref={con}>
        <h3 className={styles.info__title} style={{ color: `${props.text}` }}>
          <span className={styles.span}>{props.number}</span>
          contact
        </h3>
        <ul className={styles.list}>
          {cards.map((item) => (
            <li className={styles.card} key={cards.indexOf(item)}>
              <img className={styles.img} src={item.img} alt={item.img} />
              <div>
                <h4
                  className={styles.card__title}
                  style={{ color: `${props.text}` }}
                >
                  {item.title}
                </h4>
                <p className={styles.card__subtitle}>{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
        <nav className={styles.navigation}>
          {links.map((item) => (
            <a
              className={styles.link}
              href="#"
              key={links.indexOf(item)}
              style={{ background: `${props.text}` }}
            >
              <img className={styles.link_img} src={item.img} alt={item.img} />
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.container} ref={contwo}>
        <h3
          className={styles.container__title}
          style={{ color: `${props.text}` }}
        >
          I’m always open to discussing
          <span className={styles.container__span}> product design work </span>
          or partnership
        </h3>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.input__container}>
              <label
                className={styles.darude}
                style={{ color: `${props.text}` }}
                htmlFor="name"
              >
                Your name*
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your name here"
                id="name"
              />
            </div>
            <div className={styles.input__container}>
              <label
                className={styles.darude}
                style={{ color: `${props.text}` }}
                htmlFor="Email"
              >
                Email Address*
              </label>
              <input
                className={styles.input}
                placeholder="Enter your email address"
                type="email"
                id="Email"
              />
            </div>
          </div>
          <label
            className={styles.darude}
            style={{ color: `${props.text}` }}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={styles.input__message}
            placeholder="Write your message here"
            type="text"
            id="message"
          />
          <button className={styles.button}>send message</button>
        </form>
      </div>
    </section>
  );
};
