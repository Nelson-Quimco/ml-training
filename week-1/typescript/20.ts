/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function swapCase(str: string) {
  return str
    .split("")
    .map((char) => {
      return char === char.toLowerCase()
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join("");
}
console.log(swapCase("Hello World"));
swapCase("Hello World");
