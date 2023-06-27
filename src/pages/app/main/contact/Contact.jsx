import React from "react";
import styles from "./contact.module.scss";

export const Contact = () => {
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
    <section className={styles.contact}>
      <div className={styles.info}>
        <h3 className={styles.info__title}>
          <span className={styles.span}>05</span>contact
        </h3>
        <ul className={styles.list}>
          {cards.map((item) => (
            <li className={styles.card} key={cards.indexOf(item)}>
              <img className={styles.img} src={item.img} alt={item.img} />
              <div>
                <h4 className={styles.card__title}>{item.title}</h4>
                <p className={styles.card__subtitle}>{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
        <nav className={styles.navigation}>
          {links.map((item) => (
            <a className={styles.link} href="#" key={links.indexOf(item)}>
              <img className={styles.link_img} src={item.img} alt={item.img} />
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.container}>
        <h3 className={styles.container__title}>
          I’m always open to discussing
          <span className={styles.container__span}> product design work </span>
          or partnership
        </h3>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.input__container}>
              <label className={styles.darude} htmlFor="name">
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
              <label className={styles.darude} htmlFor="Email">
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
          <label className={styles.darude} htmlFor="message">
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
