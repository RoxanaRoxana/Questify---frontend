import React from "react";
import  LandingInfo  from "../landing/LandingInfo";
import LandingForm  from "../landing/LandingForm";
import  Background  from "../landing/Background";
import styles from "./landing.module.css";

function Landing() {

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
