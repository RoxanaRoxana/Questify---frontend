import React, { useEffect } from "react";
import LandingInfo from "../Landing/LandingInfo";
import LandingForm from "../Landing/LandingForm";
import Background from "../Landing/Background";
import styles from "./Landing.module.css";

function Landing() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div>
      <Background></Background>
    </div>
  );
}

export default Landing;
