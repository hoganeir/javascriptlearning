//fetch returns a proimise so you use .thn
//fetch is always GET, not POST or PUT

//fetching a JSON file
// fetch('./movies.json')
//     .then((response) => {
//         // console.log(response);
//         //return = previous .then output which is then next .then argument
//         return response.json();
//     })
//     // implicit return, same thing as above
//     // .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     // implicit return, same thing as above
//     // .then((data) => console.log(data));

// // fetching text file, using implicit returns
// fetch('./test.txt')
// .then((response) => response.text())
// .then((data) => console.log(data));

//fetch from API, using implicit returns, fetch easily grabs site info. better for backend (users, user, user repos)
// fetch('https://api.github.com/users/bradtraversy/repos')
// .then((response) => response.json())
// .then((data) => console.log(data));

// //use data to manipulate document, take the info in data.login to create h1
// fetch('https://api.github.com/users/bradtraversy')
// .then((response) => response.json())
// .then((data) => (document.querySelector('h1').textContent = data.login));

// RANDOM USER PROJECt
// fetching random users from an api, 
// function fetchUser() {
//    showSpinner();
//     //enter api
//     fetch('https://randomuser.me/api')
//     //res = response, response in json
//     .then((res) => res.json())
//     //returns an array of one object, grab the first object
//     .then((data) => {
//         hideSpinner();
//         displayUser(data.results[0]);
//     })
// }

// function displayUser(user) {
//     const userDisplay = document.querySelector('#user');

//     //taking output from above (displayUser), using it in function. if female, purple. if else, blue
//     if (user.gender === 'female') {
//         document.body.style.backgroundColor = 'rebeccapurple';
//     } else {
//         document.body.style.backgroundColor = 'steelblue'
//     }

//     userDisplay.innerHTML = `
//     <div class="flex justify-between">
//   <div class="flex">
//     <img
//       class="w-48 h-48 rounded-full mr-8"
//       src="${user.picture.large}"
//     />
//     <div class="space-y-3">
//       <p class="text-xl">
//         <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Email: </span> ${user.email}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Phone: </span> ${user.phone}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
//       </p>
//       <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
//     </div>
//   </div>
// </div>
//     `;
// }

// function showSpinner () {
//     document.querySelector('.spinner').style.display = 'block';
// };

// function hideSpinner () {
//     document.querySelector('.spinner').style.display = 'none';
// };

// document.querySelector('#generate').addEventListener('click', fetchUser);

// fetchUser();

//FETCH OPTIONS METHOD BODY HEADERS
// post put push method request selected in options
// headers - custom http header, content header, 
//body - put form in the body in the request
//json placeholder.typicode.com
//free fake api for testing and prototyping (JSON server + low DB)
//GET POST PUT PATCH DELETE
// GET = read
// POST = create
// PUT/PATCH = update
// DELETE = delete
//CRUD create read update delete
///posts/1/comments - just the comments
///posts/1 just the first post
///posts just the posts
// GET /posts
// GET /posts/1
// POST /posts
// PUT /posts/1
// PATCH /posts/1
// delete /posts/1

// function createPost(post) {
//     // enter where you're fetching from
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         //enter CRUD method request
//         method: 'POST',
//         //stringify since youre pulling JSON data, can just enter name (post) but clearer to enter object/what you want from object
//         body: JSON.stringify({
//             title: post.title,
//             body: post.body
//         })
//     });
// }

// //simplified version, remove post in function argument, enter title and body, reduce title and body
// function createPost({ title, body }) {
//     // enter where you're fetching from
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         //enter CRUD method request
//         method: 'POST',
//         //stringify since youre pulling JSON data, can just enter name (post) but clearer to enter object/what you want from object
//         body: JSON.stringify({
//             title,
//             body
//         }),
//         //can send whatever you want in headers
//         headers: {
//             'Content-Type': 'application/json',
//             // hello: 'World',
//             token: 'abc123'
//         }
//     }).then(res => res.json())
//       .then(data => console.log(data));
// }

// // create post in server, adds id automatically
// createPost({ title: 'My Post', body: 'This is my Post' })

//TYPICODE TODOS MINI PROJECT
//json placeholder todos project jsonplaceholder.typicode.com/todos?_limit5
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//     //fetch api url (only 5)
//     fetch(apiUrl + '?_limit=10')
//     //resolve to json
//     .then(res => res.json())
//     //grab todos from data
//     .then((data) => {
//         // console.log(data)
//         //new creation moved down to below, adjust data.forEach with that function. loop through
//         data.forEach((todo) => addTodoToDOM(todo));
//             // //for each todo, create div, append text node to div
//             // const div = document.createElement('div');
//             // div.appendChild(document.createTextNode(todo.title));
//             // //add data id to the elements in the todo list (elements in inspecotr)
//             // div.setAttribute('data-id', todo.id)

//             // //boolean with each todo saying true or false, if completed add class list done(from css)
//             // if (todo.completed) {
//             //     div.classList.add('done');
//             // }

//             // //get element (todo-list) append child (todo from div)
//             // document.getElementById('todo-list').appendChild(div);
//         })
// };

