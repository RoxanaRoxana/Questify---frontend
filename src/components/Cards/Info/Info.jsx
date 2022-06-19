import React from "react";
import styles from "./Info.module.css";

const Info = ({ cardType, calendar, title }) => {
  return (
    <div className={styles.quest_info}>
      <p className={styles.quest_task}>{title}</p>
      <p className={styles.quest_time}>
        {cardType === "quest" ? `${calendar} ` : `by ${calendar} `}
      </p>
    </div>
  );
};

export { Info };
