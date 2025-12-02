//events
// make page interactie
// use it eiwht event handler

// EVENT LISTENERS
// what are events: actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react
// click an element, typing into a text filed, hovering over element, submitting form, closing window, dragging an element, resizing element
// listen for an event

//NOT RECOMMENDED ADD EVENT LISTENER (security risk)
// putting listener in HTML, dont do it

// const clearBtn = document.querySelector('#clear');

// function onClear() {
//     alert('Clear items')
// }

//javascript event listener (this one creates an alert on clicking clearbtn (clearbtn crated above))
// clearBtn.onclick = function () {
//     alert('clear items');
// }

// more modern way: add event listener method!!!! take created element, add event listener, select event, run function
// clearBtn.addEventListener('click', function () {
//     console.log('clear items');
// })

//even cleaner way using arrow function
// clearBtn.addEventListener('click', () => alert('clear items'))

//can add as many event listeners as you want see above with console.log, tow different
// clearBtn.addEventListener('click', () => alert('clear items'))
// clearBtn.addEventListener('click', () => console.log('clear items'))

// same as above but can use named functions without =>
// clearBtn.addEventListener('click', onClear)

//remove event listener, use when removing from DOM. below button doesnt work after 5 seconds

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// fire off event from script
// setTimeout(() => clearBtn.click(), 5000)

//challenge: clear items

//hogan
// function clearItems (){
//     const clearBtn = document.querySelector('#clear');

//     clearBtn.addEventListener('click', function () {
//         const items = document.querySelectorAll('.items')
//         items.innerHTML = ''
//     })
// }

// clearItems()

//solution - can have varialbe and event listener outside function
// const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', onClear)

// // function onClear() {
// //     const itemList = document.querySelector('ul');

// //     itemList.innerHTML = ''
// // }

// // alternate way
// // function onClear() {
// //     const itemList = document.querySelector('ul');
// //     const items = itemList.querySelectorAll('li');

// //     items.forEach((item) => item.remove()); 
// // }

// //alternate, more performant, while loop
// function onClear() {
//     const itemList = document.querySelector('ul');
//     const items = itemList.querySelectorAll('li');

//     // sets up loop for each, if there is a first child then remove it, each removal creates new first child, goes until no more children to be first child
//     while (itemList.firstChild) {
//         itemList.removeChild(itemList.firstChild);
//     }
// }

// //MOUSE EVENTS
// // no logo but walk throug hit all
// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// // create an if else statement, if backgorund not purple double click changes to purple, if it is purple change to white with black (toggle on double click)
// const onDoubleClick = () => {
//     if (document.body.style.backgroundColor !== 'purple') {
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.color = 'white'
//     } else {
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// }

// const onRightClick = () => console.log('right click event')

// const onMouseDown = () => console.log('mouse down event')

// const onMouseUp = () => console.log('mouse up event')

// const onMouseWheel = () => console.log('mouse wheel event')

// const onMouseOver = () => console.log('mouse over event')

// const onMouseOut = () => console.log('mouse out event')

// const onDragStart = () => console.log('drag start event')

// const onDrag = () => console.log('drag event')

// const onDragEnd = () => console.log('drag end event')

// // event listeners at bottom, functions above
// logo.addEventListener('click', onClick);
// //double click = dbl
// logo.addEventListener('dblclick', onDoubleClick)
// // right click (context menu)
// logo.addEventListener('contextmenu', onRightClick)
// //click and drag down
// logo.addEventListener('mousedown', onMouseDown)
// // click and drag up
// logo.addEventListener('mouseup', onMouseUp)
// //mouse wheel
// logo.addEventListener('wheel', onMouseWheel)
// //mouse over (hover)
// logo.addEventListener('mouseover', onMouseOver)
// //on mouse out, remove mouse
// logo.addEventListener('mouseout', onMouseOut)
// // drag start
// logo.addEventListener('dragstart', onDragStart)
// //dragging in progress
// logo.addEventListener('drag', onDrag)
// // drag end/end of drag
// logo.addEventListener('dragend', onDragEnd)

//THE EVENT OBJECt
// const logo = document.querySelector('img');

// function onClick(e) {
//     // console.log(e.target)
//     // console.log(e.currentTarget)
//     // // use target to change certain things like style
//     // e.target.style.backgroundColor = 'black'
//     // console.log(e.type);
//     // console.log(e.timeStamp);
//     // console.log(e.clientX)
//     // console.log(e.clientY)
//     // console.log(e.offsetX)
//     // console.log(e.offsetY)
//     // console.log(e.pageX)
//     // console.log(e.pageY)
//     // console.log(e.screenX)
//     // console.log(e.screenY)
// }

//change header to the x, y coordinates when clicked and dragged, tracking piositions
// function onDrag(e) {
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('click', onClick)
// logo.addEventListener('drag', onDrag)

// if you do it in body it will show on every click, the target will show
// document.body.addEventListener('click', function (e) {
//     console.log(e.target);
//     console.log(e.currentTarget)
// })

// logo.addEventListener('click', function (e) {
//     console.log(e)
// })

