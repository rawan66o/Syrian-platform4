import React from "react";
import styles from "./Header.module.css";
import NavBar from "./NavBar";
const CoursesHeader = () => {
  return (
    <div className={styles.CoursesHeader_container}>
      <NavBar />
    </div>
  );
};

export default CoursesHeader;
