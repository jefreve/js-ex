function printName() {
  let helloName = "Hello John";
  return function inner() {
    setTimeout(() => console.log(helloName), 1000);
  };
}

printName()();
