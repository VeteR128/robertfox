import React, { useRef, useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { AboutPage } from "../../AboutPage/AboutPage";
import { ContactPage } from "../../contactPage/ContactPage";
import { ServisePage } from "../../servisePage/ServisePage";
import { PortfolioPage } from "../../portfolioPage/PortfolioPage";
import { HeaderMainInfo } from "./headerMainInfo/HeaderMainInfo";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "../../../components/Layout";

export const Header = () => {
  const bg = useRef();
  const img = useRef();
  const popup = useRef();

  const [url, setUrl] = useState("/");
  const setbg = (image) => {
    bg.current.setAttribute("style", `background-image:url(${image})`);
  };
  useEffect(() => {
    if (url !== "/") {
      setbg("bgTwo.webp");
    } else if (url === "/") {
      setbg("bg.webp");
    }
  }, [url]);

  const da = () => {
    setTimeout(() => {
      setUrl(window.location.pathname), 1;
    });
  };

  const popupClose = (e) => {
    if (img.current.className === e.target.className) {
      popup.current.setAttribute("style", "visibility:visible;opacity:1");
    } else {
      popup.current.setAttribute("style", "visibility:hidden;opacity:0");
    }
  };

  return (
    <header className={styles.header} onClick={(e) => popupClose(e)} ref={bg}>
      <div className={styles.container}>
        <img className={styles.logo} src="logo.svg" alt="logo" />
        <nav className={styles.nav}>
          <Link className={styles.link} to="/" onClick={da}>
            Home
          </Link>
          <Link className={styles.link} to="/about" onClick={da}>
            about
          </Link>
          <Link className={styles.link} to="/servise" onClick={da}>
            service
          </Link>
          <Link className={styles.link} to="/portfolio" onClick={da}>
            portfolio
          </Link>
        </nav>
        <Link to="/contact" className={styles.button} onClick={da}>
          contact
        </Link>
        <img className={styles.edit} src="Button.svg" alt="Button" ref={img} />
        <div
          className={styles.popup}
          style={{ visibility: "hidden" }}
          ref={popup}
        >
          <nav className={styles.popup__container}>
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
        </div>
      </div>
      {<HeaderMainInfo path={url} />}
    </header>
  );
};
