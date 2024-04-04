import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  test("#1 : should render the initial value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("#2 : should render the same value as initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCounter: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  test("#3 : should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("#4 : should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
