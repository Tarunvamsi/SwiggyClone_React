import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);


