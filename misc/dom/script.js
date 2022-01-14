const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!"
heading.style.color = 'blue';

const div = document.createElement('div');
div.style.cssText =  'background: pink; border: black';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

const p = document.createElement('p');
p.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading);
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

