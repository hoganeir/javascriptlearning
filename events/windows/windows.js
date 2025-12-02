//WINDOWS PAGE LOADING

// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () =>  console.log('page loaded'))

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('run me')

document.querySelector('h1').innerText = 'hello world'

//listen for resize event
window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//listen for scroll event, change color with if else
window.addEventListener('scroll', () => {
    console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
})

// click in window for focucs (blue) click out for blur (black)
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue'
    })
})

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black'
    })
})