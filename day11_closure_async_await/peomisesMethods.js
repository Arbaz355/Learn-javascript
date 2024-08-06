// promise.all vs promise.any, promises.allSettle, Promise.resolve, Promise.resolve
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((err) => console.log(err));
// Expected output: Array [3, 42, "foo"]

Promise.any([promise1, promise2, promise3]).then((res) => {console.log(res)}).catch((err) => console.log(err));

Promise.allSettled([promise1, promise2, promise3]).then((res) => console.log(res)).catch((err) => console.error(err))

