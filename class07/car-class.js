
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year =  year;
        this.color = color;
        this.bids = [];
    }

    render() {
        const div = document.createElement('DIV');

        const h2 = document.createElement('H2');
        h2.textContent = this.make + ' '  + this.model;
        div.appendChild(h2);

        const ul = document.createElement('UL');      

        for(let i = 0; i < this.bids.length; i++) {
            ul.appendChild(this.bids[i].render());
        }
        div.appendChild(ul);

        this.bidList = ul;

        return div;
    }

    addBid(name, amount) {
        const bid = new Bid(name, amount);
        this.bids.push(bid);
        if(this.bidList) {
            this.bidList.appendChild(bid.render());
        }
    }
}

class Bid {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    
    render() {
        const li = document.createElement('LI');
        li.textContent = this.name + ' bids ' + this.amount;
        return li;
    }
}
