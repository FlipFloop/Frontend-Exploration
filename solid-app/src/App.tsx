import type { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "solid-app-router";

import logo from "./logo.svg";
import { routes } from "./routes";
import styles from "./App.module.scss";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  return (
    <div class={styles.App}>
      <main>
        <Route />
      </main>
    </div>
  );
};

export default App;
