import styles from "./landing.module.css";
import React from "react";

function LandingForm() {
  const landingFormParagraph = styles.landingParagraphForm;
  const landingFormContainer = styles.landingFormContainer;
  const landingFormInput = styles.landingFormInput;
  const landingFormButton = styles.landingFormButton;

  return (
    <div className={landingFormContainer}>
      <p className={landingFormParagraph}>
        Write your email to sign up or log in
      </p>
      <form>
        <input
          className={landingFormInput}
          type="text"
          placeholder="Email"
        ></input>
        <input
          className={landingFormInput}
          type="text"
          placeholder="Password"
        ></input>
        <button className={landingFormButton}>go!</button>
      </form>
    </div>
  );
}

export default LandingForm;
