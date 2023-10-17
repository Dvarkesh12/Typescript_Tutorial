// LESSON 5 : HOW TO DEFINE EXPLICITE DATA TYPES

// A) To Variables
let sname: string;
let nname: number;
let bname: boolean;

sname = 'ram';
//Once declared as string it should be string always, we cannot change.
//sname = 6

nname = 9
//Once declared as number it should be number always, we cannot change.
//nname = 'ram'

bname = true;
//Once declared as boolean it should be boolean always, we cannot change.
// bname = 5;

// B) Arrays

// This will only declare that data type within array is string.
//let ninjas: string[];
// But when we try to push something it will give me error 
// ninjas.push("ram")

// Thus you should initialise the array so that then you can push
let ninjas: string[] = [];
ninjas.push("ram"); 

// Union Types : In order to creat array with mixed data types
// In union types it can be string or number or boolean.
let mixed: (string| number| boolean) [] = [];
mixed.push('Hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

