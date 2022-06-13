import styles from "./landing.module.css";
import React from "react";

function LandingInfo() {
  const infoStyles = styles.info;
  const landingHeaderStyles = styles.landingHeader;
  const landingParagraphStyles = styles.landingParagraph;

  return (
    <div className={infoStyles}>
      <h1 className={landingHeaderStyles}>Questify</h1>
      <p className={landingParagraphStyles}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
    </div>
  );
}

export default LandingInfo;
