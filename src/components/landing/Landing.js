

import  LandingInfo  from "../landing/LandingInfo";
import LandingForm  from "../landing/LandingForm";
import  Background  from "../landing/Background";
import styles from "./landing.module.css";




import React, {useEffect} from "react";

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
      </div >
      <Background></Background>
    </div>
  );
}

export default Landing;
