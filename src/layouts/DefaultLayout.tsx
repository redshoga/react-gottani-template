import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <section>
        <h1>Menu</h1>
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
        <h1>Content</h1>
        <main>{children}</main>
      </section>
    </>
  );
};
