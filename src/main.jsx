import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
import Chef from "./pages/Chef/Chef.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

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
        element: <ViewRecipes></ViewRecipes>,
        loader: ({ params }) => {
          fetch(`http://localhost:5000/alldatas/${params.id}`);
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
