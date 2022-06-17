import React, { useState } from "react";
import styles from "./TodayContainer.module.css";
import { CardQuest } from "../../components/Cards/CardQuest";

const TodayContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Today</h1>
      <div className={styles.cart_container}>
        <CardQuest />
      </div>
    </div>
  );
};

export default TodayContainer;
