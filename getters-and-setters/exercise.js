class Person {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(input) {
    this.firstName = input;
  }

  set lastName(input) {
    this.lastName = input;
  }

  set age(value) {
    if (value < 0) {
      this.age = 1;
    } else if (value > 130) {
      this.age = 130;
    } else {
      this.age = value;
    }
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
