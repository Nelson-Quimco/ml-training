/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */
function getVowels(str: string): string {
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";

  for (var char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}

var str = "AEioTu1";
var result = getVowels(str);
console.log(result);
