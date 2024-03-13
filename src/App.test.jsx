import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("App", () => {
  test("testing App", () => {
    render(<App />);
    // screen.debug(); // prints out the jsx in the App component unto the command line
    expect(screen.getByText(/count/i)).toBeInTheDocument();
  });
});
