// callback :- function passed as the arguments of other function
// Higher order functions

const ages = [30, 40, 12, 15, 17];

// callback for map
function processCalc(el, index) {
  return el * 2;
}

// callback for filter
function processUnderAges(el, index) {
  return el < 18;
}

const doubleAges = ages.map(processCalc);
const underAges = ages.filter(processUnderAges);

setTimeout(() => {
  console.log("Hello World");
}, 1000);

const printNewProgrammerFor2Sec = () => {
  const timerId = setInterval(() => {
    console.log("New programmer");
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 3000);
};
