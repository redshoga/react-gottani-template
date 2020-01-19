import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { ROUTES } from "./constants/routes";

// pages
import { CounterPage } from "./pages/CounterPage";
import { PostsPage } from "./pages/PostsPage";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path={ROUTES.ROOT}>
            <Home />
          </Route>
          <Route path={ROUTES.COUNTER}>
            <CounterPage />
          </Route>
          <Route path={ROUTES.LOGO}>
            <Logo />
          </Route>
          <Route path={ROUTES.POSTS}>
            <PostsPage />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis
        ipsum enim inventore perspiciatis! Quibusdam voluptatem maiores ullam
        commodi officia at inventore nemo libero illum. Excepturi tenetur enim
        qui dicta?
      </p>
    </div>
  );
};
