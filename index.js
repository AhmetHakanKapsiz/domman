const body = document.querySelector('body');
const input = document.createElement('input');
const button = document.createElement('button');
const header = document.createElement('h2');
const ul = document.createElement('ul');

const buttonText = document.createTextNode("Add item");
const headerText = document.createTextNode("Materials");

input.type = 'text';
input.placeholder = 'Type';

button.appendChild(buttonText);
header.appendChild(headerText);

body.appendChild(input);
body.appendChild(button);
body.appendChild(header);
body.appendChild(ul);

button.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    console.log(e);
}
