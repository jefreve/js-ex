const number = 15;

let isGreaterThanTen = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("Success");
  } else {
    reject("Error: number must be greater");
  }
});

isGreaterThanTen
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
