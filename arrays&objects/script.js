// let x;

// // array literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // array constructor, builds one
// const fruits = new Array('apple', 'grape', 'orange');

// x = numbers[0];

// x = numbers[0] + numbers[3];

// // pick out an element in an array
// x = `My favorite fruit is an ${fruits[2]}`;

// // how many in an array
// x = numbers.length;

// // replace an element in an array
// fruits[2] = 'pear';

// fruits[3] = 'strawberry';

// // adding items to arrays
// fruits[fruits.length] = 'blueberry'
// fruits[fruits.length] = 'peach';

// x = fruits

// // shorten to just the 2 first
// // fruits.length = 2;

// console.log(x);

//BASIC ARRAY METHODS
// let x;

// const arr = [34, 55, 95, 20, 15];

// // add element to end of array
// arr.push(100);

// // remove last element from array
// arr.pop(); 

// // add element to front of aray
// arr.unshift(99);

// // remove element from front of array
// arr.shift();

// // reverse order of elements in array
// arr.reverse();

// does array include ____ (true or false)
// x = arr.includes(200);

// // where in the array an element is, -1 means it is not in the array 
// x = arr.indexOf(15);

// // grabbing range inside array or range from one element
// x = arr.slice(1, 4);

// // manipulates orignal array, splices out the rest (34 is now a different array)
// // x = arr.splice(1, 4);

// // single out just one element
// // x = arr.splice(3,1)

// //chain methods together to manipulate furhter
// x = arr.splice(1,4).reverse().toString().charAt(0);

// console.log(x);

// ARRAY NESTING CONCATENATION AND SPREAD
// let x;
// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'raspberry'];

// // nest array in another array, fruits[berries]
// // fruits.push(berries);

// // grabs the berries array since that is 3 element, 0a 1p 2o 3berries
// // x = fruits[3];

// // // grabs blueberry, 3berries 0s 1b
// // x = fruits[3][1];

// // nest both arrays tgoether into one array
// const allFruits = [fruits, berries];

// // picking out the first element from the second array
// x = allFruits[1][0];

// // combine second array with first array, all elements included NOT NESTED
// x = fruits.concat(berries);

// // spread operator (...), combines both arrays
// x = [...fruits, ...berries];

// // flatten arrays, removes nested arrays and makes them all elements
// const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// x = arr.flat();

// // console.log(x);

// // STATIC METHODS ON ARRAY OBJECT

// // is this an array, below is true
// x = Array.isArray(fruits);

// // is this an array, below is false
// x = Array.isArray('Hello');

// // creates an array from a string ['1', '2', '3', '4', '5']
// x = Array.from('12345')

// // create an array of multiple separate variables [1, 2, 3]
// const a = 1; 
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);

// console.log(x);

// ARRAY CHALLENGES 
const arr = [1, 2, 3, 4, 5];

// chain doesnt work! returns a number and doesnt add functions
// arr.push(6).unshift(0).reverse();

// do in a row instead, it goes through each line one by one
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// manipulate to [6, 5, 4, 3, 2, 1, 0]

//challenge 2
// combine arr1 and arr2 in a new array called arr3, remove extra 5. 
// concat spread operator splice slice

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);
arr3.splice(4, 1); 

// const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3);

const arr4 = [...arr1, ...arr2];
arr4.splice(4,1);

console.log(arr4);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

