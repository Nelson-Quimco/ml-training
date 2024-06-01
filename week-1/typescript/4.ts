/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */
function getCurrtDateTime(): string {
  var now = new Date();

  var month = String(now.getMonth() + 1).padStart(2, "0");
  var day = String(now.getDate()).padStart(2, "0");
  var year = now.getFullYear();

  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");

  var formattedDateTime = `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}
console.log(getCurrtDateTime());
