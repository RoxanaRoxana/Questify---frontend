import React from 'react';
import styles from "./Navbar.module.css"


const Navbar = () => {
    return (
      <div className={styles.navbar}>
        <div>
          <h2 className={styles.title}>Questify</h2>
        </div>
        <div>avatar</div>
        <div>
     icon
            </div>
            <div>logout</div>
      </div>
    );
}

export default Navbar