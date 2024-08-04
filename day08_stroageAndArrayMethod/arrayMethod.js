// length, concat, slice, splice, pop, shift, push, unshift, flat, at

// push (add element at the end) vs unshift (adds element at the start)
// pop (remove element from the end) vs shift (remove element from the start)

// some vs every, reduce vs reduceRight

const names = ["arbaz", "shanti", "abhay", "anjali", "sintu"];
const len = names.length;

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedArray = [...numbers1, ...numbers2];
const chunks = names.slice(0, 3);

names.splice(2, 0, "DJ", "Akash");
names.shift();

const numList = [1, 2, 3, [3, 4, 5, 6, [
    1, 2, 3, 4
]]];
const simpleNumList = numList.flat(1);

const data = [
  {
    age: 25,
    name: "Abhay",
    role: "react dev",
  },
  {
    age: 19,
    name: "Arbaz",
    role: "react dev",
  },
  {
    age: 20,
    name: "Shanti",
    role: "react dev",
  },
  {
    age: 24,
    name: "Anjali",
    role: "react dev",
  },
];
// map, filter, reduce, reduceRight
const concatNames = data.reduceRight((acc, curr) => {
    return acc + curr.name;
}, "")

console.log(concatNames);
