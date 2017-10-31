
const store = {
    min: 2,
    max: 5,
    avg: 2,
    salesByHour: [],
    calcSales: calcSales
};

// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function calcSales() {
    for(let i = 0; i < 14; i++) {
        const customers = getRandomCustomers(this.min, this.max);
        const salesByHour = {
            hour: i + 1,
            customers: null // ??? calc customers
        };
        this.salesByHour.push(salesByHour);
    }

}