import React from "react";
import { useState } from "react";
import styles from "./DoneContainer.module.css";

const DoneContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Done</h1>
      </div>

      <span
        className={isActive ? [styles.activ_button] : [styles.button]}
        onClick={handleClick}
      ></span>
      <div className={styles.line}></div>
    </div>
  );
};

export default DoneContainer;
