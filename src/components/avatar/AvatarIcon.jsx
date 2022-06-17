import React from 'react'
import Avatar from "react-avatar";
import styles from './AvatarIcon.module.css'

const AvatarIcon = () => {
  return (
    <div className={styles.avatar}>
     
      <Avatar
        className={styles.avatar_icon}
        name="J"
        round="50%"
        size="30"
        color="#3e4e6c"
        textSizeRatio={2}
      />
      <p className={styles.avatar_name}>John's Quest Log</p>
    </div>
  );
}

export default AvatarIcon;