const user = {
  id: 1,
  name: "John",
  age: 25,
};

function printLocalStorage() {
  console.log(JSON.parse(localStorage.getItem("user")));
}

printLocalStorage();
