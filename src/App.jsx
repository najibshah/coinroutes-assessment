import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveAppBar } from "./layout";
import { routes } from "./routesAndMenutItems";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
