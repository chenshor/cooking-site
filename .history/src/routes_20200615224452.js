import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import Search from "./pages/SearchPage";
import Recipe from "./pages/RecipePage";
import Register from "./pages/RegisterPage";
import About from "./pages/AboutPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipePage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
];

export default routes;
