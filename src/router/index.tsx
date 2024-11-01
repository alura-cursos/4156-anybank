import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import RootLayout from "../RootLayout";
import Login from "../Login";
import Register from "../Register";
import AuthLayout from "../AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ]
      },
    ],
  },
]);
