import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body>,</Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/restaurants/:resId", //resId can be dynamic based on Restaurant
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
