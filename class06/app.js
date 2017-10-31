'use strict';

function render() {
    const li = document.createElement('li');

    const title = document.createElement('div');
    title.textContent = this.year + ' ' + this.make + ' ' + this.model;

    const description = document.createElement('div');

    const miles = document.createElement('span');
    miles.classList.add('miles');
    miles.textContent = this.miles + ' miles';
    description.appendChild(miles);

    const space = document.createTextNode(' ');
    description.appendChild(space);

    const color = document.createElement('span');
    color.style.color = this.color;
    color.textContent = this.color;
    description.appendChild(color);

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = '$' + this.price;
    this.priceElement = price;

    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(price);

    return li;
}

function applyDiscount(discountPercent) {
    this.price = this.price * (1 - discountPercent);
    this.priceElement.textContent = '$' + this.price;
    this.priceElement.classList.add('discounted');
}

const pinto = {
    make: 'Ford',
    model: 'Pinto',
    year: 1979,
    color: 'limegreen',
    miles: 25000,
    price: 1000,
    render: render,
    applyDiscount: applyDiscount
};

const tesla = {
    make: 'Tesla',
    model: 'Model S',
    year: 2017,
    color: 'white',
    miles: 1000,
    price: 20000,
    render: render,
    applyDiscount: applyDiscount
};

const gremlin = {
    make: 'AMC',
    model: 'Gremlin',
    year: 1980,
    color: 'black',
    miles: 100000,
    price: 200,
    render: render,
    applyDiscount: applyDiscount
};

const cars = [pinto, tesla, gremlin];

const ul = document.getElementById('car-list');

for(let i = 0; i < cars.length; i++) {
    const li = cars[i].render();
    ul.appendChild(li);
}

// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const discountButton = document.getElementById('discount');
discountButton.onclick = function() {
    const carIndex = getRandomIntInclusive(0, cars.length - 1);
    const car = cars[carIndex];
    car.applyDiscount(.10);
    discountButton.setAttribute('disabled', true);
    discountButton.textContent = 'Discount Applied to ' + car.make + ' ' + car.model;
    console.log(car);
};



