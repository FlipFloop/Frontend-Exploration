import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/Home";
import AboutData from "./pages/About.data";

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
    path: "/account",
    component: lazy(() => import("./pages/Account")),
  },
  {
    path: "**",
    // component: lazy(() => import('./errors/404')),
  },
];
