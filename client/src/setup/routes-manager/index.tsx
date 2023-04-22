import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import Home from "~/pages/home";
import Welcome from "~/pages/home/welcome";
import Login from "~/pages/home/login";
import Register from "~/pages/home/register";
import Activate from "~/pages/home/activate";
import Boards from "~/pages/boards";
import BoardsHome from "~/pages/boards/home";
import BoardDetail from "~/pages/boards/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "activate/:uid/:token",
            element: <Activate />,
          },
        ],
      },
      {
        path: "/boards",
        element: <Boards />,
        children: [
          {
            index: true,
            element: <BoardsHome />,
          },
          {
            path: ":id",
            element: <BoardDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
