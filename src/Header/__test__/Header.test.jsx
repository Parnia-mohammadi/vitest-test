import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Header from "../Header";

test("header test #1", () => {
  render(<Header title="title header" />);
  expect(screen.getByText("title header")).toBeInTheDocument();
});

test("header test #2", () => {
  render(<Header title="title header" />);
  const h1Element = screen.getByRole("heading", { name: /title/i });
  expect(h1Element).toBeInTheDocument();
});

test("header test #3", () => {
  render(<Header title="title header" />);
  expect(screen.getByTitle("header")).toBeInTheDocument();
});

test("header test #4", async () => {
  render(<Header title="title header" />);
  expect(await screen.findByText("title header")).toBeInTheDocument();
});

test("header test #5", () => {
  render(<Header title="title header" />);
  expect(screen.getByTestId("header-2")).toBeInTheDocument();
});

test("header test #6", () => {
  render(<Header title="title header" />);
  expect(screen.queryByText(/vuejs/i)).not.toBeInTheDocument();
});

test("header test #7", () => {
  render(<Header title="title header" />);
  expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(1);
});

test("header test #8", () => {
  render(<Header title="title header" />);
  expect(screen.getAllByRole("spinbutton", { value: { now: 3 } }).length).toBe(
    1
  );
});
