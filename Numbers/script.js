// let x;

// const num = new Number(5);

// x = num.toString();
// x = num.toString().length;

// x = num.toFixed(2);

// x = num.toPrecision(2);

// x = num.toExponential(2);

// x = num.toLocaleString('en-US');

// x = num.valueOf();

// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x, typeof x);

// MATH OBJECT
// let x;

// x = Math.sqrt(9);

// x = Math.abs(-5);

// x = Math.round(4.6);

// x = Math.ceil(4.2);

// x = Math.floor(4.9);

// x = Math.pow(2, 3);

// x = Math.min(4, 5, 3);

// x = Math.max(4, 5, 3);

// x = Math.random();

// x = Math.random() * 10 + 1;

// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);

// NUMBER CHALLENGE
// create variable called x that is arandom number between 1 and 100 
// along with a variable called y that is a random number between 1 and 50
// create a variable for the sum difference product quoteint and remainder of x and y
// log output in a string that shows the two numbers of x and y along operator and result

// let x;

// x = Math.floor(Math.random() * 100 + 1);

// console.log(x)

// let y;

// y = Math.floor(Math.random() * 50 + 1);

// console.log(y);

// const sumOutput = Number(x) + Number(y);

// const differenceOutput = Number(x) - Number(y);

// const productOutput = Number(x) * Number(y);

// const quotientOutput = Number(x) / Number(y);

// const rmOutput = Number(x) % Number(y);


// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// solution
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`
console.log(sumOutput);