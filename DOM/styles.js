// WORKING WITH STYLES AND CLASSES
// manipulate css classes and css direclty
// dynamic functionality, display menu on click etc

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    //console.log(1); shows one when you click run button

    //class name: changes class name, changes dark once clicks run
    // console.log(itemList.className);
    // // be aware of name changes on classes
    // text.className = 'card dark';

    //classList - similar to an array, can loop through
    // console.log(itemList.classList)

    itemList.classList.forEach((c) => console.log(c));

    //add and remove
    // text.classList.add('dark');
    // text.classList.remove('card');

    // changing card to card dack and back and forth with each button click
    // text.classList.toggle('dark');
    // toggle the hidden class for the paragraph section
    // text.classList.toggle('hidden');

    // not toggle but replace, replace card with card dark 
    text.classList.replace('card', 'dark')

    // change style, use camel case not hypehn, change line height to 3
    // itemList.style.lineHeight = '3'

        // use a loop to adjust per item, make all red, if 2 (3rd) then make it blue
    items.forEach((item, index) => {
        item.style.color = 'red'

        if (index === 2) {
            item.style.color = 'blue';
        }
    })


}

// created function above, using click event to run the fucntion
document.querySelector('button').onclick = run;

