import React, { useRef } from "react";
import styles from "./Header.module.scss";
import { AboutPage } from "../../AboutPage/AboutPage";
import { ContactPage } from "../contactPage/ContactPage";
import { ServisePage } from "../../servisePage/ServisePage";
import { PortfolioPage } from "../portfolioPage/PortfolioPage";
import { HeaderMainInfo } from "./headerMainInfo/HeaderMainInfo";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "../../../components/Layout";

export const Header = () => {
  const img = useRef();
  const popup = useRef();

  const popupClose = (e) => {
    if (img.current.className === e.target.className) {
      popup.current.setAttribute("style", "visibility:visible;opacity:1");
    } else {
      popup.current.setAttribute("style", "visibility:hidden;opacity:0");
    }
  };

  return (
    <header className={styles.header} onClick={(e) => popupClose(e)}>
      <div className={styles.container}>
        <img className={styles.logo} src="logo.svg" alt="logo" />
        <nav className={styles.nav}></nav>
        <Link to="/contact" className={styles.button}>
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
    </header>
  );
};
