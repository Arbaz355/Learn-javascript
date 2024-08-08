// explicit binding with this
function printInfo(role, age) {
  return `${this.firstName} ${this.lastName} is a ${role} dev aged ${age}`;
}

const person = {
  firstName: "arbaz",
  lastName: "akhter",
};

const person2 = {
  firstName: "abhay",
  lastName: "bhansal",
};

// function borrowing (call)
console.log(printInfo.call(person2, "java", 23));
console.log(printInfo.call(person, "react", 25));

// function borrowing (apply)
console.log(printInfo.apply(person2, ["java", 23]));
console.log(printInfo.apply(person, ["react", 25]));

// bind
const result = printInfo.bind(person2, "java", 23);
console.log(result())