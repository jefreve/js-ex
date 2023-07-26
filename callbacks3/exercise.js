function repeatHello(cb) {
  let id = setInterval(cb, 1000);
  setTimeout(() => clearInterval(id), 5000);
}

repeatHello(() => console.log("Hello"));
