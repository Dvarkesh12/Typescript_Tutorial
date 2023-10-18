var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(function(input){
      console.log(input);
});


//   LESSON 2 : TYPES
// Once we declared we can not change the data types of variable.
let dvar = "damodar";

// In typescript we don't have "int" and "float" as two different data types but it's covered only in "Number"
let age = 30;
let isBlackBelt = false;

// We get an error, when we try to change variable "dvar" which already defind as string to number.
// dvar = 9
dvar = "dvarkesh";




// LESSON 3 : Arrow function
// Arrow function in typescript is like lambda function in python
// defined data type for "dia"
var circ = function(dia: number){
    return dia* Math.PI
}

console.log(circ(7.5));



// LESSON 4  : ARRAYS AND OBJECTS
// arrays
// Since this array is initialise with strings, further can only entered strings in it.
let games = ['dg',"nav", "shu"];
games.push('sun');
// following will give error since numbers are not allowed in string's array.
// games.push(4);
// games[0]=1;


// Since this array is initialise with number, further can only entered numbers.
let numbers = [1,2,3];
numbers.push(4);
// following will give error since string are not allowed in numbers's array.
// numbers.push('sun');
numbers[1]=9;


// We defined this array with mix data types and hence can input both string and numbers.
let mixed = ['dg',1,2,"nav",5]
mixed.push('sun');
mixed.push(4);
mixed[3]=9;

// Objects
// Defining object "Ninja" with its properties
let ninja = {
    name: 'dvarkesh',
    belt: 'black',
    age: 30
};

// We can change properties within object to the same data type only.
ninja.age = 40;
ninja.name = 'Navneet';
// ninja.age = '30' : Not Possible
// Once the object is defined we can not add new properties to it.
//ninja.skills = ['Fight','Sneak']

// We can override the object "ninja" but it shhould always be object, But all properties declared should be similar we can not 
// delete or change defined properties, means same structure however values can be changes and also can not add extra prpoerty.
 ninja = {
    name: 'shubham',
    belt: 'orange',
    age: 30
    // skills = ['Fight','Sneak'] // Adding extra property not possible
};
