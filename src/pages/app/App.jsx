import React from "react";
import { Header } from "./header/Header.jsx";
import styles from "./App.module.scss";
import { Main } from "./main/Main.jsx";

function App() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
