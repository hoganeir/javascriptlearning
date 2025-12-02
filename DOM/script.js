// DOCUMENT OBJECT MODEL DOM
// programming interface for web/HTML elements
// structure that we can interact with via Javascript
// includes tags, attributes, text nodes etc
// represented as a tree structure

//properties
// console.dir(window.document)

// console.log(document.body.innerHTML);

// console.log(document.links[0])

// document.body.innerHTML = '<h1>Hello World</h1>';

// document.write('Hello from JS');

// console.log(document.getElementById('main'));
// const main = document.getElementById('main');
// // main.innerHTML = '<h1>Hello from main</h1>';

// document.querySelector('#main h1').innerText = 'Hello'

// DOCUMENT ELEMENT PROPERTIES
// let output;

// // html all collection, all the differetn parts of the DOM Of the page, can get speicific parts
// output = document.all;
// output = document.all[10];
// output = document.all.length;

// output = document.documentElement;

// output = document.head;
// output = document.body;

// output = document.head.children;
// output = document.body.children;

// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// // can dive into all the differetn parts of the document, like a file structure. id elements etc

// output = document.forms;
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // document.forms[0].id = 'new-id';

// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id =  'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// //html collection is array like ie the [0]

// // cant use function with HTML collection, have to convert to an array see below
// // document.forms.forEach((form) => console.log(form));

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form))

// console.log(output);

// DOM SELECTORS - SINGLE ELEMNTS
// identify each single element as needed, use it for manipulation, once again like a file structure
// document.getElementById()

// not in the .html but its under h1
// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'))

// // set attributes
// document.getElementById('app-title').title = 'Shopping lIst'
// document.getElementById('app-title').setAttribute ('class', 'title')

// const title = document.getElementById('app-title')

// //get/change content
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // change style, whne something changes with interaction ie popup
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // document.querySelector(), only selects first one, use to selec tones that are only one of

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// // manipulate just one item in the html, ie the second li changing from orange juice to apple juice and the color
// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue'

//DOM SELECTOR MULTIPLE ITEMS
// querySelectorAll()

// const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// cant adjust style like this since it is an array
// listItems.style.color = 'red';
// can adjust the second item like an array
// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 1) {
//         item.remove();
//     }

//     if (index === 0) {
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//     }
// });

// const listItems2 = document.getElementsByClassName('item');

// //have to conver tot an array see aboce
// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// //have to convert to an array, see above
// listItemsArray.forEach((item) => {
//     console.log(item.innerText);
// });

// //get elements by tag name

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText)

//TRAVERSING THE DOM - ELEMENTS
// element nodes: relationships between elements
// divs are parents to children divs, children divs under parents are sibling divs

// get child elements

// let output;

// const parent = document.querySelector('.parent');
// output = parent.children;

// output = parent.children[1]
// output = parent.children[1].innerText
// output = parent.children[1].className
// output = parent.children[1].nodeName

// parent.children[1].innerText = 'child two'
// parent.children[1].style.color = 'red'

// parent.firstElementChild.innerText = 'Child one'
// parent.lastElementChild.innerText = 'Child three'

// // get parent elements from a child, output parent while using child
// const child = document.querySelector('.child')

// // used parent element from child to change styel
// output = child.parentElement
// child.parentElement.style.border = '1px solid #ccc'
// child.parentElement.style.padding = '10px'

// // sibling elements (use the nth child to select second see belwo)
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// // adjust style from child -> sibling
// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';
 
// // dir all the properties
// // console.dir(output)ß

// console.log(output);

// trvaersing the DOM - all nodes

// let output;

//  const parent = document.querySelector('.parent');

// // get the node list, 9 in the parent div 
// output = parent.childNodes;
// output = parent.childNodes[0];
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].nodeName;
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].outerHTML;

// output = parent.childNodes[3].innerText = 'Child One';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.firstChild.textContent = 'Hello';

// // parent node
// const child = document.querySelector('.child')

// output = child.parentNode;
// output = child.parentElement;

// child.parentNode.style.backgroundColor = '#ccc'
// child.parentNode.style.padding = '10px';

// // siblings
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling
// output = secondItem.previousSibling

//  console.log(output)

 // CREATE AND APPEND ELEMENTS
// create and insert elements
// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // better to create new text node and append to element
// // div.innerText = 'Hello World';

// // better way
// const text = document.createTextNode('Hellow world');
// // appendchild appends any variable to a div/element etc IMPORTANT
// div.appendChild(text)

// end of body
// document.body.appendChild(div);

// add to list 
// document.querySelector('ul').appendChild(div)

// INNERHTML VS CREATE ELEMENT
// quick & dirty 
// adding items to list with the html creation IMPORTANT

// item is what you want to go in
// function createListItem(item) {
//     // this has to be created as a node
//     const li = document.createElement('li');

//     // this is where its going to go in (innerhtml of element)
//     li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//     // append the new li to the document in the li
//     document.querySelector('.items').appendChild(li);
// }
 
// // clean and performant way - create buttons, elements etc
// function createNewItem(item) {
//     const li = document.createElement('li');
//     //li appeneded to document
//     li.appendChild(document.createTextNode(item))

//     // class from original html
//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text red';
    
//     // class from oroginal html
//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';

