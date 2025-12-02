// console.log(100);

// console.log("Hello World");

// console.log(20, "hello", true);

// // const x = 100;

// console.log(x);

// console.error('Alert');

// console.warn('warning');

// console.table({name: "Brad", email: "brad@gmail.com"});

// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('warning');
// console.groupEnd();

// const styles = "padding: 10px; background-color: white; color: green";

// console.log('%Hello World', styles);

// let firstName = 'John';
// let lastName = 'Doe';

// console.log(firstName, lastName);

// let age = 30;

// console.log(age);

// let score;

// score = 1;

// console.log(score);

// if (true) {
//     score = score + 1;
// }

// console.log(score);

// const x = 100;

// const arr = [1, 2, 3, 4];

// arr.push(5);

// console.log(arr);

// const person = {
//     name: 'Brad',
// }

// person.name = 'John';

// person.email = 'brad@gmail.com';

// console.log(person);

// let a, b, c;

// const d = 10, e = 20, f = 30;

// console.log(d);
// console.log(a);

// // string
// const firstName = 'Sara';

// // number 
// const age = 30;
// const temp = 98.9;

// // Boolean
// const hasKids = true;

// // null (has house though, uneeded)
// const aptNumber = null;

// // undefined
// // let score;
// const score = undefined;

// // symbol
// const id = Symbol('id');

// // BigInt
// const n = 9295939529342n;

// // reference
// const numbers = [1, 2, 3, 4];

// const person = {
//     name: 'Brad',
// };

// function sayHello() {
//     console.log('Hello');
// }


// const output = sayHello;

// console.log(output, typeof output);

// values stored on stack
// const name = 'John';
// const age = 30;

// // reference types stored in heap
// const person = {
//     name: 'Brad',
//     age: 40, 
// };

// let newName = name;
// newName = 'Jonathon';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName);
// console.log(person, newPerson);

// let amount = '100';

// // change string to number
// amount = parseInt(amount);
// // amount = Number(amount);
// // amount = +amount;

// // change number to string
// // amount = amount.toString();
// // amount = String(amount);

// // change string to decimal
// // amount = parseFloat(amount);

// // convert number to boolean
// // amount = Boolean(amount);

// console.log(amount, typeof amount);

// arithmetic operators
// let x

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // concatenation (adding strings together)
// x = 'Hello' + ' ' + 'World';

// // exponent
// x = 2 ** 3;

// // increment
// x = 1;
// x++;

// // //decrement
// x--;

// // assignment operators

// x = 10

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5; 
// x %= 5;
// x **= 5;

// // comparison operators
// x = 2 == 2

// x = 2 == 4;

// x = 2 === 2;

// // x = 2 === '2'; false, checks the type too 

// x = 2 != 3;

// x = 2 !== '2';

// x = 10 > 5;
// x = 10 < 5;
// x = 10 >= 5;
// x = 10 <= 5;

// console.log(x);

let x;

x = 5 + '5';

x = 5 + Number('5');

x = 5 * '5';

x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false; 

x = 5 + undefined;

console.log(x, typeof x);