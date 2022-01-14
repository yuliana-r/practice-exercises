const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!"
heading.style.color = 'blue';
container.appendChild(heading);

const div = document.createElement('div');
div.style.cssText =  'background: pink; border: black';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!";
container.appendChild(div);

div.appendChild(p);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('keypress', () => {
        alert(button.id);
    });
});





















