import React from "react";
import { LandingInfo } from "../../components";
import { LandingForm } from "../../components";
import { Background } from '../../components'
import styles from "./landing.module.css";

function Landing() {

  return (
    <div>
      <div className={styles.container}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div>
      <Background></Background>
    </div>
  );
}

export default Landing;
