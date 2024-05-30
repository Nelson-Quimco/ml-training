/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */


var fahrenheit = 140;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + "°F = " + celsius + "°C");

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }