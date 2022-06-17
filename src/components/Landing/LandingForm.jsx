import styles from "./Landing.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingForm() {

  const navigate = useNavigate();


  const handleClick = () => {
   navigate('/main')
  }


  return (
    <div className={styles.landingFormContainer}>
      <p className={styles.landingParagraphForm}>
        Write your email to sign up or log in
      </p>
      <form >
        <input
          className={styles.landingFormInput}
          type="email"
          placeholder="Email"
         
          required
        ></input>
        <input
          className={styles.landingFormInput}
          type="password"
          placeholder="Password"
          required
          
        ></input>



        <button className={styles.landingFormButton} onClick={handleClick}>
          go!
        </button>

      </form>
    </div>
  );
}

export default LandingForm;
