import styles from "./landing.module.css";
import React from "react";

function LandingForm() {

  return (
    <div className={styles.landingFormContainer}>
      <p className={styles.landingParagraphForm}>
        Write your email to sign up or log in
      </p>
      <form>
        <input
          className={styles.landingFormInput}
          type="text"
          placeholder="Email"
        ></input>
        <input
          className={styles.landingFormInput}
          type="text"
          placeholder="Password"
        ></input>
        <button className={styles.landingFormButton}>go!</button>
      </form>
    </div>
  );
}

export default LandingForm;
