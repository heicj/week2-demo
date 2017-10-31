/* globals Car */

const pinto = new Car('Ford', 'Pinto', 1979, 'limegreen');
// const fiat = new Car('Fiat', '500', 2015, 'red');

pinto.addBid('marty', 2.00);
pinto.addBid('joey', 3.00);

document.body.appendChild(pinto.render());