//     button.appendChild(icon);
//     li.appendChild(button);

//     // console.log(li.innerHTML);
//     //add new li with all added buttons to .items section
//     document.querySelector('.items').appendChild(li);
// }

// createListItem('Eggs');
// createNewItem('cheese')

// REFACTOR TO MULTIPLE FUNCTIONS
// use one function for each creation and appending

// function createNewItem(item) {
//     const li = document.createElement('li');
//     //li appeneded to document
//     li.appendChild(document.createTextNode(item))

//     const button = createButton('remove-item btn-link text-red');

//     li.appendChild(button);

//     // console.log(li.innerHTML);
//     //add new li with all added buttons to .items section
//     document.querySelector('.items').appendChild(li);
// }

// function createButton(classes) {
//     const button = document.createElement('button');
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);

//     return button;
// }

// function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon
// }

// // createListItem('Eggs');
// createNewItem('cheese')
// createNewItem('sauce')

// // INSERT ELEMENTS TEXT AND HTML
// // appendchild

// // insertAdjacentElement 
// function insertElement() {
//     //insert where you want it in this case its before the filter items div
//     const filter = document.querySelector('.filter')

//     //create element in this case a headline with textcontent of insertadajcent
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';

//     //based on locaiton do you want it before or after? 'beforebegin' = beginning of element, 'afterend' = end of element
//     filter.insertAdjacentElement('afterend', h1)
// }

// // insertAdjacentText example
// function insertText() {
//     //create variable for wehre you want ot insert (at the first child)
//     const item = document.querySelector('li:first-child');

//     // create text at item and insert afterend = end of element, beforebegin = before element
//     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
// }

// //insertAdjacentHTML example
// function insertHTML() {
//     //create variable for where html wants to go (by the clear button)
//     const clearBtn = document.querySelector('#clear');

//     // beforebegin = beginning of leement, afterend = end of element
//     clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdajacentHTML</h2>');
// }

// //insertBefore example
// // add into a list for example, you call on parent to add to its element
// function insertBeforeItem() {
//     // define route
//     const ul = document.querySelector('ul');

//     // create li with insert before for ul
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';

//     // add it beofre the third item/as the third item
//     const thirdItem = document.querySelector('li:nth-child(3)');

//     // call on parent to add li at the third item
//     ul.insertBefore(li, thirdItem);
// }

// insertElement();
// insertText()
// insertHTML()
// insertBeforeItem()

// //beforebegin
// //afterbegin
// //beforeend
// //afterend

// // custom insertAfter() challenge
// //not the equivalent of an insertBefore
// // newEl, existingEl

// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// // new element
// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// //exist element to insert after
// const firstItem = document.querySelector('li:first-child');

// //custom function
// insertAfter(li, firstItem)

// replace elements in the DOM
// function replaceFirstItem() {
//     //find the element to work with
//     const firstItem = document.querySelector('li:first-child');

//     //create element li for replacmeent text content = 
//     const li = document.createElement('li');
//     li.textContent = 'replaced first';

//     //use replacewith to swap th eli
//     firstItem.replaceWith(li);
// }

// //innerhtml is wihtin element
// //outerhtml includes innerhtml

// function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>replace second</li>';
// }

// //replace all items within the list
// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item, index) => {
//         //either use outerhtml for replace all (need li)
//         // item.outerHTML = '<li>Replace all</li>'
//         //or innerhtml to replace spcificially the inner (dont need li)
//         // item.innerHTML = 'replace all'

//         // can use a loop to go through, if it says second item dont change it, if not change it
//         if (index === 1) {
//             item.innerHTML = 'Second Item';
//         } else {
//             item.innerHTML = 'replace all'
//         }
//     });

//     lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>second item</li>' : '<li>Item</li>')
// };

// // using parent element (use header, sleect itme to replac eand repalce it)
// function replaceChildHeading() {
//     // locate and create variables for eleements to replace parent and heading
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');

//     //create h2 element, create id and create textcontnet
//     const h2 = document.createElement('h2');
//     h2.id = 'app-title'
//     h2.textContent = 'shopping List'
//     //use replace child with the header location with replacement and replacee
//     header.replaceChild(h2, h1);
// }


// replaceFirstItem()
// replaceSecondItem()
// replaceAllItems()
// replaceChildHeading()

//REMOVE DOM ELEMENTS
//remove and remove child (called on parent element)

//remove 
function removeClearButton() {
   //find id for clear, insert it and remove function (clear all is gone)
    // document.querySelector('#clear').remove();

    //alt but above is easier
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

//remove by child
function removeFirstItem() {
    // grab parent (ul), grab li (li first child)
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    //remove child from parent ul
    ul.removeChild(li);
}

//remove single item from list
function removeItem(itemNumber) {
    // grab parent and item, template literal bACKTICKS to pinpoint which itemNumbe
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li)
}

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    // on a zero scale so have to add -1 to get ot correct number
    const li = document.querySelector('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove()

removeClearButton();
// removeFirstItem()
// removeItem(2)
// removeItem2(2)
// removeItem3(2)
removeItem4(2)


// WORKING WITH STYLES AND CLASSES
// manipulate css classes and css direclty
// dynamic functionality, display menu on click etc
