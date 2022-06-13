import React from "react";
import styles from "./ModalTimer.module.css";
import Flatpickr from "react-flatpickr";

const ModalTimer = ({onClose, setTime, time}) => {
  const date = new Date();

  return (
    <div className={styles.modal}>
      <Flatpickr 
      options={{
        minDate: {date},
        enableTime: true
      }}
      onChange={setTime}
      onReady={onClose}
      />
    </div>
  );
};

export { ModalTimer };
