// let x;

// const person = {
//     name: 'John Doe',
//     age: 30,
//     isAdmin: true,
//     address: {
//         street: '123 main',
//         city: 'Boston',
//         state: 'MA',
//     },
//     hobbies: ['music', 'sports'],
// };

// x = person.name;
// x = person['age'];
// x = person.address.state;
// x = person.hobbies[0];

// // change name
// person.name = 'Jane Doe'

// // change property
// person['isAdmin'] = false;

// x = person

// // delete age category
// delete person.age;

// // add property
// person.hasChildren = true;

// // add function within
// person.greet =  function() {
//     console.log(`Hello, my name is ${this.name}`)
// };

// person.greet();

// // can do it this way too but not recommended
// const person2 = {
//     'first name': 'Brad',
//     'last name': 'Traversy'
// };

// x = person2['first name'];

// console.log(x);

// OBJECT SPREAD AND METHODS
// let x;

// // create objects 

// // object literal
// // const todo = {};

// // object constructor
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// // nest objects
// const person = {
//     address: {
//         coords: {
//             lat: 42.9384,
//             lng: -71.3232
//         },
//     },
// };

// x = person.address.coords.lat;

// // adding objects together
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};

// // spread objects to combine into one
// const obj3 = { ...obj1, ...obj2 };
// // assign objects to empty object
// const obj4 = Object.assign({}, obj1, obj2);

// x = obj4;

// // array of objects
// const todos = [
//     { id: 1, name: 'Buy Milk'},
//     { id: 2, name: 'pick up kids'},
//     { id: 3, name: 'take out trash'},
// ];

// x = todos[0].name;

// // put keys of object into an array
// x = Object.keys(todo);

// // how many keys in the array
// x = Object.keys(todo).length;

// // put values of object into an array
// x = Object.values(todo);

// // array of key/value pairs
// x = Object.entries(todo);

// // boolean for a specific property, below is true
// x = todo.hasOwnProperty('name');

// // boolean for a specific property, below is false (not in the object)
// x = todo.hasOwnProperty('age');

// console.log(x);

// DESTRUCTURING AND NAMING
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//     firstName,
//     lastName,
//     age,
// }

// console.log(person.age);

// // destructuring
// const todo = {
//     id: 1,
//     title: 'Take out trash',
//     user: {
//         name: 'John'
//     },
// };

// // const id = todo.id;

// const { id: todoId, title, user: {name} } = todo;

// console.log(todoId);

// // destructure arrays
// const numbers = [23, 67, 33, 49];

// // rest operator spreader to add to array
// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);

// OBJECT CHALLENGE
// create an array of objects called library
// add 3 objects: title, author, status. 
// title and author are strings, status is object with properties of own, reading, read (booleans)
// for all status set own to true and reading and read to false

const library = [
    {
        title: 'Redwall',
        author: 'Jacques',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'Enders Game',
        author: 'Orson',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'Blade',
        author: 'Snipes',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
];

// step 2: change status of read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// destructure title from first book to firstName
const { title: firstBook } = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON)