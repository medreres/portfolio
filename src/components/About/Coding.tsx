import React from "react";
import styles from "./Coding.module.css";
import pic from "../../assets/coding.png";
import { useInView } from "react-intersection-observer";

const Coding = () => {
  const { ref, inView } = useInView();
  const classes = `${styles.section} ${inView? styles.visible : styles.hidden}`;
  return (
    <section className={classes} ref={ref}>
      <main className={styles.main}>
        <h2 className={styles.title}>Coding</h2>
        <p>
          I have always been taken with programming. Back in school days I used
          to make applications of any kinds, especially games as 2048 or Snake.
          IDE Lazarus made a great deal helping me to grasp basic concepts of
          programming. As days went by, I finished school and started actively
          studying C and C++ languages, which helped me to gain an understanding
          of fundamentals of programming: algorithms and data structures. After
          finishing first year, I came to a realization that Web Development is
          a thriving branch of IT which I fancy. That's how I got to know with
          HTML, CSS, JavaSript etc. Nowadays I am profusely studying
          cutting-edge techonologies such as React, Next.js and that's where my
          journey in programming truly started!
        </p>
      </main>
      <aside>
        <img src={pic} className={styles.pic} alt="author" />
      </aside>
    </section>
  );
};

export default Coding;
