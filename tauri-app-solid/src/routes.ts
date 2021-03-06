import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/Home";
import AboutData from "./pages/About.data";
import Account from "./pages/Account";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/About")),
    data: AboutData,
  },
  {
    path: "/auth",
    component: lazy(() => import("./pages/Auth")),
  },
  {
    path: "/demo",
    component: lazy(() => import("./pages/Demo")),
  },
  {
    path: "/newCard",
    component: lazy(() => import("./pages/CreateCard")),
  },
  {
    path: "/account",
    // component: Account(key=session().user.id, session=session())
  },
  {
    path: "**",
    // component: lazy(() => import('./errors/404')),
  },
];
