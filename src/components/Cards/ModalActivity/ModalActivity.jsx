import React from "react";
import styles from "./ModalActivity.module.css";

const ModalActivity = ({ onClick }) => {
//   const handleMissClick = (e) =>{
//     if(e.currentTarget !== e.target) {

//     }
//   }
  return (
    <div className={styles.modal}>
      <div className={styles.select}>
      <button
        type="button"
        value="STUFF"
        className={styles.modal_button}
        onClick={onClick}>
        STUFF
      </button>

      <button
        type="button"
        value="FAMILY"
        className={styles.modal_button}
        onClick={onClick}>
        FAMILY
      </button>

      <button
        type="button"
        value="HEALTH"
        className={styles.modal_button}
        onClick={onClick}>
        HEALTH
      </button>

      <button
        type="button"
        value="LEARNING"
        className={styles.modal_button}
        onClick={onClick}>
        LEARNING
      </button>

      <button
        type="button"
        value="LEISURE"
        className={styles.modal_button}
        onClick={onClick}>
        LEISURE
      </button>

      <button
        type="button"
        value="WORK"
        className={styles.modal_button}
        onClick={onClick}>
        WORK
      </button>
      </div>
    </div>
  );
};

export { ModalActivity };
