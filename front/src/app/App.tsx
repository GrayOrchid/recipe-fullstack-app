import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "@/app/styles/main.scss";
import { useThemeStore } from "@/shared";
import { useEffect } from "react";
import { ThemeSwitcher } from "@/features";
const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container">
      {/* <ThemeSwitcher /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
