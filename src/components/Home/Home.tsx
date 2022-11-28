import React from "react";
import styles from "./Home.module.css";
import pic from "../../assets/pic.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const classes = `${styles.section} ${inView ? "visible" : "invisible"}`;

  return (
    <section className={classes} ref={ref}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I am Max.</h1>
        <p className={styles.paragraph}>
          I'm a Ukrainian 🇺🇦 Software Developer, who loves solving complex
          problems.
        </p>
        <br />
        <p className={styles.paragraph}>
          Outgoing and ambitious lad, eager to use my programming experience and
          communication skills to work as an Web Developer. Without working
          experience. Showed great result studying in middle school and keep
          doing so in high school. Thirst for knowledge and hard-working person
        </p>
      </main>
      <aside>
        <img src={pic} className={styles.pic} alt="author" />
      </aside>
    </section>
  );
};

export default About;
