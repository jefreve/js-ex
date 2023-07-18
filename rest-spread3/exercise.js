const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age,
// };

const [id, personInfo] = [person.id, { ...person }];

console.log(id, personInfo);
console.log(typeof id);
console.log(typeof personInfo);
