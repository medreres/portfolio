import React, { useEffect, useState } from "react";
import styles from "./Hobbies.module.css";
import pic from "../../assets/hobby.png";
import { useInView } from "react-intersection-observer";

const Hobbies = () => {
  const { ref, inView } = useInView();
 
  const classes = `${styles.section} ${inView ? styles.visible : styles.hidden}`;

  return (
    <section className={classes} ref={ref}>
      <main className={styles.main}>
        <h2 className={styles.title}>Hobbies</h2>
        <p>
          Despite being enthusiatic about programming, I also get from playing
          Volleyball. Back in school I used to go with my team for various
          competitions and oftentimes we took either first or second places!
        </p>
      </main>
      <aside>
        <img src={pic} className={styles.pic} alt="author" />
      </aside>
    </section>
  );
};

export default Hobbies;
