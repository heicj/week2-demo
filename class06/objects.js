
// array literal, literally the numbers 1, 43, 56, and 4 in an array
const numbers = [1, 43, 56, 4];

// object literal, literally the props given in an object
const car = {
    make: 'Ford',
    model: 'Pinto',
    year: 1979,
    color: 'puce',
    miles: 25000,
    price: 900
};

console.log(car.make + ' ' + car.model);

// semantically, above is same as:
const car2 = {};
car2.make = 'Ford';
car2.model = 'Pinto';
car2.year = 1979;
car2.color = 'puce';
car2.miles = 25000;
car2.price = 900;

console.log(car2.make + ' ' + car2.model);