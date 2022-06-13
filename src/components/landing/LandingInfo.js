import styles from "./landing.module.css";
import React from "react";

function LandingInfo() {

  return (
    <div className={styles.info}>
      <h1 className={styles.landingHeader}>Questify</h1>
      <p className={styles.landingParagraph}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
    </div>
  );
}

export default LandingInfo;
