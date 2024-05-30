/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function checkNumber(num) {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("The number not a positive integer.");
  }
}

try {
  checkNumber(0);
  console.log("Number is a positive integer.");
} catch (error) {
  console.log(error.message);
}
