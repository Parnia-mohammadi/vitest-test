import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ErrorMessage from "../ErrorMessage";

test("ErrorMessage #1", () => {
  render(<ErrorMessage count={1} />);
  expect(screen.getByText(/1 Error occured./i)).toBeInTheDocument();
});
test("ErrorMessage #2", () => {
  render(<ErrorMessage count={2} />);
  expect(screen.getByText(/2 Errors occured/i)).toBeTruthy();
});
test("ErrorMessage #3", () => {
  render(<ErrorMessage count={1} />);
  expect(screen.getByRole("note")).toBeVisible();
});
test("ErrorMessage #4", () => {
  render(<ErrorMessage count={2} />);
  expect(screen.getByText(/2 Errors occured./i)).toHaveTextContent(
    "2 Errors occured."
  );
});
test("ErrorMessage #5", () => {
  render(<ErrorMessage count={2} />);
  expect(screen.getByText(/2 Errors occured./i).textContent).toBe(
    "2 Errors occured."
  );
});
test("ErrorMessage #6", () => {
  render(<ErrorMessage count={1} />);
  expect(screen.getByText(/1 Error occured./i)).toContainHTML(
    "<span>hi</span>"
  );
});
test("ErrorMessage #7", () => {
  render(<ErrorMessage count={1} />);
  const span = screen.getByText("hi");
  expect(screen.getByText(/1 error occured/i)).toContainElement(span);
});
test("ErrorMessage #8", () => {
  render(<ErrorMessage count={1} />);
  expect(screen.getByRole("textbox")).toHaveValue("parnia");
});
test("ErrorMessage #9",()=>{
    render(<ErrorMessage count={1}/>);
    expect(screen.queryByText(/3 errors occured/i)).not.toBeInTheDocument();
})
