import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({children}) => {


  return(
    <div className={styles.backdrop}>
      {children}
    </div>
  )
}

export {Backdrop}