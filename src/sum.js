export default function sum(...numbers) {
  return numbers.reduce((a, b) => a + b + 0);
}
// export default function sum(a,b){
//     return a+b;
// }