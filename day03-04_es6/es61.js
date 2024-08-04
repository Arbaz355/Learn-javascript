// es6 variables -> let, const (var -> scope)
// template literals
// spread and rest operator
// function vs arrow function
// 1) syntax, 2) hoisting, 3)this, 4)args, arguments -> (rest operators)
// function def, arrow function, anemones function, IIFE(immediately invoked function expression)

function addition (a, b){
    var name = "name";
    return this.name;
}
// const addition = (a, b) => {
//     return this.a
// }
console.log(addition(5, 6));

