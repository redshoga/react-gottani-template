import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

export enum TestAttr {
  Title = "Title"
}

export const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-test={TestAttr.Title}>
        Hello React
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};
