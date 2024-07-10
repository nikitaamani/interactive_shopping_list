
function createAnElement (element){
    return document.createElement(element);
}


function addText(element, text) {
    return(element.innerText = text);
}


function appendChild(child, parent) {
    return parent.appendChild(child);
}

function select(selector) {
    return document.querySelector(selector);
}
function listen(element, event, callback) {
    return element.addEventListener(event, callback)
}
function addAttribute(element, attribute, content) {
    return element.addAttribute(attribute, content);
}

const shoppingList = ['Milk','Tea'];

const ol = select ('ol');

listen(document, 'DOMContentLoaded',displayItems);

function displayItems(){
   shoppingList.forEach(createAListItem);
}
function createAListItem(item){
   const li = createAnElement('li');
   addText(li, item);
   appendChild(li, ol);
}