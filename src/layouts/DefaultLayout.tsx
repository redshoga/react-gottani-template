import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./DefaultLayout.module.scss";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>react-gottani-template</h1>

      <section>
        <h2>Menu</h2>
        <li>
          <Link to={ROUTES.ROOT}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.COUNTER}>Counter</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGO}>ReactLogo</Link>
        </li>
        <li>
          <Link to={ROUTES.POSTS}>Posts</Link>
        </li>
      </section>

      <hr />

      <section>
        <h2>Content</h2>
        <main>{children}</main>
      </section>
    </div>
  );
};
