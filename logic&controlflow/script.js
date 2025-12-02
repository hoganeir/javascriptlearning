// if (true) {
//     console.log('This is true');
// }

// if (false) {
//     console.log('This is NOT ture');
// }

// const x = 10;
// const y = 5; 

// // if true, will run. if false, will not run (ie 10 and 5)
// if (x >= y) {
//     console.log(`${x} is greater than ${y}`);
// }

// // if true, will run. if false, will not run (ie 10 and 10). else will run when if if false
// if (x === y) {
//     console.log(`${x} is equal to ${y}`);
// } else {
//     console.log(`${x} is NOT equal to ${y}`);
// }

// if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`)
// }

// // doesnt work for block level scoping
// // console.log(z)

// // shorthand if (NOT RECOMMENDED)
// if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
//     console.log('This is true')
// else console.log('This is false');

// IF ELSE AND NESTING
// const d = new Date(10, 30, 2022, 20, 0, 0)
// const hour = d.getHours();

// console.log(hour);

// if (hour < 12) {
//     console.log('Good morning');
// } else if (hour < 18) {
//     console.log('Good afternoon');
// }else {
//     console.log('Good night');
// }

// // nested if
// if (hour < 12) {
//     console.log('Good morning');

//     if (hour === 6) {
//         console.log('Wake up')
//     }
// } else if (hour < 18) {
//     console.log('Good afternoon');
// }else {
//     console.log('Good night');

//     if (hour >= 20) {
//         console.log('zzz')
//     }
// }

// // can put limits on it, below is between 7 and 3. (&& is 'and' operator)
// if (hour >= 7 && hour <15) {
//     console.log('It is work time');
// }

// // or is || so either 6 or 20
// if (hour === 6 || hour === 20) {
//     console.log('brush your teeth')
// }

// SWITCHES
const d = new Date(2022, 1, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

console.log(month);

// switch. can put multiple responses into one. so 1 2 3 get a return, >4 gets a default statemetn
// most common with immediate values ie months
switch (month) {
    case 1: 
        console.log('It is january');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3: 
        console.log('It is march');
        break;
    default:
        console.log('it is not jan feb or march');
}

// switches can be use dwith ranges
switch (true) {
    case hour < 12:
        console.log('good morning');
        break;
    case hour < 18:
        console.log('good afternoon');
        break;
    default:
        console.log('good night')
}

//  calculator challenge
// create a function called calculator that takes in three parameters
// num1, num2, and operator
// operator can be + - * or /
// function should return the result of the caluclation if anything other than the four operatrs is passed in the function returns error message

// hogan version
// function calculator(num1, num2, operator) {
//     // const value = (num1 + operator + num2)
//     switch (true) {
//         case operator = +
//             console.log(num1 + num2),
//             break;
//         case operator = -
//             console.log(num1 - num2),
//             break;
//         case operator = *
//             console.log(num1 * num2),
//             break;
//         case operator = /
//             break;
//         default:
//             console.log('Please enter another operator')
//     },
// };

// calculator(1, 5, '+');

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;  
            break;
        default:
            result = 'Invalid operator';
    }
    console.log(result);
    return result;
};

calculator(5, 2, '+')

//TRUTHY AND FALSY VALUES
// const email = 'test@test.com'

// if (email) {
//     console.log('you passed in an email');
// }

// console.log(Boolean(email));

//FALSY VALUES see below
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined 
// - nan

const x = NaN;

if (x) {
    console.log('this is truth')
} else {
    console.log('this is falsy')
}

console.log(Boolean(x));

// TRUTHY VALUES see below
// - everything else that is not falsy
// - true
// - '0' 0 in a String
// - ' ' space in a String 
// - 'false' false in a String
// - anything in a string is a truthy!
// - [] empty Array
// - {} empty Object
// - function () {} (empty function)

const y = function () {};

if (y) {
    console.log('this is truth')
} else {
    console.log('this is falsy')
}

console.log(Boolean(y));

// truthy and falsy caveats
// zero when it needs to be anoption
const children = 0;

if (children !== undefined) {
    console.log(`you have ${children} children`);
} else {
    console.log('Please enter number of children');
}

//checking for empty arrays
// const posts = ['Post one'];

// if (posts.length > 0) {
//     console.log('list posts');
// } else {
//     console.log('No posts to list');
// }

// //checking for empty objects
// const user = {};

// if (Object.keys(user).length > 0) {
//     console.log('List user');
// } else {
//     console.log('No user');
// }

// // loose equalty (==)
// console.log(false == 0);
// console.log('' == 0);
// console.log(null == undefined);

// // strict equality (===)
// console.log(false === 0);
// console.log('' === 0);
// console.log(null === undefined);

// LOGICAL OPERATORS
// && and
// || or

// has to be all true from the get go
// console.log(10 < 20 && 30 > 15 && 40 > 30);

// // only one has to be true
// console.log(10 > 20 || 30 < 15);

// //&& will return first falsy value or the last value
// let a;

// a = 10 && 20
// a = 10 && 30
// a = 10 && 0 && 30;
// a = 10 && '' && 0 && 30;

// console.log(a)

// const posts = ['post one', 'post two'];
// posts.length > 0 && console.log(posts[0]);

// // || will return the first truthy value or the last value
// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;

// console.log(b);

// // ?? - return the right side operand when the left is null or undefined

// let c;

// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// c = 0 ?? 30;
// c = '' ?? 30;

// console.log(c)

// LOGICAL ASSIGNEMNT
// || = assigns the right side value only if the left is a falsy value

let a = 10;

// if (!a) {
//     a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

// && = assigns the right side value only if the left is a truthy value
let b = 20;

if (b) {
    b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ?? = assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
    c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);

// TERNARY OPERATOR
const age = 15;

// using an if statement
if(age >= 18) {
    console.log('you can vote');
} else {
    console.log('you cant vote');
}

// using a ternary operator
age >= 18 ? console.log('you can vote') : console.log('you cant vote');

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'you can vote': 'you cant vote';

console.log(canVote);
console.log(canVote2)

// multiple statements

const auth = true;
// let redirect;

// if (auth) {
//     alert('welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login';
// }

// const redirect = auth ? (alert('welcome to dashboard'), '/dashboard') : (alert('access denied'), '/login');

// console.log(redirect);

// if you dont have an else
auth ? console.log('welcome to the dashboard') : null;

auth && console.log('welcome to the dashboard');

