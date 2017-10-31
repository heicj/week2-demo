// 0. get a ref to the parent element
const ul = document.getElementById('car-list');

// 1. create the element that you want
const li = document.createElement('li');

// 2. set attributes and text value
li.textContent = 'Ford Pinto';
li.classList.add('car');

// 3. add (append) to the parent element
ul.appendChild(li);


// you can add to body as well:
const footer = document.createElement('p');
footer.textContent = 'Not so Smarmy Car Place';
// 3. (optional alternative)
document.body.appendChild(footer);


const elements = document.getElementsByClassName('car');
console.log('gEBCN', elements);

// querySelector querySelectorAll
const nodes = document.querySelectorAll('.car');
console.log('qSA', nodes);