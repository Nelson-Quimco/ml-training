/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius: number) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  var result = celsius + "°C = " + fahrenheit + "°F";
  return result;
}
console.log(celsiusToFahrenheit(60));
