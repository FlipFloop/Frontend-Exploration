import { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "solid-app-router";

import styles from "./App.module.scss";
import { routes } from "./routes";

import CardEntry from "./components/CardEntry";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <div class={styles.App}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
            <img
              src="../assets/brand/bootstrap-logo-white.svg"
              width="38"
              height="30"
              class="d-inline-block align-top"
              alt="Bootstrap"
              loading="lazy"
            />
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  id="navbarDropdown2"
                  aria-role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main>
          <Route />
      </main>
    </div>
  );
};

export default App;
