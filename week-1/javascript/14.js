/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
function highOrLow(arr) {
  var lowest = arr[0];
  var highest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return (
    "The lowest number is " +
    lowest +
    " and the highest number is " +
    highest +
    "."
  );
}

var arr = [5, 2, 8, 1, 9, 3];
var result = highOrLow(arr);
console.log(result);
