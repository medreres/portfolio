import React from "react";
import styles from "./About.module.css";
import Coding from "./Coding";
import Hobbies from "./Hobbies";


const About = () => {
  return (
    <>
      <h1 className={styles.aboutMe}>About me</h1>
      <Coding />
      <Hobbies />
    </>
  );
};

export default About;
