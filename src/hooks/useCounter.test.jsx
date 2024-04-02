import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("#1 : should render the initial value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
});
