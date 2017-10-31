/* globals cars */

const app = document.getElementById('app');

function loadCars(cars) {
    for(let i = 0; i < cars.length; i++) {
        app.appendChild(cars[i].render());
    }
}

loadCars(cars);
