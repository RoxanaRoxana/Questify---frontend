import styles from "./landing.module.css";

function LandingInfo(props) {
  const infoStyles = [styles.info];
  const landingHeaderStyles = [styles.landingHeader];
  const landingParagraphStyles = [styles.landingParagraph];

  return (
    <div className={infoStyles.join("")}>
      <h1 className={landingHeaderStyles.join("")}>Questify</h1>
      <p className={landingParagraphStyles.join("")}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
    </div>
  );
}

export default LandingInfo;
