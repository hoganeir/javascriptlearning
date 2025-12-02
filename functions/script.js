// group code together to run later
// make code easier to understand

// function sayHello() {
//     console.log('Hello World');
// }

// sayHello();

// //function parameters are inside the function parantheses add(num1, num2)
// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// //arguments are what runs thorugh the function parantheses when it is called 5, 10
// add(5, 10);

// //this already returns the value, has already done the math
// function subtract(num1, num2) {
//     return num1 - num2;

//     console.log('After the return');
// }

// const result = subtract(10, 2);

// console.log(result, subtract(20, 5));

// function registerUser(user) {
//     return user + ' is registered';
// }

// // defautl statement
// function registerUser(user) {
//     if (!user) {
//         user = 'Bot';
//     }
//     return user + ' is registered';
// }

// console.log(registerUser());

// // rest parameters to add unlimited arguments, this will add all together.
// function sum(...numbers) {
//     let total = 0

//     for (const num of numbers) {
//         total += num;
//     }

//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5))

// // objects as parameters (template literal as well)
// function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//     id: 1,
//     name: 'John',
// };

// console.log(loginUser(user));
// console.log(
//     loginUser({
//         id: 2,
//         name: 'Sara',
//     }),
// );

// // arrays as parameters 
// function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     const item = arr[randomIndex];

//     console.log(item);
// }

// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//GLOBAL and FUNCTION SCOPE
// alert('Hello');
// console.log(innerWidth);

// in script/global
// const x = 100;

// console.log(x, 'in global');

// // global function, can do this anywhere anytime
// function run() {
//     console.log(window.innerHeight);
//     // inside a function
//     console.log(x, 'in function')
// }

// run();

// if(true) {
//     // inside a block
//     console.log(x, 'in block');
// }

// // functions have their own scope, y below is a function variable, not a global variable, cant access it in global, this is local scope
// function add() {
//     const y = 50;
//     console.log(y);
// }

// // does not run with console.log(y) because function is not run, y is not created
// // console.log(y);

// // runs when function is run because y is created within function
// add();

// BLOCK LEVEL SCOPE
// const x = 100;
// const foo = 1;
// var bar = 2;

// if (true) {
//     const y = 200;
//     console.log(x + y);
// }

// // y is not defined globally, cannot run
// // console.log(x + y);

// // adding every digit until 10
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// // i is not defined in global, only local in block
// // console.log(i);

// if (true) {
//     const a = 500;
//     let b = 600;
//     var c = 700;
// }

// // const a and let b dont work because local, var c is not block scoped, can be accessible from outside (NOT GOOD)
// // console.log(a);
// // console.log(b);
// console.log(c);

// // var will work inside functions, HOWEVER will not work outside of them, different from if/for blocks
// function run() {
//     var d = 100;
//     console.log(d);
// }

// run();

// console.log(d);

// var can be added to window scope, let and const wont be (see top of this section)

// NESTED SCOPE

// run 
function first() {
    const x = 100;

    // second function nested within the first
    function second() {
        const y = 200;
        console.log(x + y);
    }

    // have to run second function within the first. cant run y variable since inside second function scope
    second();
}

first();

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }

    // cant run this since it is in second scope
    // console.log(y);
}

// FUNCTION DECLARATION VS EXPRESSION
// function declaration
function addDollarSign(value) {
    return '$' + value;
};

console.log(addDollarSign(100));

// function expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200))

// ARROW FUNCTIONS
// regular function
// function add(a, b) {
//     return a + b;
// }

// arrow function syntax
const add = (a, b) => {
    return a + b;
};

// implicit return
const subtract = (a,b) => a-b;

// single parameter can leave off parantheses
const double = a => a * 2;

// returning an object
const createObj = () => ({
    name: 'Brad'
})

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(n) {
    console.log(n);
})

// arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1,2));
console.log(subtract(10,5));
console.log(double(10));
console.log(createObj());

//immediately invoked function expressions IIFE
// avoid global scope pollution
// const user = 'John';

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name) {
    console.log('Hello ' + name);
})('Shawn');

(function hello () {
    console.log('Hello');
})();

//FUNCTION CHALLENGES
// create function called get celsius that takes a temperature in fahrenit and converts it to fahrenheit in one line

// hint (f - 32) * 5 / 9

// hogna version
// function getCelsius(value) {
//     return (value - 32) * 5 /9
// };

// getCelsius(75);
// console.log(getCelsisu(32));

// solution
function getCelsius(f) {
    const celsius = (f - 32) * 5/9;
    return celsius;
}

//arrow function
// const getCelsius = (f) => ((f -
//     32) *5) / 9;

console.log(getCelsius(75));

// create an arrow function called minmax that takes in an array of numbers and reutrns an object with the minimum and maximum nubmers in the array
// ie 1 2 3 4 5 min 1 max 5

const arr = [3, 6, 9, 12, 15];

//hogan version
// const minMax = (arr) => {
//     const min = Math.min(arr);
//     const max = Math.max(arr);
//     return { min, max }
// };

// console.log(minMax(arr))

// solution
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return {
        min,
        max
    }
};

console.log(minMax([1, 2, 3, 4, 5]));

//create an IIFE that takes in l and width of a rectangle and outputs it to athe console as soon as page is loaded
// on page load "the area of a rectangle with a lenght and width of ___ and ___  is ___"
// multiply two numbers

// hogan version
// (function area (l , w) {
//     const length = l;
//     const width = w;
//     console.log(l * w),
// })(5 x 10);

//solution
// ((length, width) => {
//     const area = length * width;

//     const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//     console.log(output);
// })(20, 10);

// the arrow => replaces the word function, so either use function or the => not both
(function (length, width) {
    const area = length * width;

    const output = `the area of a rectangle with ${length} length and ${width} width is ${area}.`

    console.log(output);
})(20, 10);

// EXECUTION CONTEXT
// behind the scenes, how it works
// creation phase and execution phase
// creation phase: setting up everything for exection

const x = 100;
const y = 50;

function getSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
// browser console/dev tools/inspect: 
// sources > script.js > scope
// click to break code at line (stop it from running)
// step down button (down arrow) to walk through line by line and see whats happening

// THE CALL STACK
// LIFO last in first out
// function first() {
//     console.log('first...');
// }

// function second() {
//     console.log('second...')
// }

// function third() {
//     console.log('third...')
// }

// first();
// second();
// third();

function first() {
    console.log('first...');
    second();
}

function second() {
    console.log('second...');
    third();
}

function third() {
    console.log('third...');
}

first();