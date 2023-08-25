import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { EditProfile } from "../pages/EditProfile";
import { RecoverPassword } from "../pages/RecoverPassword";
import { RecoverDetail } from "../pages/RecoverDetail";

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
            path: "recover-password",
            element: <RecoverPassword />,
          },
          {
            path: "recover-password/detail",
            element: <RecoverDetail />,
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
