import React from "react";
import Card from "../../components/Cards/Card";
import styles from "./TomorrowContainer.module.css";


const TomorrowContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Tomorrow</h1>
      <div className={styles.cart_container}>
<Card/>
      </div>
    </div>
  );
};

export default TomorrowContainer;
