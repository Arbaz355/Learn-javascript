// flatten the array

const marks = [
    30, 40, 50,
    [90, 80, 70, [50, 60, 70]],
    [40, 20, 30]
];

const mark2 = 3;
// method 1
const flattenArray = marks.flat(2);

// methods 2
const getFlattenArray = (arr, depth = 1) => {
    const result = [];

    arr.forEach((el) => {
        if(Array.isArray(el) && depth > 0){
            result.push(...getFlattenArray(el, depth - 1));
        }
        else{
            result.push(el);
        }
    })

    return result;
}

const output = getFlattenArray(marks, 2);
console.log(output);