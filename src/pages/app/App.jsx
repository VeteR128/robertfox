import React from "react";
import { Header } from "./header/Header.jsx";
import styles from "./App.module.scss";
import { Footer } from "./footer/Footer.jsx";
import { Main } from "./main/Main.jsx";

function App() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
