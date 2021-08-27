import React from "react";
import styles from "../styles/user.module.css";

// We expect the following props to be passed in:
// id: the id of the user
// email: the email of the user
// firstName: the first name of the user
// lastName: the last name of the user
// avatar: the avatar of the user

export const User = (props) => {
  return (
    <div className={styles.user}>
      <img src={props.avatar} alt="avatar" className={styles.avatar} />
      <div className={styles.description}>
        <h2 className={styles.username}>
          {props.firstName} {props.lastName}
        </h2>
        <p className={styles.email}>{props.email}</p>
      </div>
    </div>
  );
};
