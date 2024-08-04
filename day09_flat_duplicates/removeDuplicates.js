// duplicates remove
const marks = [60, 70, 90, 45, 45, 90];
// output -> [60, 70, 90, 45];

// const setOfMarks = new Set([90, 40, 20]);
// setOfMarks.add(90);
// setOfMarks.clear()

// methods 1
const uniqueMarks = [...new Set(marks)];


// methods 2
// const removeDuplicates = (arr) => {
//     const uniqueMarks = [];

//     arr.forEach((el) => {
//       if (!uniqueMarks.includes(el)) {
//         uniqueMarks.push(el);
//       }
//     });

//     return uniqueMarks;
// }

// methods 3
// const removeDuplicates = (arr) => {
//     const uniqueArray = [];

//     // using for loop
//     for(let i=0; i<arr.length; i++){
//         if(uniqueArray.indexOf(arr[i]) == -1){
//             uniqueArray.push(arr[i])
//         }
//     }

//     // using forEach loop
//     arr.forEach((el) => {
//         if(uniqueArray.indexOf(el) === -1){
//             uniqueArray.push(el)
//         }
//     });

//     // using for of loop
//     for(el of arr){
//           if (uniqueArray.indexOf(el) === -1) {
//             uniqueArray.push(el);
//           }
//     }

//     return uniqueArray;
// };

// methods 4
const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

const result = removeDuplicates(marks);
console.log(result)


