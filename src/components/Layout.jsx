import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Footer } from "../pages/app/footer/Footer";
import { Header } from "../pages/app/header/header";
import { HeaderMainInfo } from "../pages/app/header/headerMainInfo/HeaderMainInfo";
import { useRef, useState, useEffect } from "react";

export const Layout = () => {
  const bg = useRef();
  const img = useRef();
  const popup = useRef();

  const [url, setUrl] = useState("/");
  const bah = () => {
    if (url !== "/") {
      bg.current.setAttribute("style", "background-image:url(aboutOne.webp)");
    } else if (url === "/") {
      bg.current.setAttribute("style", "background-image:url(bg.webp)");
    }
  };
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
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
