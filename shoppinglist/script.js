// put variables int he top to access in global scope

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');

// add item to a list
function addItem(e) {
    e.preventDefault();

    // value of what is entered into the input field
    const newItem = itemInput.value;

    // validate input
    if (newItem === '') {
        alert('please add item');
        return;
    }

    // create list item, add new item to the list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    // create button and add it to the li (see below button and icon functions)
    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);

    // console.log(li)
    // console.log('success');
    // console.log(button);
    // console.log(li)

    // add li to DOM with button (with icon) to the itemList
    itemList.appendChild(li);

    // check ui for buttons to appear, 
    checkUI();

    // return item input field to empty
    itemInput.value = '';
}

// create button thats in list item, add icon to button
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

//create icon thats in button, see above for adding to buton
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

//function to remove li with button/icon, event target to find item, parent element,class list contains remove, then remove on click
function removeItem(e) {
    // console.log(e.target.parentElement.classList);
    if (e.target.parentElement.classList.contains
        ('remove-item')) {
            // add confirm statement to go through with it (adjusted remove item function, can be realigned)
            if (confirm('Are you sure?')) {
                // console.log('click');
                e.target.parentElement.parentElement.remove();
                // run checkUI again to clear items after each function
                checkUI();
            }
    }
}

function clearItems() {
    // console.log('works')
    // simple easy way below, clears out innerhtml of list
    // itemList.innerHTML = '';
    // alt technique where each firstChild is removed (each item)
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    //checkUI run to clear filter/clear, have to run each function
    checkUI();
}

// check user interface (UI), if there are no items in the UL then clear and filter dont display
function checkUI() {
    // have to put the items inside function so the scope is correct, otherwise its going off the idea that there are no list
    const items = itemList.querySelectorAll('li');
    // console.log(items);
    // if 0 items in ul then no buttons
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        // if items > 0 then show buttons
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

// event listeners at the bottom of the script
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();