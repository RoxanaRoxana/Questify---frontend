import React from "react";
import styles from "./DoneContainer.module.css";

const DoneContainer = () => {


  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Done</h1>
      </div>
        <span className={styles.button} ></span>
      <div className={styles.line}></div>
    </div>
  );
};

export default DoneContainer;
