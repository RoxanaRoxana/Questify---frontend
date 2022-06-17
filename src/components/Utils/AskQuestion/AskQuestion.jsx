import React from "react";
import styles from "./AskQuestion.module.css";

const AskQuestion = ({ question, onApproval, onCancel, onDelete }) => {
  return (
    <div className={styles.bg}>
      <p className={styles.question}>{question}</p>
      <div className={styles.row}>
        <button
          className={styles.cancel}
          type="button"
          value="CANCEL"
          onClick={onCancel}>
          CANCEL
        </button>
        <div className={styles.wall}></div>
        <button
          className={styles.delete}
          type="button"
          value="DELETE"
          onClick={()=>{onApproval(); onDelete()}}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export { AskQuestion };
