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
    const value = input.value.trim();

    if(value.length > 0){
        const li = document.createElement('li');
        const text = document.createTextNode(value + ' ');
        const itemEditButton = document.createElement('button');
        const itemEditButtonText = document.createTextNode('Edit');
        const itemDeleteButton = document.createElement('button');
        const itemDeleteButtonText = document.createTextNode('Delete');

        itemEditButton.appendChild(itemEditButtonText);
        itemDeleteButton.appendChild(itemDeleteButtonText);

        li.appendChild(text);
        li.appendChild(itemEditButton);
        li.appendChild(itemDeleteButton);
        ul.appendChild(li);

        itemEditButton.addEventListener('click', e => {
            let liContent = li.innerHTML;
            li.innerHTML = '';
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = liContent.split('<')[0];
            li.appendChild(editInput);

            const submit = document.createElement('button');
            const submitText = document.createTextNode('Edit');
            submit.appendChild(submitText);

            li.appendChild(submit);

            submit.addEventListener('click', eSubmit => {
                const editedItem = document.createTextNode(editInput.value + ' ');
                li.innerHTML = '';
                li.appendChild(editedItem);
                li.appendChild(itemEditButton);
                li.appendChild(itemDeleteButton);
            });
        });
        
        itemDeleteButton.addEventListener('click', e => {
            ul.removeChild(e.target.parentNode);
        });

        input.value = '';
    }
}
