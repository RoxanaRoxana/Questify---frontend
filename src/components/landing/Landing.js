import React from "react";
import { LandingInfo } from "..";
import { LandingForm } from "..";
import { Background } from '..'
import styles from "./Landing.module.css";

function Landing() {

  return (
    <div>
      <div className={styles.container}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div >
      <Background></Background>
    </div>
  );
}

export default Landing;