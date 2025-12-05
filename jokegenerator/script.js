// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);

//create variables, jokeEl = joke from website, jokebtn = button
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

//function generateJoke
const generateJoke = () => {
    //create XML request
    const xhr = new XMLHttpRequest();

    //requesting from server with GET
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    //on readystatechange of btn run if else function. 
    xhr.onreadystatechange = function () {
        // if state of xml is 4 and state of server is 200 show the value of the responseText
        if (this.readyState === 4) {
            if (this.status === 200) {
                // console.log(JSON.parse(this.responseText).value)
                //create object with JSON.parse of responseText, then take value just for the joke in the object
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {
                //if doesnt load correctly, show this
                jokeEl.innerHTML = 'Something went wrong nto funny';
            }
        }
    }
    //send xhr request
    xhr.send();
}

//event listeners
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);