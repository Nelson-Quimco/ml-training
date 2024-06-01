/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function checkInt(num: number) {
  if (!Number.isInteger(num)) {
    throw new Error("Number is not an integer.");
  }
}

try {
  const num = 1;
  checkInt(num);
  console.log("Number is an integer.");
} catch (error) {
  console.log(error.message);
}
