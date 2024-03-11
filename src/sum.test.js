import { test, expect } from "vitest";
import sum from "./sum";
test("sum of any numbers", () => {
  expect(sum(1, 2,3)).toEqual(6);
});
test("test 5 numbers",()=>{
    expect(sum(1,2,3,4,5)).toEqual(15);
})