'use strict';

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year =  year;
    this.color = color;
    this.bids = [];
    // give props you are going to add a value
    // in the constructor. Use a "sensible" default
    // given the expected type.
    // Object, array, function -> null
    // string -> ''
    // number -> -1 or 0
    // boolean -> false
    this.bidRows = null;
}

Car.prototype.render = function() {
    const div = document.createElement('DIV');

    const h2 = document.createElement('H2');
    h2.textContent = this.make + ' '  + this.model;
    div.appendChild(h2);

    const table = createBidTable();

    const tBody = document.createElement('TBODY');
    for(let i = 0; i < this.bids.length; i++) {
        tBody.appendChild(this.bids[i].render());
    }
    table.appendChild(tBody);

    div.appendChild(table);

    this.bidRows = tBody;

    const button = document.createElement('button');
    button.textContent = 'Bid';
    // excuse my arrow function, we need "this" to work
    button.onclick = () => {
        const name = prompt('name');
        const amount = +prompt('amount');
        this.addBid(name, amount);
    };
    div.appendChild(button);

    return div;
};


function createBidTable() {
    const table = document.createElement('TABLE');
    table.classList.add('bids');
    const header = document.createElement('THEAD');
    const headerRow = document.createElement('TR');
    header.appendChild(headerRow);

    const nameHeader = document.createElement('TH');
    nameHeader.textContent = 'Name';
    nameHeader.classList.add('name');
    headerRow.appendChild(nameHeader);

    const amountHeader = document.createElement('TH');
    amountHeader.textContent = 'Amount';
    amountHeader.classList.add('amount');

    headerRow.appendChild(amountHeader);

    table.appendChild(header);

    return table;
}

Car.prototype.addBid = function(name, amount) {
    const bid = new Bid(name, amount);
    this.bids.push(bid);
    if(this.bidRows) {
        this.bidRows.appendChild(bid.render());
    }
};

function Bid(name, amount) {
    this.name = name;
    this.amount = amount;
}

Bid.prototype.render = function () {
    const tr = document.createElement('TR');

    const name = document.createElement('TD');
    name.textContent = this.name;
    tr.appendChild(name);

    const amount = document.createElement('TD');
    amount.textContent = '$' + this.amount.toFixed(2);
    amount.classList.add('amount');
    tr.appendChild(amount);

    return tr;
};
