const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Le modifiche fatte a person2 vengono applicate anche a person1
// perché const person2 = person1 non crea una copia separata
// ma semplicemente fa si che sia person1 che person2 facciamo
// riferimento alla stessa porzione di memoria
// quindi modificarne uno modifica anche l'altro.

//Per creare una copia correttamente si può fare così:

// const person2 = Object.assign({}, person1);
