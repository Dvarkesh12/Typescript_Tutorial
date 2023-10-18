"use strict";
// Lecture 10: Functrion Signature
// it like definig the function : how it will be look like
// Example 1: "Be careful use of ':' and '=>' while defining and  using function
// Function 'return' has 'type', either you can explicitely mention or
// Typescript will figure it out itself.
// Defn func
let greet;
// Use Func
greet = (name, said) => {
    console.log(`${name} is saying ${said}`);
};
// Call Func
greet('fg', 'wel');
// Example 2:
let calc;
calc = (numOne, numTwo, Todo) => {
    if (Todo === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(5, 3, 'add'));
console.log(calc(5, 3));
// Use of Type Aliases with Function Signature
let logdetails;
logdetails = (ninja) => {
    console.log(`${ninja.name} has age of ${ninja.age}`);
};
const myPerson = { name: "John", age: 30 };
// Call the function with a person object
logdetails(myPerson);
