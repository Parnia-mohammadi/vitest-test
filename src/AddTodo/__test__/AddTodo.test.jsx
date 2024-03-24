import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AddTodo from "../AddTodo";

test("render input element #1",()=>{
    render(<AddTodo setTodos={()=>{}} todos={[]}/>);
    const inputEl = screen.getByLabelText("todo");
    expect(inputEl).toBeInTheDocument();
});