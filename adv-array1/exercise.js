function adultFilter1(persons) {
  let arr = persons.filter((el) => el.age >= 18);
  return arr;
}

// oppure si potrebbe dare come return un array contenente solo il nome
//delle persone maggiorenni  senza includere l'età, e in quel caso:
function adultFilter2(persons) {
  let arr = persons.filter((el) => el.age >= 18).map((el) => (el = el.name));

  return arr;
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

const adultsAndAge = adultFilter1(persons);
const adultsNameOnly = adultFilter2(persons);

console.log("- persons:");
console.log(persons);

console.log("- adultsAndAge:");
console.log(adultsAndAge);

console.log("- adultsNameOnly:");
console.log(adultsNameOnly);
