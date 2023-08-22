const headerContainer = document.getElementById('header-container')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'js practice';
section.appendChild(h1);

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'getElementsByClass';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'getElementById';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'innerText';
ul.appendChild(li3);

section.appendChild(ul)
