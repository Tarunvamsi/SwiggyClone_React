import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";

test("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("list");
  expect(loginButton).toBeInTheDocument();
});

test("Should load header component with cartItems 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/0/); //regex
  expect(cartItem).toBeInTheDocument();
});
