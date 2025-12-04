// put variables int he top to access in global scope

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

// display items on DOMContentLoaded so items appear when DOM is loaded, go through each item and add to DOM
function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    //retain filter and clear button
    checkUI();
}

// add item to a list
function onAddItemSubmit(e) {
    e.preventDefault();

    // value of what is entered into the input field
    const newItem = itemInput.value;

    // validate input
    if (newItem === '') {
        alert('please add item');
        return;
    }

    //check for edit mode, if item is in edit mode so it will add when updating li
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);

        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    } else {
        //when added get alert that says already exists if item already is in there upon submit
        if (checkIfItemExists(newItem)) {
            alert('that item already exists');
            return;
        }
    }

    //create item DOM element using function below
    addItemToDOM(newItem);

    //add item to local storage using function below
    addItemToStorage(newItem);

    // check ui for buttons to appear, 
    checkUI();

    // return item input field to empty
    itemInput.value = '';
}

function addItemToDOM(item) {
    // create list item, add new item to the list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    // create button and add it to the li (see below button and icon functions)
    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);

    // console.log(li)
    // console.log('success');
    // console.log(button);
    // console.log(li)

    // add li to DOM with button (with icon) to the itemList
    itemList.appendChild(li);
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

//add items to storage upon submit (this function runs in the submit functions, adds it to local storage)
function addItemToStorage(item) {
    //creating variable
    // let itemsFromStorage;
    const itemsFromStorage = getItemsFromStorage();

    //add new item to array
    itemsFromStorage.push(item);

    //convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

//retrieve the items from storage and hold them
function getItemsFromStorage() {
    //creating variable
    let itemsFromStorage;

    //checking to see if there is items in array (shopping list), if not it is empty array, if there are parse items into array back into variable itemsFromStorage
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

//edit li's via the form button
function setItemToEdit(item) {
    isEditMode = true;
    
    //toggle between li when clicking for edit mode
    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

    //item.style.color = '#ccc' - can change color this way or  make a class in css like below
    item.classList.add('edit-mode');
    //change formbutton from add item to update item and diff color upon click
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    //put text back on form input section
    itemInput.value = item.textContent;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains
        ('remove-item')) {
            removeItem(e.target.parentElement.parentElement);
        } else {
            //if you click anywhere but the x btn
            setItemToEdit(e.target);
        }
}

//prevent duplicate items in input form
function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);

    //simplify below with the secondline in function above
    // if (itemsFromStorage.includes(item)) {
    //     return true;
    // } else {
    //     return false;
    // }
}


//function to remove li with button/icon, event target to find item, parent element,class list contains remove, then remove on click
function removeItem(item) {
    if (confirm('Are you sure?')) {
        //remove item from DOM
        item.remove();

        //remove item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

//function to remove items from local storage
function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    //filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    //re-set to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

    // console.log(itemsFromStorage)
}

function clearItems() {
    // console.log('works')
    // simple easy way below, clears out innerhtml of list
    // itemList.innerHTML = '';
    // alt technique where each firstChild is removed (each item)
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    //clear from localstorage when hitting clear button
    localStorage.removeItem('items')

    //checkUI run to clear filter/clear, have to run each function
    checkUI();
}

// use filter item in the page, text = value entered, all lower case
function filterItems(e) {
    //add items to the local scope
    const items = itemList.querySelectorAll('li');
    // text = value entered, change to lowercase output
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        // console.log(item);
        //pull out each item in the loop, textContent = only text
        const itemName = item.firstChild.textContent.toLowerCase();

        //go through each, if input is not empty then show the item (ie a for apple), if not then do not display (ie z)
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
            // console.log(true);
        } else {
            item.style.display = 'none';
            // console.log(false);
        }
        // console.log(itemName)
    })

    // console.log(text);
}

// check user interface (UI), if there are no items in the UL then clear and filter dont display
function checkUI() {
    itemInput.value = '';
    
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

    //change button from update item back to add item after button is clicked
    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;
}

//initialize app if you want to, but can leave addeventlisteners outside in global scope
function init() {
    // event listeners at the bottom of the script
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}

init();

//set key and value for local storage, name = brad
// localStorage.setItem('name', 'Brad');
// //output get item name = Brad
// console.log(localStorage.getItem('name'));
// //remove from local storage
// localStorage.removeItem('name');
// //clear all items
// localStorage.clear();
// //stores only as long as the session is open
// sessionStorage.setItem('name', 'Brad')