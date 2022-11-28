import React, { CSSProperties, useEffect, useState } from "react";
import { NavLink, NavLinkProps as BaseNavLinkProps } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavLinkProps extends BaseNavLinkProps {
  activeClassName?: string;
  activeStyle?: CSSProperties;
}

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let classes = `${styles.navbar} ${show ? "" : styles.hide}`;

  const controlNavbar =  () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      // remember last scroll
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={classes}>
      <ul className={styles.ul}>
        <li className={styles["li-item"]}>
          <NavLink
            className={(navData) =>
              `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className={styles["li-item"]}>
          <NavLink
            className={(navData) =>
              `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles["li-item"]}>
          <NavLink
            className={(navData) =>
              `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
