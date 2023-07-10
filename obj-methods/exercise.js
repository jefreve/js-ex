const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

let keys = Object.keys(person);

let values = Object.values(person);

//This is one way it could be done
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + values[i]);
}

// And another way
let entries = Object.entries(person);

for (let entry of entries) {
  let [key, value] = entry;
  console.log(key + ": " + value);
}
