/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */
function calculateSum(arr: number[]) {
  return arr.reduce((a, b) => {
    return b + a;
  });
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(calculateSum(arr));
