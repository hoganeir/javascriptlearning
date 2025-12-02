// loop is control structure that provides way to do iteration in programming
// iteration is repeat something over and over until certain condition is met

// for loop
// for ([initialExpresion]; [conditionExpression]; [incrementExpression])
//     statement;

// initial expression: intiializes a variable/counter
// condition expression - condition that the loop will ocntinue to run as long as it is met or until condition is false
// increment expression - expression that will be executed after each iteration of the loop, usually increments the variable
// statement - code that will be executed each time the loop is run. to execute a 'block' of code use the '{}' syntax

//start at zero (i = 0), go to 10 (i <= 10), add one each time (i++)
// have to use let because variable changes each time
// for (let i = 0; i <= 10; i++) {
//     // add a change at a certain posiiton
//     if (i === 7) {
//         console.log('7 is lucky');
//     }

//     console.log('Number ' +  i);
// }

// cant use outside loop since it is block scoped
// console.log(i)

// nested loops (i with 1, j * each integer up to 10. )
// for (let i = 1; i <= 10; i++) {
//     console.log('Number' + i);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// for loop to loop through an array. run through each name 
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// // for (let i = 0; i < names.length; i++) {
// //     // add note about integer
// //     if (i === 2) {
// //         console.log('Sara is the best');
// //     } else 
// //     if (names[i] === 'John') {
// //         console.log('john is best')
// //     } else {
// //     if (i === 4) {
// //         console.log(names[i] + ' is the best')
// //     } else {
// //         console.log(names[i]);
// //     }
// // }

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === 'John') {
//         console.log(names[i] + ' is the best');
//     } else {
//         console.log(names[i]);
//     }
// }

// // dont do infinity loops

// // BREAKS AND CONTINUE
// // break out of loop
// for (let i = 0; i <= 20; i++) {
//     // set to 20, put a break at 15
//     if (i === 15) {
//         console.log('breaking...')
//         break;
//     }

//     console.log(i);
// }

// // continue loop
// for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//         console.log('skipping 13...')
//         continue;
//     }

//     console.log(i)
// }

// while & do while loops

// while loops are older, set variable outside loop, define expressions inside it
// let i = 1;

// // while (i <= 20) {
// //     console.log('Number ' + i);
// //     i++;
// // }

// // loop over arrays
// const arr = [10, 20, 30, 40, 50];

// // while (i < arr.length) {
// //     console.log(arr[i]);
// //     i++;
// // }

// // nesting while loop
// // while (i <= 5) {
// //     console.log('Number ' + i);

// //     let j = 1;
// //     while (j <= 5) {
// //         console.log(`${i} * ${j} = ${i * j}`);
// //         j++
// //     }

// //     i++;
// // }

// //do while loop: when you want the block of code to run at least once, even if false
// // will run once, even if number is over the 20, ie 21
// do {
//     console.log('Number ' + i);
//     i++;
// } while (i <= 20);

// //fizzbuzz challenge: important!
// // print/log numbers from 1 to 100
// // or multipes of three print fizz instead of numbers
// // for multiples of 4 print buzz
// // for multiples of both three and five print fizzbuzz

// // hogan version
// for (let i = 0; i <= 100; i++) {
//     if (i === '/3') {
//         console.log('fizz');
//     }
//     if (i === '/5') {
//         console.log('buzz');
//     }
//     if (i === '/3' && '/5') {
//         console.log('fizzbuss');
//     }

//     console.log('Number ' + i);
// }

// // solution
// // for loop
// for (let i = 1; i <= 100; i++) {
//     // change to i % 15 === 0 for same result
//     if (i % 3 === 0 && i % 5 === 0) { 
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(i)
//     }
// }

// // while loop
// let j = 1;

// while (j <= 100) {
// j % 3 === 0 emans divisible by 3!!!!!    
// if (j % 3 === 0 && j % 5 === 0) { 
//         console.log('fizzbuzz');
//     } else if (j % 3 === 0) {
//         console.log('fizz');
//     } else if (j % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(j)
//     }

//     j++;
// }

// //for...of loop

// const items = ['book', 'table', 'chair', 'kite'];
// const users = [
//     {name: 'Brad' },
//     {name: 'Kate' },
//     {name: 'Steve' },
// ];

// for (const item of items) {
//     console.log(item);
// }

// for (const user of users) {
//     console.log(user.name);
// }

// // loop over strings, each letter
// const str = 'Hellow world';

// for (const letter of str) {
//     console.log(letter);
// }

// // loop over maps, get key and value
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// for (const [key, value] of map) {
//     console.log(key, value)
// }

// // for...in loop get key and value
// const colorObj = {
//     color1: 'red',
//     color2: 'blue',
//     color3: 'orange',
//     color4: 'green'
// };

// for (const key in colorObj) {
//     console.log(key, colorObj[key]);
// }

// const colorArr = ['red', 'green', 'blue', 'yellow'];

// for (const key in colorArr) {
//     console.log(colorArr[key]);
// }

//HIGH LEVEL ARRAY METHODS
// ARRAY FOR EACH
// take in function as argument, call back function
const socials = ['Twitter', 'LInkedin', 'facebook', 'instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(item));

function logSocials(social) {
    console.log(social);
}

// socials.forEach(logSocials);

// using objects
// const socialObjs = [
//     { name: 'Twitter', url: 'twitter.com' },
//     { name: 'facebook', url: 'facebook.com' },
//     { name: 'linkedin', url: 'linkedin.com' },
//     { name: 'instagram', url: 'instagram.com' },
// ];

// socialObjs.forEach((item) => console.log(item.url));

// //ARRAY.FILTER
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter(function (number) {
//     // % = divisible by!!!!!!
//     return number % 2 === 0;
// });

// short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// same with for each
// let evenNumbers = [];
// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// });

// console.log(evenNumbers);

// // challenge at 7:08, filter out all retail companies in an array
// const retailCompanies = companies.filter((company) => company.category === 'Retail');
// console.log(retailCompanies);

// //get companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <=2005);
// console.log(earlyCompanies);

// //get companies that lasted ten years or more
// const longCompanies = comapnies.filter((company) => (company.end = company.start >= 10));
// console.log(longCompanies);

// ARRAY.MAP
// sort of a way to use an array as a variable to run into another array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // double the number
// const doubledNumbers = numbers.map((number) => number * 2);

// // add label
// const labelNumbers = numbers.map((number) => 'Number ' + number);

// console.log(doubledNumbers);
// console.log(labelNumbers);

// // for each
// const doubleNumbers2 = [];

// numbers.forEach((number) => {
//     doubleNumbers2.push(number * 2);
// });

// console.log(doubleNumbers2)

// create an array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// // create an array with just company and categories
// const companyInfo = companies.map((company) => {
//     return {
//         name: company.name,
//         category: company.category,
//     };
// });

// console.log(companyInfo);

// //create array of each company with their name and the length of each company in years
// const companyYears = companies.map((company) => {
//     return {
//         name: company.name,
//         length: company.end - company.start
//     }
// });
// console.log(companyYears);

//chain map methods (can do numbers. but it does down below)
// const squareAndDouble = numbers
//     .map((number) => Math.sqrt(number))
//     .map((sqrt) => sqrt * 2);

// // longer version
// const squareAndDouble2 = numbers
//     .map(function (number) {
//         return Math.sqrt(number);
//     })
//     .map(function (sqrt) {
//         return sqrt * 2;
//     })
//     .map(function (sqrtDoubled) {
//         return sqrtDoubled * 3;
//     });

// console.log(squareAndDouble);
// console.log(squareAndDouble2);

// //chaining different methods together ie filtering out even numbers and doubling them
// const evenDouble = numbers 
//     .filter((number) => number % 2 === 0)
//     .map((number) => number * 2);

// console.log(evenDouble);

//ARRAY.REDUCE
//reduce array down to a single value
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// //take the first one and add it, run again, take next one and add it to accumulator, run it again take next one and add it and so on. starts at zero at the bottom of function
// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0 );

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum);
// console.log(sum2);

// //using a for loop
// const sum3 = () => {
//     let acc = 0;
//     for (const cur of numbers) {
//         acc += cur;
//     }
//     return acc;
// }

// console.log(sum3())

// const cart = [
//     { id: 1, name: 'Product 1', price: 130 },
//     { id: 2, name: 'Product 2', price: 150 },
//     { id: 3, name: 'Product 3', price: 175 },
// ];

// // add the currentvalue up in the return section
// const cartTotal = cart.reduce(function (acc, cur) {
//     return acc + cur.price;
// }, 0 );

// console.log(cartTotal);

// array method challenges
// take people array and create array called youngpeople that stores objects with only name and email of all people 25 and under
// the name property shoul dhave their first and last name

// hogan version
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

//   hogan version
// const youngPeople = people
//   .filter((people) => people.age <= 25)
//   return {
//     name: 'firstName' + 'lastName'
//     email:
//   }

// [
//   {name: 'Jane Poe', email:'jane@gmail.com'},
//   {name: 'Sara Soe', email:'sara@gmail.com'},
//   {name: 'Jose Koe', email:'jose@gmail.com'}
// ]

// solution
const youngPeople = people
    .filter((person) => person.age <= 25 )
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
    }));

    console.log(youngPeople);

// add all positive number sin the array
const numbers = [2, -30, 50, 20, -12, -9, 7];

// hoga nversion SUCCESS
const positiveSum = numbers
    .filter((number) => number >= 0)
    .reduce(function (acc, cur){
        return acc + cur
    }, 0 );

console.log(positiveSum);

// create a new array called capitlizedWords with the words array with the first letter of each word capilizated
 const words = ['coder', 'programmer', 'developer'];

 //solution 0 is first letter of word, slice to concantate from second letter to the rest
 const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
 })

 console.log(capitalizedWords)

