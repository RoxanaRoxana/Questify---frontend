import React from "react";
import styles from "./ModalTimer.module.css";
import Flatpickr from "react-flatpickr";

const ModalTimer = ({ onClose, setTime, cardType }) => {
  return (
    <div className={styles.modal}>
      <Flatpickr
        className={styles.input}
        options={
          cardType === "quest"
            ? {
                enableTime: true,
                minDate: new Date(),
                maxDate: new Date().fp_incr(2),
              }
            : {
                enableTime: true,
                minDate: new Date(),
                maxDate: new Date().fp_incr(7),
              }
        }
        onChange={(date) => setTime(date)}
        onClose={onClose}
      />
    </div>
  );
};

export { ModalTimer };
