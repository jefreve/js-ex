function calculateAverageAge(persons) {
  //create array containing ages of persons
  getAges = (el) => el.age;
  //sum the ages contained in the getAGES array
  sumAges = (a, b) => a + b;
  //put them together: create array containing ages, feed it to reduce(),
  // which in turn calls function sumAges, and reduces its elements
  //to a single number (their sum)
  let sum = persons.map(getAges).reduce(sumAges);
  // return the average of the number contained in sum
  return sum / persons.length;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
