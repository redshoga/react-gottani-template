import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { CounterContainer } from "./containers/CounterContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/logo">ReactLogo</Link>
        </li>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/counter">
            <CounterContainer />
          </Route>
          <Route path="/logo">
            <Logo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
