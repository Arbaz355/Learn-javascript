// promises (pending -> resolved/reject)
const promiseOddNumber = new Promise((resolve, reject) => {
  const number = 5;

  if (number % 2 === 0) {
    setTimeout(() => {
      console.log("Loading...");
      resolve("Yes, Even number Found");
    }, 1000);
  } else {
    setTimeout(() => {
      console.log("Loading...");
      reject("oops!, Odd number Found");
    }, 1000);
  }
});

promiseOddNumber
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Every thing is done"));

const promiseMorningRoutine = new Promise((resolve, reject) => {
  resolve("Wake UP");
});

promiseMorningRoutine
  .then((res) => console.log(res))
  .then(() => {
    setTimeout(() => {
      console.log("Brush Up");
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("face Wash ");
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("scrum meeting ");
    }, 1000);
  });
