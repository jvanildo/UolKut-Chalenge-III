import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { RegisterDetails } from "../pages/RegisterDetails";
import { Login } from "../pages/Login";
import { EditProfile } from "../pages/EditProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "register/details",
            element: <RegisterDetails />,
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
