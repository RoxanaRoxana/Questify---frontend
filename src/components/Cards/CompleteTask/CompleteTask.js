import styles from "./CompleteTask.module.css";
import { ReactComponent as Arrow } from "../../../images/completeTask/arrow.svg";
import { ReactComponent as Platform } from "../../../images/completeTask/platform.svg";
import { ReactComponent as Shield } from "../../../images/completeTask/shield.svg";
import { ReactComponent as Dart } from "../../../images/completeTask/dart.svg";
import { ReactComponent as Clouds } from "../../../images/completeTask/clouds.svg";
import { ReactComponent as Trophy } from "../../../images/completeTask/trophy.svg";
import { Animated } from "react-animated-css";

function CompleteTask({ type, title }) {
  console.log(title)
  return (
    <div className={styles.completeWrap}>
      <div className={styles.complete}>
        <Animated animationIn="fadeInLeft">
          <p
            className={
              type === "Challenge"
                ? styles.completeInfo_challange
                : styles.completeInfo
            }
          >
            COMPLETED:
          </p>
        </Animated>
        <Animated animationInDelay={1500} animationIn={"lightSpeedIn"}>
          <Animated animationInDelay={2500} animationIn={"rubberBand"}>
            <span className={styles.questName}>{title}</span>
          </Animated>
        </Animated>
      </div>
      <div className={styles.award}>
        <Animated animationInDelay={1000} animationIn="fadeInDown">
          {type === "Challenge" ? (
            <Animated animationInDelay={2000} animationIn="tada">
              <Trophy className={styles.trophy}></Trophy>
            </Animated>
          ) : (
            <Shield className={styles.shield}></Shield>
          )}
        </Animated>
        <Animated animationInDelay={1000} animationIn={"fadeInUp"}>
          <Platform
            className={
              type === "Challenge" ? styles.platform_challange : styles.platform
            }
          ></Platform>
        </Animated>
        {type === "Challenge" ? null : <Dart className={styles.dart}></Dart>}
        <Clouds
          className={
            type === "Challenge" ? styles.clouds_challange : styles.clouds
          }
        ></Clouds>
      </div>
      <div className={styles.continueWrap}>
        <Animated animationInDelay={3200} animationIn="fadeInUp">
          <button
            className={
              type === "Challenge" ? styles.button_challange : styles.button
            }
          >
            Continue <Arrow className={styles.arrow}></Arrow>
          </button>
        </Animated>
      </div>
    </div>
  );
}

export default CompleteTask;