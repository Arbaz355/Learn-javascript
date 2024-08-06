//  (global scope, function scope) -> lexical scope
// var -> (const, let)
function calculate() {
  var a = 5,
    b = 4;

  function add() {
    return a + b;
  }

  function multi() {
    return a * b;
  }

  console.log(add());
}

// calculate();

const countMoney = () => {
  return [a, b];
};

// var with global scope
var name = "arbaz";

const printName = (data) => {
  return data;
};

if (0.125 > 0.25) {
  var x = 1;
} else {
  var x = 2;
}

function add(a) {
  return function (b) {
    return a + b;
  };
}

// general example of closures
function calculate(a, b) {
  return {
    add() {
      return a + b;
    },

    multi() {
      return a * b;
    },
  };
}

const result = calculate(2, 5);
const mulResult = result.multi();
console.log(mulResult);
