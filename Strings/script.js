let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// template literals, use backticks
x = `Hello, my name is ${name} and I am ${age} years old`;

// string properties and methods
const s = 'hello world';

x = typeof s;

x = s.length;

// access value by key
x = s[3];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0,4);

x = s.substring(7);

x = s.slice(0, 5);

x = '               hello Wrold';

x = x.trim();

x = s.replace('world', 'John')

x = s.includes('hello');

x = s.valueOf();

x = s.split('');

console.log(x);