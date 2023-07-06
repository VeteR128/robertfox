import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Footer } from "../pages/app/footer/Footer";
import { Header } from "../pages/app/header/header";
import { HeaderMainInfo } from "../pages/app/header/headerMainInfo/HeaderMainInfo";
import { useRef, useState, useEffect } from "react";

export const Layout = (props) => {
  const lox = props.anim;
  return (
    <>
      <Header anim={lox} />
      <Outlet />
      <Footer />
    </>
  );
};
