import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello react</div>
      <img src={logo} alt="logo" />
    </div>
  );
};
