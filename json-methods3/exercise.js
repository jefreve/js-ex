const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

let copyObject = (obj) => JSON.parse(JSON.stringify(obj));

const person2 = copyObject(person1);

// debug: check if their values are identical but they refer to different memory locations
// console.log(JSON.stringify(person1) === JSON.stringify(person2));
// console.log(person1 === person2);

person2.address.city = "Milan";

console.log(person1);
console.log(person2);

// one line console.log-s
// console.log(JSON.stringify(person1));
// console.log(JSON.stringify(person2));
