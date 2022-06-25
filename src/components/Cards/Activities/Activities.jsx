import React, { useState } from "react";
import styles from "./Activities.module.css";
import { ButtonsMain } from "../ButtonsMain/ButtonsMain";

const Activities = ({
  activity,
  onClick,
  onCreate,
  onDelete,
  onAccept,
  createMode,
  updateMode,
}) => {
  return (
    <>
      <div className={styles.card_bottom}>
        {createMode || updateMode ? (
          <button
            type="button"
            onClick={onClick}
            className={
              activity === "Stuff"
                ? styles.card_stuff
                : activity === "Family"
                ? styles.card_family
                : activity === "Health"
                ? styles.card_health
                : activity === "Learning"
                ? styles.card_learning
                : activity === "Leisure"
                ? styles.card_leisure
                : styles.card_work
            }
          >
            <p className={styles.card_activity}>{activity}</p>
            <svg
              className={styles.arrow_icon}
              viewBox="0 0 85 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42.667 32l-36.95-32h73.901l-36.95 32z"></path>
            </svg>
          </button>
        ) : (
          <div
            className={
              activity === "Stuff"
                ? `${styles.card_stuff} ${styles.pointer_off}`
                : activity === "Family"
                ? `${styles.card_family} ${styles.pointer_off}`
                : activity === "Health"
                ? `${styles.card_health} ${styles.pointer_off}`
                : activity === "Learning"
                ? `${styles.card_learning} ${styles.pointer_off}`
                : activity === "Leisure"
                ? `${styles.card_leisure} ${styles.pointer_off}`
                : `${styles.card_work} ${styles.pointer_off}`
            }
          >
            <p className={styles.card_activity}>{activity}</p>
          </div>
        )}
        <ButtonsMain
          createMode={createMode}
          updateMode={updateMode}
          onCreate={onCreate}
          onDelete={onDelete}
          onAccept={onAccept}
        />
      </div>
    </>
  );
};

export { Activities };
