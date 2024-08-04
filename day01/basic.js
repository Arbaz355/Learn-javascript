// 1) how to avoid undefined
// 2) ||, & (short circuit);

// 1) optional chaining
const person = {
  name: "arbaz",
  age: "25",
  role: "react",
  address: {
    street: "Abc Steel",
    city: "Noida",
  },
};

//falsy value
false,
0,
-0,
NaN
null
undefined
""

const result = false && 0;
console.log(result);

// api -> async (response delay)
