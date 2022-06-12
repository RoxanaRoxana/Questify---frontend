import React from "react";
import LandingInfo from "./LandingInfo";
import LandingForm from "./LandingForm";
import Background from "./Background";
import styles from "./landing.module.css";

function Landing() {
  const landingClasses = [styles.container];

  return (
    <div>
      <div className={landingClasses.join("")}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div>
      <Background></Background>
    </div>
  );
}

export default Landing;