// target - the element that triggered the event (shows the imaget tag (console.log(e.target)))
// currentTarget - the element that the event listener is attached to(these are the same type in this case)
// use these to do certain things to the element
//timeStamp
//clientX x coordinates of where you click
// clientY y coordaintes of where you click
//offsetx slightly off coordinates 
//offsety slightly off coordinates
//pagex coordinates of page
//pagey coordinates of page
//screenx coordiantes of screen
//screeny corodaintes of screen

//preventdefault - forms, stops prevent default of the behavior. front end
//dont want form to submit to page use prevent default

// document.querySelector('a').addEventListener('click',
//     function(e) {
//         e.preventDefault();

//         console.log('Link was clicked')
//     }
// )

//KEYBOARD EVENTS
//key down key up key press

// const itemInput = document.getElementById('item-input');

// //return keypress event when key is pushed, only counts once
// const onKeyPress = (e) => {
//     console.log('keypress');
// };

// //when key is lifted up
// const onKeyUp = (e) => {
//     console.log('keyup');
// };

// //when key is pushed down, will keep going as you hold it down
// const onKeyDown = (e) => {
//     // console.log('keydown');

//     // key (view each key pressed into the form)
//     // console.log(e.key);
//     // document.querySelector('h1').innerText = e.key;

//     // track which key is pressed, loop to respond to a certain key
//     // if (e.key === 'Enter') {
//     //     alert('You pressed enter');
//     // }

//     //keyCode - can use the codes from the below site to mark keys (13 is enter)
//     // https://www.toptal.com/developers/keycode/table
//     if (e.keyCode === 13) {
//         alert('you pressed enter')
//     }

//     //code - the code from the keyboard entered into the form
//     console.log(e.code)
//     if (e.code === 'Digit1') {
//         console.log('you pressed 1')
//     }

//     //repeat key - if theyre pressing and holding
//     if(e.repeat) {
//         console.log('you are holding down' + e.key)
//     }

//     console.log('Shift: ' + e.shiftKey)
//     console.log('Control: ' + e.ctrlKey)
//     console.log('Alt: ' + e.altKey)

//     if (e.shiftKey && e.key === 'K') {
//         console.log('You hit shift + K')
//     }
// };

// // itemInput.addEventListener('keypress', onKeyPress)
// // itemInput.addEventListener('keyup', onKeyUp)
// itemInput.addEventListener('keydown', onKeyDown)

// key code miniproject
//see other folder

//INPUT EVENTS
// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// //e.target.value you get the whole thing thats input
// function onInput(e) {
//     heading.textContent = e.target.value;
    
//     console.log(e.target.value)
// }

// function onChecked(e) {
//     const isChecked = e.target.checked;
//     heading.textContent = isChecked ? 'Checked' : 'Not Checked';
// }

// //visual affects in UI, dynamic page
// function onFocus() {
//     console.log('input is focused')
//     itemInput.style.outlineStyle = 'solid';
//     itemInput.style.outlineWidth = '1px';
//     itemInput.style.outlineColor = 'green';
// }

// //visual affects in UI
// function onBlur() {
//     console.log('input not focused')
//     itemInput.style.outlineStyle = 'none'
// }

// itemInput.addEventListener('keydown', onInput);
// priorityInput.addEventListener('input', onInput);
// checkbox.addEventListener('input', onChecked)
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);

//FORM SUBMISSIOn & FORM DATA OBJECT
// const form = document.getElementById('item-form');

// function onSubmit(e) {
//     //stops default behavior, allows submitting
//     e.preventDefault()
    
//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     //validation to ensure info is eneterd properly
//     if (item === ''  || priority === '0') {
//         alert('Please fill in all fields')
//         // return to before the function
//         return;
//     }
    
//     console.log(item, priority)
// }

// function onSubmit2(e) {
//         e.preventDefault()

//         const formData = new FormData(form);

//         const item = formData.get('item');
//         const priority = formData.get('priority')

//         //iterator
//         const entries = formData.entries();
//         // console.log(entries);

//         //have to enter this to get array with anme and valeu, then enter 
//         for (let entry of entries) {
//             console.log(entry[1]);
//         }

//         // console.log(formData);
//         // console.log(item, priority)
//     }


// // form.addEventListener('submit', onSubmit);
// form.addEventListener('submit', onSubmit2);

//EVENT BUBBLING
//event is first captured and handled by the innermost element and then propagated to outer elements
//button click -> div -> body -> html -> document
// event will go up things as the funnel goes 

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(1)');
// const form = document.querySelector('form');

// button.addEventListener('click', () => {
//     alert('Button was clicked');
//     //dont just call for the hell of it, this will stop bubbling
//     e.stopPropagation();
// });

// div.addEventListener('click', () => {
//     alert('div was clicked');
// });

// form.addEventListener('click', () => {
//     alert('form was clicked');
// });

// document.body.addEventListener('click', () => {
//     alert('body was clicked')
// })

//EVENT DELEGATION AND MULTIPLE EVENTS
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    };
})

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    };
})

// page loading & window object
document.querySelector('h1')