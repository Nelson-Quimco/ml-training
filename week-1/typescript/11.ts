/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertEntities(str: string) {
  for (var entity in entities) {
    str = str.replace(new RegExp(entities[entity], "g"), entity);
  }

  return str;
}

var str = "&lt;div&gt;Hello, &quot;world&quot;!&lt;/div&gt;";
var result = convertEntities(str);
console.log(result);
