const isLogged = true;

function randomNumberPromise(loginStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginStatus) {
        resolve(Math.random());
      } else {
        reject("User not logged");
      }
    }, 1000);
  });
}

function isGreaterPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        resolve(`{name: "John", age: 24}`);
      } else {
        reject("Error");
      }
    }, 1000);
  });
}

randomNumberPromise(isLogged)
  .then((value) => isGreaterPromise(value))
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
