import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Footer } from "../pages/app/footer/Footer";
import { HeaderMainInfo } from "../pages/app/header/headerMainInfo/HeaderMainInfo";
import { useRef, useState, useEffect } from "react";

export const Layout = () => {
  const img = useRef();
  const popup = useRef();
  const [url, setUrl] = useState("/");
  useEffect(() => {
    headerContent();
  }, [url]);
  const da = () => {
    setUrl(window.location.pathname);
  };

  const popupClose = (e) => {
    if (img.current.className === e.target.className) {
      popup.current.setAttribute("style", "visibility:visible;opacity:1");
    } else {
      popup.current.setAttribute("style", "visibility:hidden;opacity:0");
    }
  };
  let headerContent = () => {
    if (url === "/") {
      return <HeaderMainInfo />;
    } else {
      return <></>;
    }
  };
  return (
    <>
      <header className={styles.header} onClick={(e) => popupClose(e)}>
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
          <Link to="/contact" className={styles.button}>
            contact
          </Link>
          <img
            className={styles.edit}
            src="Button.svg"
            alt="Button"
            ref={img}
          />
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
        {headerContent()}
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
