import React from "react";
import styles from "../styles/navigation.module.css";

export const Navigation = (props) => {
  return (
    <nav
      className={`${styles.navigation} ${
        props.vertical && styles.navigationVert
      } ${props.className}`}
    >
      <a href="#" className={styles.navigationLink}>
        Home
      </a>
      <a href="#" className={styles.navigationLink}>
        About
      </a>
      <a href="#" className={styles.navigationLink}>
        Contact
      </a>
    </nav>
  );
};
