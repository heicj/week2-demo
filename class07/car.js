
// constructor function
function Car(make, model, year, color) {
    // initialization logic
    
    this.make = make;
    this.model = model;
    this.year =  year;
    this.color = color;

    // this isn't a passed-in value,
    // but a value we need for this "class"
    // to do it's work
    this.bids = [];
}

Car.prototype.render = function() {
        
};
    
Car.prototype.addBid = function() {

};

const pinto = new Car('Ford', 'Pinto', 1979, 'limegreen');
const fiat = new Car('Fiat', '500', 2015, 'red');

console.log(pinto, fiat);

console.log('same proto parent?',
    Object.getPrototypeOf(pinto) ===
    Object.getPrototypeOf(fiat)
);