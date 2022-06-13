import React from 'react';
import styles from "./NewQuest.module.css"

const NewQuest = () => {
  return (
    
      <button type="button" className={styles.button}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#fff"
            d="M2.32 14.48h12.16v-12.16c0-0.839 0.681-1.52 1.52-1.52s1.52 0.681 1.52 1.52v12.16h12.16c0.839 0 1.52 0.681 1.52 1.52s-0.681 1.52-1.52 1.52h-12.16v12.16c0 0.839-0.681 1.52-1.52 1.52s-1.52-0.681-1.52-1.52v-12.16h-12.16c-0.839 0-1.52-0.681-1.52-1.52s0.681-1.52 1.52-1.52z"
          ></path>
        </svg>
      </button>
  
  );
}

export default NewQuest