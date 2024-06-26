/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

function computeAverage(students) {
  var grades = 0;
  for (var mark in students) {
    if (Object.hasOwnProperty.call(students, mark)) {
      var element = students[mark];
      if (element.mark < 60) {
        console.log(element.name + ": F");
      } else if (element.mark > 60 && element.mark <= 69) {
        console.log(element.name + ": D");
      } else if (element.mark > 70 && element.mark <= 79) {
        console.log(element.name + ": C");
      } else if (element.mark > 80 && element.mark <= 89) {
        console.log(element.name + ": B");
      } else {
        console.log(element.name + ": A");
      }
      grades += element.mark;
    }
  }
  var average = grades / students.length;
  console.log("AVERAGE : ", average);
  return average;
}
computeAverage(students);
