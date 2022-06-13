import React, { useState } from "react";
import styles from "./Activities.module.css";
import { Backdrop } from "../../Utils/Backdrop/Backdrop";
import { AskQuestion } from "../../Utils/AskQuestion/AskQuestion";

const Activities = ({ activity, onClick, onCreate, onDelete }) => {
  const [deleteToggle, setDeleteToggle] = useState(false);
  // const [createToggle, setCreateToggle] = useState(false);

  const handleDelete = () => {
    setDeleteToggle(!deleteToggle);
  };
  // const handleCreate = () => {
  //   setCreateToggle(!createToggle);
  // };
  const handleCancel = () => {
    setDeleteToggle(false);
    // setCreateToggle(false);
  };

  return (
    <>
      {deleteToggle ? (
        <Backdrop>
          <AskQuestion
            question="Delete this Quest?"
            onApproval={handleDelete}
            onCancel={handleCancel}
            onDelete={onDelete}
          />
        </Backdrop>
      ) : null}
      {/* {createToggle ? (
        <Backdrop>
          <AskQuestion
            question="Create this Quest?"
            onApproval={handleDelete}
            onCancel={handleCreate}
            option="CREATE"
          />
        </Backdrop>
      ) : null} */}
      <div className={styles.card_bottom}>
        <button
          type="button"
          onClick={onClick}
          className={
            activity === "STUFF"
              ? styles.card_stuff
              : activity === "FAMILY"
              ? styles.card_family
              : activity === "HEALTH"
              ? styles.card_health
              : activity === "LEARNING"
              ? styles.card_learning
              : activity === "LEISURE"
              ? styles.card_leisure
              : styles.card_work
          }>
          <p className={styles.card_activity}>{activity}</p>
          <svg
            className={styles.arrow_icon}
            viewBox="0 0 85 32"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M42.667 32l-36.95-32h73.901l-36.95 32z"></path>
          </svg>
        </button>
        <div className={styles.card_buttons}>
          <button
            type="button"
            className={styles.card_clear}
            onClick={handleDelete}>
            <svg
              className={styles.clear_icon}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
            </svg>
          </button>
          <div className={styles.card_wall}></div>
          <button className={styles.card_create} onClick={onCreate} type="button">
            CREATE
          </button>
        </div>
      </div>
    </>
  );
};

export { Activities };
