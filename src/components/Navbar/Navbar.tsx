import React, { CSSProperties, useEffect, useState } from "react";
import { NavLink, NavLinkProps as BaseNavLinkProps } from "react-router-dom";
import "./Navbar.css";
import menuIcn from '../../assets/menu.png'
import closeIcn from '../../assets/close.png'
import { isJsxClosingFragment } from "typescript";

interface NavLinkProps extends BaseNavLinkProps {
  activeClassName?: string;
  activeStyle?: CSSProperties;
}

// const NavBar = () => {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   let classes = `${styles.navbar} ${show ? "" : styles.hide}`;

//   const controlNavbar =  () => {
//     if (typeof window !== "undefined") {
//       if (window.scrollY > lastScrollY) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }

//       // remember last scroll
//       setLastScrollY(window.scrollY);
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", controlNavbar);

//       return () => {
//         window.removeEventListener("scroll", controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//     <nav className={classes}>
//       <ul className={styles.ul}>
//         <li className={styles["li-item"]}>
//           <NavLink
//             className={(navData) =>
//               `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
//             }
//             to="/"
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className={styles["li-item"]}>
//           <NavLink
//             className={(navData) =>
//               `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
//             }
//             to="/about"
//           >
//             About
//           </NavLink>
//         </li>
//         <li className={styles["li-item"]}>
//           <NavLink
//             className={(navData) =>
//               `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
//             }
//             to="/skills"
//           >
//             Skills
//           </NavLink>
//         </li>
//         <li className={styles["li-item"]}>
//           <NavLink
//             className={(navData) =>
//               `${styles["li-link"]} ${navData.isActive ? styles['li-link-active'] : ""}`
//             }
//             to="/contact"
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

const NavBar = () => {
  const [sideBarShow, setSideBarShow] = useState(false);
  const styles = `menu-toggle ${sideBarShow? 'active' : ''}`;
  return (
    <>
      <div className={styles} onClick={() => setSideBarShow(prev => !prev)}>
        {!sideBarShow && <img src={menuIcn} alt="menu" />}
        {sideBarShow && <img src={closeIcn} alt="menu close" />}
      </div>
      <nav className={sideBarShow ? 'active' : ''}>
        <ul>
          <li>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
          </li>
          <li>
            <NavLink
            className={(navData) =>
              `${navData.isActive ? 'active' : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          </li>
          <li>
          <NavLink
            className={(navData) =>
              `${navData.isActive ? 'active' : ""}`
            }
            to="/skills"
          >
            Skills
          </NavLink>
          </li>
          <li>
          <NavLink
            className={(navData) =>
              `${navData.isActive ? 'active' : ""}`
            }
            to="/projects"
          >
            Projects
          </NavLink>
          </li>
          <li>
          <NavLink
            className={(navData) =>
              `${navData.isActive ? 'active' : ""}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </>
  );
};

export default NavBar;
