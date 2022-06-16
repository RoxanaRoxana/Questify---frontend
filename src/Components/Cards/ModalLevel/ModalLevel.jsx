import React from "react";
import styles from "./ModalLevel.module.css";

const ModalLevel = ({onClick}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.select} >
        <div className={styles.modal_circle_blue}></div>
        <button type='button' value='Easy' className={styles.modal_button} onClick={onClick}>
          Easy
        </button>
      </div>
      <div className={styles.select} >
        <div className={styles.modal_circle_green}></div>
        <button type='button' value='Normal' className={styles.modal_button} onClick={onClick}>
          Normal
        </button>
      </div>
      <div className={styles.select} >
        <div className={styles.modal_circle_red}></div>
        <button type='button' value='Hard' className={styles.modal_button} onClick={onClick}>
          Hard
        </button>
      </div>
    </div>
  );
};

export { ModalLevel };
