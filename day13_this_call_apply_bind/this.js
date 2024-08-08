// this (global context);
function sayGoodMorning() {
  console.log(this);
}
sayGoodMorning()

const sayHello = () => {
  console.log(this);
};
sayHello()

// implicit binding with this function example
const person = {
    name:"arbaz",
    printName:function(){
        return this.name
    }
}

// implicit binding with this arrow function example
const person2 = {
  name: "arbaz",
  printName: () => {
    return this.name;
  },
};

console.log(person.printName())