// //move the creation for each new one into a new function here
// const addTodoToDOM = (todo) => {
//     //for each todo, create div, append text node to div
//     const div = document.createElement('div');
//     //add todo classList to the divs created so toggle works easier
//     div.classList.add('todo')
//     div.appendChild(document.createTextNode(todo.title));
//     //add data id to the elements in the todo list (elements in inspecotr)
//     div.setAttribute('data-id', todo.id)

//     //boolean with each todo saying true or false, if completed add class list done(from css)
//     if (todo.completed) {
//         div.classList.add('done');
//     }

//     //get element (todo-list) append child (todo from created div)
//     document.getElementById('todo-list').appendChild(div);
// };

// //create todo via the form. e is event listener?
// const createTodo = (e) => {
//     e.preventDefault();

//     // take the input value and create new todo object
//     const newTodo = {
//         //taking the element of the input form
//         title: e.target.firstElementChild.value,
//         completed: false
//     }

//     // post the input from the form to the server api url POST
//     fetch(apiUrl, {
//         method: 'POST',
//         body: JSON.stringify(newTodo),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     //response statement
//     .then(res => res.json())
//     //add data to the DOM
//     .then(data => addTodoToDOM(data))
// }

// //target classList toggle done, adds shading to div
// const toggleCompleted = (e) => {
//     if (e.target.classList.contains('todo'))
//     e.target.classList.toggle('done')

//     updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
//     // console.log(e.target.dataset.id) show id number of todo
// }

// //update the todo with the click, changes completed true to false to true in the server
// const updateTodo = (id, completed) => {
//     // console.log(id, completed); show todo and whether completed or not
//     fetch(`${apiUrl}/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ completed }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         // .then(res => res.json())
//         // .then(data => console.log(data))
// } 

// //delete todo on dbl click
// const deleteTodo = (e) => {
//     if (e.target.classList.contains('todo')) {
//     //    console.log('delete') shows delete on dbl
//     //target id in the dataset
//     const id = e.target.dataset.id;
//     //using fetch delete
//     fetch(`${apiUrl}/${id}`, {
//         method: 'DELETE',
//     })
//         //takes the response from the server (after the DELETE request has been sent) and parses its body as JSON 
//         .then((res) => res.json())
//         // executed after the server's JSON response has been processed. It then removes the HTML element (e.target) fromt he DOM
//         .then(() => e.target.remove()) 
//     }
// }

// // initialize functions/event listeners when DOM Contnet Is loaded
// const init = () => {
//     //when dom is loaded, getTodos runs
//     document.addEventListener('DOMContentLoaded', getTodos)
//     document.querySelector('#todo-form').addEventListener('submit', createTodo);
//     document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
//     document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
//     // getTodos(), added this to the above
// }

// //sets up the event listeners/query selectors
// init();

// FETCH CATCH ERROR
//this site doesnt work but used to be able to call statuses, below fetch calls a success
// fetch('https://httpstat.us/200')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })

//     // 404 response
    // fetch('https://httpstat.us/404')
    // .then((response) => {
    //     //show status of fetch response with response.status or t/f of response ok with response.ok
    //     console.log(response.ok)
    //     // throw catch error
    //     if (!response.ok) {
    //         throw new Error('Request Failed')
    //     }
    //     return response;
    // })
    // .then(() => {
    //     console.log('success');
    // })
    // .catch(error => {
    //     console.log(error)
    // })

//network error, this doesnt exist. catch runs on a network error like below
// fetch('https://hello123.net')
// .then((response) => {
//     return response;
// })
// .then(() => {
//     console.log('success');
// })
// .catch(error => {
//     console.log(error)
// })

// ASYNC AWAIT
// .then example
// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: 'John', age: 20});
//     }, 1000)
// });

// // promise.then((data) => console.log(data));

// // async function
// async function getPromise() {
//     const response = await promise;
//     console.log(response);
// }

// // getPromise()

// //another example, it takes a second. cleaner and easier. 
// async function getUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log(data);
// }

// //.then get the same as above, this is more complicated
// // function getUsers() {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then((res) => res.json())
// //     .then((data) => console.log(data))
// // }

// getUsers()

// const getPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();

//     console.log(data);
// }

// getPosts()

// TRY CATCH
//catch errors
// try {
//     console.log(x);
// } catch (error) {
//     console.log('Error: ' + error)
// }


// // console.log(x);

// function double(number) {
//     if (isNaN(number)) {
//         throw new Error(number + ' is not a number');
//     }

//     return number * 2;
// }

// try {
//     const y = double('hello');
//     console.log(y);
// } catch (error) {
//     console.log(error)
// }

// //ASYNC AWAIT ERROR HANDLING
// //throw error with try catch, this is better, cleaner and handles all. 
// const getUsers = async () => {
//     try {
//         // const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const response = await fetch('httpstat.us/500')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getUsers()

// //throw error in the function but catch error with the execution
// const getPosts = async () => {
//         // const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const response = await fetch('httpstat.us/500')
        
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }

//         const data = await response.text()

//         console.log(data);
// };

// getPosts().catch((error) => console.log(error));