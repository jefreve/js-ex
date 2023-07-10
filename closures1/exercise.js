function printName() {
  let helloName = "Hello John";
  return function inner() {
    return helloName;
  };
}

console.log(printName()());
