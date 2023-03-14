// removing the initial h1 element(Hello, World!)
const h1 = document.querySelector('h1'); 
h1.parentNode.removeChild(h1); 

// finding elements in the DOM
const head = document.querySelector('head');
const body = document.querySelector('body');

// creating elements
const h1_new = document.createElement('h1');
const hr1 = document.createElement('hr');
const Task_h2 = document.createElement('h2');
const Task_p = document.createElement('p');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const hr2 = document.createElement('hr');
const Submission_h2 = document.createElement('h2');
const Submission_p = document.createElement('p');
const ul2 = document.createElement('ul');
const li7 = document.createElement('li');
const li8 = document.createElement('li');
const li9 = document.createElement('li');
const li10 = document.createElement('li');
const li11 = document.createElement('li');
const li12 = document.createElement('li');
const li13 = document.createElement('li');
const hr3 = document.createElement('hr');

// adding content and attributes to the elements
h1_new.textContent = 'Lab7 Assignment';
h1_new.style.color = 'blue';

Task_h2.textContent = 'Task';
Task_h2.style.color = 'red';

Task_p.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';

li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);';
li1.classList.add('even');
li1.style.color = 'green';

li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';
li2.classList.add('odd');
li2.style.color = 'purple';

li3.innerHTML = 'change content of the elements (<b>5 points</b>);';
li3.classList.add('even');
li3.style.color = 'green';

li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';
li4.classList.add('odd');
li4.style.color = 'purple';

li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);';
li5.classList.add('even');
li5.style.color = 'green';

li6.innerHTML = 'change classes of the elements (<b>5 points</b>);';
li6.classList.add('odd');
li6.style.color = 'purple';


Submission_h2.textContent = 'Submission';
Submission_h2.style.color = 'red';

Submission_p.textContent = 'To submit your work, follow these instructions:';

li7.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';
li7.classList.add('even');
li7.style.color = 'green';

li8.innerHTML = 'Clone this repository to your local machine and work inside it.';
li8.classList.add('odd');
li8.style.color = 'purple';

li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one <code>&lt;h1&gt;</code> tag with "Hello, World!" message (<b>1 point</b>).';
li9.classList.add('even');
li9.style.color = 'green';

li10.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
li10.classList.add('odd');
li10.style.color = 'purple';

li11.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
li11.classList.add('even');
li11.style.color = 'green';

li12.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';
li12.classList.add('odd');
li12.style.color = 'purple';

li13.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';
li13.classList.add('even');
li13.style.color = 'green';


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

ul2.appendChild(li7);
ul2.appendChild(li8);
ul2.appendChild(li9);
ul2.appendChild(li10);
ul2.appendChild(li11);
ul2.appendChild(li12);
ul2.appendChild(li13);

body.appendChild(h1_new);
body.appendChild(hr1);
body.appendChild(Task_h2);
body.appendChild(Task_p);
body.appendChild(ul);
body.appendChild(hr2);
body.appendChild(Submission_h2);
body.appendChild(Submission_p);
body.appendChild(ul2);
body.appendChild(hr3);


