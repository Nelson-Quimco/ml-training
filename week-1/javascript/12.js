/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("The array is empty.");
  }
}
try {
  checkArray([1, 2, 3]);
  console.log("The array is not empty.");
} catch (error) {
  console.log(error.message);
}
