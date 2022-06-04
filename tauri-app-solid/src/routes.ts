import { lazy, sus } from "solid-js";
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
    path: "**",
    // component: lazy(() => import('./errors/404')),
  },
];
