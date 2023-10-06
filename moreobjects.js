// create a new object

var car = {};

car.color = "Blue";
car.mileage = 12000;
car.size = "Big";

// add a function property (method when invoked)
car.turnKey = function ()
{
    console.log("The car is running");
}

// another method
car.lightsOn = function ()
{
    console.log("The lights are on");
}

// another method

car.lightsOff = function ()
{
    console.log("The lights are off");
}

// i want to try calling properties that arent functions as methods
// car.color(); wont work

console.log(car);

car.turnKey();

// new object using key-value pairs

var house = {
    type : "Bangalow",
    size : "Big",
    rent : 2000000
};

house.open = function ()
{
    console.log("The house is open");
}

console.log(house); // log the value of house

house.open();
