const sum = (operation) => {
    return (number1) => {
        return (number2) => {
            if (operation === "add") return number1 + number2;
            else if (operation === "sub") return number1 - number2;
            else if (operation === "mul") return number1 * number2;
            else if (operation === "divide") return number1 / number2;
            else return "Invalid Operation"
        }
    }
}
// 1st params -> operation(add, sub, mul, divide), rest -> number
const result = sum("sub")(4)(1);
// console.log(result)

// infinite currying
const addition = (a) => {
    return (b) => {
        if(b) return addition(a + b);
        return a;
    }
}

const total = addition(2)(4)(3)(8)();
console.log(total);