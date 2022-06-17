import React from "react";
import { useState } from "react";
import Card from "../../components/Cards/Card";
import styles from "./DoneContainer.module.css";

const DoneContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
    setShow(!show);
  };
    

 

  return (
    <>
      <div className={styles.container}>
        <div className={styles.border_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Done</h1>
          </div>

          <span
            className={isActive ? [styles.activ_button] : [styles.button]}
            onClick={handleClick}
          ></span>
          <div className={styles.line}></div>
        </div>
        {show && (
        <div className={styles.card_container}>
          <Card />
      </div>
      )}
      </div>
    </>
  );
};

export default DoneContainer;
