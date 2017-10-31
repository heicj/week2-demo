
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year =  year;
    this.color = color;
    this.bids = [];
}

Car.prototype.render = function() {
    const div = document.createElement('DIV');

    const h2 = document.createElement('H2');
    h2.textContent = this.make + ' '  + this.model;
    div.appendChild(h2);

    const ul = document.createElement('UL');      

    for(let i = 0; i < this.bids.length; i++) {
        ul.appendChild(this.bids[i].render());
    }
    div.appendChild(ul);

    return div;
};

Car.prototype.addBid = function(name, amount) {
    const bid = new Bid(name, amount);
    this.bids.push(bid);
};

function Bid(name, amount) {
    this.name = name;
    this.amount = amount;
}

Bid.prototype.render = function () {
    const li = document.createElement('LI');
    li.textContent = this.name + ' bids ' + this.amount;
    return li;
};

const pinto = new Car('Ford', 'Pinto', 1979, 'limegreen');
// const fiat = new Car('Fiat', '500', 2015, 'red');

pinto.addBid('marty', 2.00);
pinto.addBid('joey', 3.00);

document.body.appendChild(pinto.render());