import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

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
});
