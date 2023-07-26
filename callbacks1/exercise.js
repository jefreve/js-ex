const log = (el) => console.log(el);

function printAsyncName(cb, name) {
  let id = setInterval(cb, 1000);
  //
  setTimeout(() => {
    clearInterval(id);
    log("Jimmy");
  }, 2000);
}

printAsyncName(() => log("Hello"), "Jimmy");
