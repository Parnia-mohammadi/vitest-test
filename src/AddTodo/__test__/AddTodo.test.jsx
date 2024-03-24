import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import AddTodo from "../AddTodo";

const mockedSetTodos = vi.fn();

test("render input element #1", () => {
  render(<AddTodo setTodos={() => {}} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  expect(inputEl).toBeInTheDocument();
});
test("should be able to type in input #2", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "coding" } });
  expect(inputEl.value).toBe("coding");
});
test("should have empty input after button clicked #3", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "coding" } });
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(inputEl.value).toBe("");
});
test("testing setTodos is called after button's clicked #4", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "coding" } });
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockedSetTodos).toBeCalled();
});
