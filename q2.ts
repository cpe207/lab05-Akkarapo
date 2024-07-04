// define interface for Student object
/* Your code here */
function students(x){
  x = students1.map((std) => std.score);
}

// assign interface/type to the function definition properly
function findTopNames(students) {
  const y = students.map((std) => std.score > 8);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
