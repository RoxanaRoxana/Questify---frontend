import React, { useState } from "react";
import styles from "./TodayContainer.module.css";
import Card from '../../components/Cards/Card';



const TodayContainer = () => {
 



  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Today</h1>
      <div className={styles.cart_container}>
        <Card/>
      </div>
    </div>
  );
};


export default TodayContainer;
