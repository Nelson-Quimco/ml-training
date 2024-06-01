/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
function mergeArray(array1: number[], array2: number[]) {
  const merge = array1.concat(array2);
  const finalArray = merge.filter(
    (value, index) => merge.indexOf(value) == index
  );
  console.log(finalArray);
}
mergeArray(array1, array2);
