import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  TodayContainer,
  TomorrowContainer,
  DoneContainer,
} from "../../containers";
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className={styles.section_container}>
        <TodayContainer />
        <TomorrowContainer />
        <DoneContainer />
      </div>
    </>
  );
};

export default Layout;
