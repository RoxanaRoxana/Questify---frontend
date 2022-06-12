import React from "react";
import { LandingInfo } from "../../components";
import { LandingForm } from "../../components";
import { Background } from '../../components'
import styles from "./landing.module.css";

function Landing() {
  const landingClasses = styles.container;

  return (
    <div>
      <div className={landingClasses}>
        <LandingInfo></LandingInfo>
        <LandingForm></LandingForm>
      </div>
      <Background></Background>
    </div>
  );
}

export default Landing;
