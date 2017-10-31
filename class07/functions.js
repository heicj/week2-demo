
console.log(add(3, 4));


// declared function
// 1. have a name
// 2. parsed before everything else
function add(x, y) {
    return x + y;
}

// this won't work!!!
// console.log(subtract(5, 2));

// function expression
const subtract = function(a, b) {
    return a - b;
};