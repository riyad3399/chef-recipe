import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import Header from "./pages/Header/Header.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

import ViewRecipes from "./pages/ViewRecipes/ViewRecipes.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "header",
        element: <Header></Header>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/viewrecipes/:id",
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        loader: ({ params }) => {
         return fetch(`https://chef-recipe-server-side-riyad3399.vercel.app/alldatas/${params.id}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
