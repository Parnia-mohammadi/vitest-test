import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Header from "../Header";

test("header test", () => {
  render(<Header title="title header" />);
  expect(screen.getByText("title header")).toBeInTheDocument();
});
