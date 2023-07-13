class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(input) {
    if (typeof input === "string") {
      this.#firstName = input;
    } else {
      console.log("Error: cannot update firstName. Please type a string");
    }
  }

  set lastName(input) {
    if (typeof input === "string") {
      this.#lastName = input;
    } else {
      console.log("Error: cannot update lastName. Please type a string");
    }
  }

  set age(value) {
    if (value < 0) {
      this.#age = 1;
      console.log(`Value ${value} isn't allowed. Minimum age is 1`);
    } else if (value > 130) {
      this.#age = 130;
      console.log(`Value ${value} isn't allowed. Maximum age is 130`);
    } else {
      this.#age = value;
    }
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

//debugging firstName, lastName setters, and fullName getter
person.firstName = "Luigi";
person.lastName = "Verdi";
console.log(person.fullName);

person.firstName = true;
person.lastName = 9;
console.log(person.fullName);

// debugging age getter and setter
person.age = -5;
console.log(person.age);

person.age = 140;
console.log(person.age);

person.age = 80;
console.log(person.age);
