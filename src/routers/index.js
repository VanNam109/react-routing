import HomePage from "../container/Home/HomePage";
import HomeLayout from "../container/Home";
import AboutPage from "../container/Home/AboutPage";
import ListMovie from "../container/Home/ListMovie";
import AdminLayout from "../container/Admin";
import AddUserPage from "../container/Admin/AddUserPage";
import DashboardPage from "../container/Admin/DashboardPage";
import Detail from "../container/DetailPage";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomeLayout,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMovie,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/admin",
    component: AdminLayout,
  },
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];
export { routesHome, routesAdmin };
