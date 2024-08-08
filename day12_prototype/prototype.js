// prototype chain

// array ->  object proto -> null
// string -> object proto -> null
// object -> object proto -> null

const name = "arbaz";

const lastName = "akhter"

String.prototype.firstCharCapital = function (){
    return this.charAt(0).toUpperCase() + this.slice(1, this.length).toLowerCase();
}

String.prototype.sayHello = function (){
    return "Hello"
}

// array example
const ages = [12, 15, 37, 58];

Array.prototype.doubleAges = function(){
   return ages.map((item) => item * 2)
}

// polyfills index
Array.prototype.findMyIndex = function(findItem){
    for(let i=0; i<ages.length; i++){
        if(ages[i] == findItem){
            return i;
        }
    }

    return -1;
}

// object example
const person = {
    name:"arbaz",
    role:"react dev",
}

Object.keys(person);

// polyfills
Object.prototype.keysArray = function(obj){
    const arr = [];
    for(const key in person){
        arr.push(key)
    }

    return arr;
}

console.log(Object.keysArray(person));