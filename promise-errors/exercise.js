const isLogged = true;

//defining new error
class userNotLoggedError extends Error {
  name;
  constructor(message) {
    super(message);
    this.name = "UserNotLoggedError";
  }
}

//first promise
function randomNumberPromise(loginStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginStatus) {
        resolve(Math.random());
      } else {
        reject(new userNotLoggedError("User not logged"));
      }
    }, 1000);
  });
}

//second promise
function isGreaterPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        resolve(`{name: "John", age: 24}`);
      } else {
        reject(new RangeError("Error"));
      }
    }, 1000);
  });
}

//promise chain
randomNumberPromise(isLogged)
  .then((value) => isGreaterPromise(value))
  .then((message) => console.log(message))
  .catch((err) => console.error(err))
  .finally(() => console.log("program's end"));
