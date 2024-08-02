import { Home } from "./home";
import { Dashboard } from "./dashboard";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export const menuItems = [
  { title: "Home", link: "/" },
  { title: "Dashboard", link: "/dashboard" },
];
