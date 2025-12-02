// capitalize the first letter of mySTring
const myString = 'developer';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

// HOGAN"S VERSION
// console.log(myString);

// let x;

// x = myString.charAt(0);

// let y;

// y = myString.split('');

// let myNewString;

// myNewString = myString.replace('d', 'D')

// console.log(y);

// console.log(myNewString);

// SOLUTION
// const myString = 'developer';

// let myNewSTring;

// solution 1: find d, change to uppercase, concatenate to substring from e
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// // solution 2: find d, change to uppercase, concatenate to substring from e
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // solution 3: 
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

