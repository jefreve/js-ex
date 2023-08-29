const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveInLocal(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

saveInLocal(user);
