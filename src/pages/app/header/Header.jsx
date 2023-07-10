import React, { useRef, useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { AboutPage } from "../../AboutPage/AboutPage";
import { ContactPage } from "../../contactPage/ContactPage";
import { ServisePage } from "../../servisePage/ServisePage";
import { PortfolioPage } from "../../portfolioPage/PortfolioPage";
import { HeaderMainInfo } from "./headerMainInfo/HeaderMainInfo";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Layout } from "../../../components/Layout";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const Header = (props) => {
  const bg = useRef();
  const img = useRef();
  const popup = useRef();
  const logo = useRef();
  const nav = useRef();
  const arr = [logo];
  console.log(props.anim);
  useEffect(() => {
    props.anim(arr);
  }, []);

  const [url, setUrl] = useState(`${window.location.pathname}`);
  const setbg = (image) => {
    bg.current.setAttribute("style", `background-image:url(${image})`);
  };
  useEffect(() => {
    if (url !== "/robertfox/") {
      setbg("bgTwo.webp");
    } else if (url === "/robertfox/") {
      setbg("bg.webp");
    }
  }, [url]);

  const da = () => {
    setTimeout(() => {
      setUrl(window.location.pathname), 1;
    });
  };

  const [modalBtn, setModalBtn] = useState(true);

  return (
    <header className={styles.header} ref={bg}>
      <div className={styles.container}>
        <img className={styles.logo} src="logo.svg" alt="logo" ref={logo} />
        <nav className={styles.nav} ref={nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__active : styles.link
            }
            to="/robertfox/"
            onClick={da}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__active : styles.link
            }
            to="/robertfox/about"
            onClick={da}
          >
            about
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__active : styles.link
            }
            to="/robertfox/servise"
            onClick={da}
          >
            service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__active : styles.link
            }
            to="/robertfox/portfolio"
            onClick={da}
          >
            portfolio
          </NavLink>
        </nav>
        <NavLink to="/robertfox/contact" className={styles.button} onClick={da}>
          contact
        </NavLink>
        <img
          className={styles.edit}
          onClick={() => {
            setModalBtn(false);
            console.log(modalBtn);
          }}
          src="Button.svg"
          alt="Button"
          ref={img}
        />
        <div
          className={modalBtn ? styles.popup : styles.popup__active}
          ref={popup}
          onClick={() => {
            setModalBtn(true);
            console.log(modalBtn);
          }}
        >
          <nav className={styles.popup__container}>
            <Link className={styles.link} to="/robertfox/" onClick={da}>
              Home
            </Link>
            <Link className={styles.link} to="/robertfox/about" onClick={da}>
              about
            </Link>
            <Link className={styles.link} to="/robertfox/servise" onClick={da}>
              service
            </Link>
            <Link
              className={styles.link}
              to="/robertfox/portfolio"
              onClick={da}
            >
              portfolio
            </Link>
            <Link to="/robertfox/contact" className={styles.link} onClick={da}>
              contact
            </Link>
          </nav>
        </div>
      </div>
      {<HeaderMainInfo anim={props.anim} path={url} />}
    </header>
  );
};
