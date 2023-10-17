"use strict";
// Lecture 8: Function Basis
// defining and writing function greet
let greet = () => {
    console.log('hello, world');
};
// As we already defind "greet" as function, we can not assign it to any other data type
// greet = 'hello';
// How to define a partcular variable as function 
let greet_2;
greet_2 = () => {
    console.log("Hello World");
};
// Defining input parameters for function and with optional parameters
// Use "question mark" to set "optional parameters"
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// Other way to set optional parameter is with default value
const add_2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add_2(8, 12, "wtf");
// When we return through the function, typescript automatomatically finds its data type
// and then we cannot reassign the another data type
// "result" has data type of number and it can not be changed then.
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
