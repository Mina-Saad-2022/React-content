let test_promise = new Promise((resolve, reject) => {
    let Completed;
    Completed = false;
    if (Completed) {
      resolve("test done");
    } else {
      reject("test failed");
    }
  });
  
  test_promise
    .then((msg) => {
      return(`the ${msg}`); // تم تصحيح هنا
    })
    .catch((msg) => {
      return(`the ${msg}`); // تم تصحيح هنا
    });
  
  export { test_promise };
  