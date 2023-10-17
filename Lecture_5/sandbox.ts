// LESSON 5 : HOW TO DEFINE EXPLICITE DATA TYPES

// A) To Variables
let s_name: string;
let n_name: number;
let b_name: boolean;

s_name = 'ram';
//Once declared as string it should be string always, we cannot change.
//sname = 6

n_name = 9;
//Once declared as number it should be number always, we cannot change.
//nname = 'ram'

b_name = true;
//Once declared as boolean it should be boolean always, we cannot change.
// bname = 5;

// B) Arrays

// This will only declare that data type within array is string.
//let ninjas: string[];
// But when we try to push something it will give me error 
// ninjas.push("ram")

// Thus you should initialise the array so that then you can push
let ninjas_cod: string[] = [];
ninjas_cod.push("ram"); 

// Union Types : In order to creat array with mixed data types
// In union types it can be string or number or boolean.
let mixed_cod: (string| number| boolean) [] = [];
mixed_cod.push('Hello');
mixed_cod.push(20);
mixed_cod.push(false);
console.log(mixed_cod);

// Objects 
// Once we declared "ninjaone" as object we can not assign it as string or number
let ninjaone : object;
ninjaone = {name:'dg',age:30};

// Since array is also an Object hence we can asssign "ninjaone" to array.
ninjaone = []

// Defining the object and defining properties with its data types.

let ninjaTwo: {
    name_n: string,
    age_n: number,
    beltcolour: string

}

ninjaTwo = {name_n: 'dg', age_n: 20, beltcolour: 'black'}





