import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
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
