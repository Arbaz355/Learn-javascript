// for, while, do while, forEach, for in, for of, map, reduce, filter
const data = [
  {
    name: "arbaz",
    role: "react dev",
    salary: 10000,
  },
  {
    name: "shanti",
    role: "react dev",
    salary: 4000,
  },
  {
    name: "anjali",
    role: "react dev",
    salary: 8000,
  },
  {
    name: "abhay",
    role: "stack full dev",
    salary: 1000,
  },
];

// Object.keys, Object.values, Object.entries, Object.freeze(read only mode) vs Object.seal, Object.assign, hasOwnProperty
// Object.freeze -> no modification allowed (delete, changing existing property, adding new property)
// Object.seal -> changing existing property allowed only (no delete, no new property);

// copy (shallow copy, deep copy)
const person = {
  name: "abhay",
  role: "stack full dev",
  salary: 1000,
  dob: new Date(),
  address: {
    street: "new york",
    home: {
      houseNo: 456,
    },
  },
};

// method 1) spread operator
const copyPerson = { ...person };

// methods 2) Object.assign
const copyPerson2 = Object.assign({}, person);

// deep copy method 1) JSON.parse, JSON.stringify
const copyObject = JSON.parse(JSON.stringify(person));
console.log(copyObject);

// methods 2) structured.clone
const copyPersonData = structuredClone(person);
console.log(copyPersonData);
