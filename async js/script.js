// SETTIMEOUT
// //2 second delay, appears second (2000 = milliseconds)
// setTimeout(function () {
//     console.log('hello from callback');
// }, 2000);

// //appears instantly, appears first
// console.log('hello from global scope');

//running changetext function, upon reload takes two seconds to change h1. good for timing 
// setTimeout(changeText, 2000);

// function changeText() {
//     document.querySelector('h1').textContent = 'hello from callback';
// }

// //assign to variable still works to execute
// const timerId = setTimeout(changeText, 3000)

// //using a button to cancel, upon click you run clearTimeout, timercanceleld 
// document.querySelector('#cancel').addEventListener('click', () => {
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('Timer Cancelled');
// })

//SETINTERVAL
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//     console.log(a, Date.now());
// }


//alternating background colors (event listeners at bottom, variables on top),
// let intervalID;

// // function on start button click
// function startChange() {
//     if (!intervalID) {
//         intervalID = setInterval(changeRandomColor, 1000);
//     }
// }

// //if else statement on black and white
// // function changeColor() {
// //     if(document.body.style.backgroundColor !== 'black') {
// //         document.body.style.backgroundColor = 'black';
// //         document.body.style.color = 'white';
// //     } else {
// //         document.body.style.backgroundColor = 'white';
// //         document.body.style.color = 'black';
// //     }
// // }

// //change background to random color
// function changeRandomColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
// }


// //function on stop button click
// function stopChange() {
//     clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);

// CALLBACKS
//simple button toggle
// function toggle(e) {
//     e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post 2'},
// ];

// function createPost(post, cb) {
//     setTimeout(() => {
//         posts.push(post);
//         cb();
//     }, 2000);
// }

// //mimicking getting from a srver, a few seconds. create loop of post function that creates div element, adds post info to element and appends to div
// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         })
//     }, 1000);
// }

// //moving getpost() as separate function, reads it, callback, does post 1 and 2, then post 3
// createPost({title: 'Post three', body: 'this is post three'}, getPosts);

//AJAX XHR
// const xhr = new XMLHttpRequest();

// // xhr.open('GET', './movies.json');
// xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')

// // READY STATE 5 POSSIBLE VALUES
// // 0 request not initialized
// // 1 server connection established
// // 2 request received
// // 3 processing request
// // 4 request finished and response is ready

// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(JSON.parse(this.responseText));
//         const data = JSON.parse(this.responseText);

//         data.forEach((repo) => {
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//             document.querySelector('#results').appendChild(li);
//         })
//     }
// };

// xhr.send();

//CALLBACK HELL - bascially when youre doing callback after callback
// function getData(endpoint) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//         //combine if statements from above, state 4 and status 200
//         if (this.readyState === 4 & this.status === 200) {
//             console.log(JSON.parse(this.responseText));
//         }
//     }

//     setTimeout(() => {
//         xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData('./movies.json', (data) => {
//     console.log(data);
//     getData('./actors.json', (data) => {
//         console.log(data;
//         getData('./directors.json', (data) => {
//             console.log(data);
//         })
//         )
//     });
// });

// getData('./actors.json')
// getData('./directors.json')

//PROMISES - itll complete some type of operation while rest of code executes, asynchorhonos or nonblocking. prevents callback hell
//promise -> then

//create a promise, this will run alongside the js code
// const promise = new Promise((resolve, reject) => {
//     //do some async task
//     setTimeout(() => {
//         console.log('Async task complete');
//         resolve();
//     }, 1000)
// });

// promise.then(() => {
//     console.log('promise consumed..')
// });

// // can put the .then right on the promise itself
// new Promise((resolve, reject) => {
//     //do some async task
//     setTimeout(() => {
//         //can resolve out objects as well (change user runthrough)
//         resolve({ name: 'John', age: 30 });
//     }, 1000)
// }).then((user) => console.log(user));

// //can run with new variables as well getUser with getUser.then
// const getUser = new Promise((resolve, reject) => {
//     //do some async task
//     setTimeout(() => {
//         //can resolve out objects as well (change user runthrough)
//         resolve({ name: 'John', age: 30 });
//     }, 1000)
// })

// getUser.then((user) => console.log(user));

// const getUser2 = new Promise((resolve, reject) => {
//     //do some async task
//     setTimeout(() => {
//         let error = true;

//         if (!error) {
//             resolve({ name: 'JOhn', age: 30});
//         } else {
//             reject('Error: wrong')
//         }
//     }, 1000);
// })

// //throw an error in there
// getUser2
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('The promise has been resolved or rejected'));

// //this runs immediately
// console.log('hello from global scope')

// CALLBACK TO PROMISE REFACTOR - mimicking an asynchoronous task
// const posts = [
//         {title: 'Post one', body: 'This is post one'},
//         {title: 'Post two', body: 'This is post 2'},
//     ];
    
//     //how to do this as a promise
//     // function createPost(post) {
//     //     return new Promise((resolve, reject) => {
//     //         setTimeout(() => {
//     //             posts.push(post);
//     //             resolve();
//     //         }, 2000);
//     //     });
//     // }

//     // how to throw an error
//     function createPost(post) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let error = true;

//                 if(!error) {
//                     posts.push(post);
//                     resolve()
//                 } else {
//                     reject('something went wrong')
//                 }
//             }, 2000);
//         });
//     }
    
//     function getPosts() {
//         setTimeout(() => {
//             posts.forEach(function (post) {
//                 const div = document.createElement('div');
//                 div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//                 document.querySelector('#posts').appendChild(div);
//             })
//         }, 1000);
//     }
    
// function showError(error) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<strong>${error}</strong>`;
//     document.getElementById('posts').appendChild(h3)
// }

//     createPost({ title: 'Post three', body: 'this is post three' })
//         .then(getPosts)
//         .catch(showError);


// PROMISE CHAINING
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = false;
//         let error = true;

//         if (!error) {
//             resolve({ name: 'John', age: 30 });
//         } else {
//             reject('Error somethingwentwrong');
//         }
//     }, 1000);
// });

// //chaining with .then, can do as many times as you want. use return and .then repeat as needed
// promise
//     .then((user) => {
//         console.log(user);
//         return user.name;
//     })
//     .then((name) => {
//         console.log(name);
//         return name.length;
//     })
//     .then((nameLength) => {
//         console.log(nameLength);
//     })
//     .catch((error) => {
//         console.log(error);
//         return 123;
//     })
//     //if you catch error you can still throw .then after, which will run
//     .then((x) => console.log('this will run no matter what', x));

//PROMISES VS COMBACK HELL
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', endpoint);
    
//         xhr.onreadystatechange = function () {
//             //combine if statements from above, state 4 and status 200
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject('seomthing went wrong')
//             }
//         }
//         }
    
//         setTimeout(() => {
//             xhr.send();
//         }, Math.floor(Math.random() * 3000) + 1000);
//     });
// }

// getData('./movies.json')
//     .then((movies) => {
//         console.log(movies);
//         return getData('./actors.json');
// })
//     .then((actors) => {
//         console.log(actors);
//         return getData('./directors.json');
//     })
//     .then((directors) => {
//         console.log(directors);
//     })
//     .catch((error) => console.log(error));

// PROMISES ALL
function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);
    
        xhr.onreadystatechange = function () {
            //combine if statements from above, state 4 and status 200
            if (this.readyState === 4) {
                if (this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject('seomthing went wrong')
            }
        }
        }
    
        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
    resolve('hello world')
})

//returns array of promised results, get an array of arrays with each cateogry in it. basically groups all promises together
//from multipe data points
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));