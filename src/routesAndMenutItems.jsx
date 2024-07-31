import { Home } from "./home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
];

export const menuItems = [
  { title: "Home", link: "/" },
  { title: "Dashboard", link: "/dashboard" },
];
