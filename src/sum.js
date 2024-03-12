export default function sum(...numbers) {
  return numbers.reduce((a, b) => a + b + 0);
}
if (import.meta.vitest) {
  const { test, expect, describe } = import.meta.vitest;
  describe("group #2", () => {
    test("sum of any numbers", () => {
      expect(sum(1, 2, 3)).toEqual(6);
    });
    test("test 5 numbers", () => {
      expect(sum(1, 2, 3, 4, 5)).toEqual(15);
    });
  });
}

// export default function sum(a,b){
//     return a+b;
// }
