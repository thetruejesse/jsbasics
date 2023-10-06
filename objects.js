// this is the syntax to create an object

var character1 = {
    age : 12,
    height : 5,
    achievement : "Wins consecutively"
}

// update the properties using . notation

character1.newachievement = "Do something";
character1.name = "Jimmy";

// log character name

console.log(character1.name + character1.newachievement);

// another way to access object literals [brackets notation]

var house = {};

house["size"] = "big";
house["color"] = "blue";
house.type = "flat";

console.log(house);

// another house object

var house1 = {
    color : "brown",
    type : "flat",
    size : "big"
};

console.log(house1);

// an advantage of brackets notation is you can add spaces between property names

var house3 = {};

house3["size of windows"] = "big";

console.log(house3);

// values in bracket notation can evaluate expressions

var arrofvalues = ['speed', 'altitude', 'color'];

var drone ={
    speed : 100,
    altitude: '200m',
    color: 'blue'
};

for (var i = 0; i < arrofvalues.length; i++)
{
    console.log(drone[arrofvalues[i]]);
}