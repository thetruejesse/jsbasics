// examples of math objects

// random gives a number btn 0-0.99

var number = Math.random();

console.log(number);

// numbers above 1 are achieved by multiplying the value * 10

console.log(number * 10);
// demonstrate rounding up the previous random number

var numUp = Math.ceil(number * 10);

// log updated number
console.log(numUp);