import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components import
import Layout from "./components/layout/Layout";

// pages import
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { scrollMode: "pathname" },
      },
      {
        path: "login",
        element: <SignInPage />,
        handle: { scrollMode: "pathname" },
      },
      {
        path: "signup",
        element: <SignUpPage />,
        handle: { scrollMode: "pathname" },
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
