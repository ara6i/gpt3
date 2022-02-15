import React from "react";
import styles from "./features.module.css";
const Features = (props) => {
  return (
    <div className={props.flex  ? styles.row : styles.col}>
      <div className={styles.title}><h2>{props.title}</h2></div>
      <div className={props.width ? styles.text : styles.full}>{props.text}</div>
    </div>
  );
};

export default Features;
