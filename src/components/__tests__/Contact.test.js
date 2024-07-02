import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact us test cases", () => {
  test("Should Load contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  test("should render Button inside contact us", () => {
    render(<ContactUs></ContactUs>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should Check if input box is rendered", () => {
    render(<ContactUs></ContactUs>);
    const input = screen.getByPlaceholderText("First Name");
    expect(input).toBeInTheDocument();
  });

  test("should Load all the  input boxes", () => {
    render(<ContactUs></ContactUs>);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(5);
  });
});
