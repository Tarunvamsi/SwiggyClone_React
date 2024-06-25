import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";

const AppLayout = () => {
  // useEffect(() => {
  //   alert(
  //     "Please Install Allow CORS chrome extension to view this website.\nCORS error is under fix ⚒..."
  //   );
  // }, []);
  // Authentication code
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Tarun Vamsi",
    };
    setUserName(data.name);
  }, []);

  // Authentication dummy logic ends here
  // const showHeader = !["/login", "/signup"].includes(location.pathname);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* {showHeader || <Header />} */}
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>{" "}
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      // {
      //   path: "/",
      //   element: <Body></Body>,
      // },
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..please wait</h1>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..please wait</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", //resId can be dynamic based on Restaurant
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/home",
        element: <Body></Body>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
