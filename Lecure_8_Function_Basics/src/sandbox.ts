// Lecture 8: Function Basis

// defining and writing function greet
let greet = () => {
  console.log('hello, world');}

// As we already defind "greet" as function, we can not assign it to any other data type
// greet = 'hello';

// How to define a partcular variable as function 

let greet_2: Function;

greet_2 = () => {
    console.log("Hello World")
}

// Defining input parameters for function and with optional parameters
// Use "question mark" to set "optional parameters"
const add = (a: number, b: number, c? : string | number ) => {
    console.log(a+b);
    console.log(c);
}

add(5,10)

// Other way to set optional parameter is with default value
const add_2 = (a: number, b: number, c : string | number = 10) => {
    console.log(a+b);
    console.log(c);
}

add_2(8,12,"wtf")


// When we return through the function, typescript automatomatically finds its data type
// and then we cannot reassign the another data type
// "result" has data type of number and it can not be changed then.
const minus = (a:number, b:number) => {
    return a+b
}

let result = minus(10,7)
console.log(result)