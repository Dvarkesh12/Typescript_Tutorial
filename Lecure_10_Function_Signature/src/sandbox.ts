// Lecture 10: Functrion Signature
// it like definig the function : how it will be look like

// Example 1: "Be careful use of ':' and '=>' while defining and  using function
// Function 'return' has 'type', either you can explicitely mention or
// Typescript will figure it out itself.

// Defn func
let greet: (a: string, b: string) => void;

// Use Func
greet= (name: string,said: string): void=> {
    console.log(`${name} is saying ${said}`)
}

// Call Func
greet('fg','wel');


// Example 2:

let calc: (a: number, b: number, c?:string)=> number;


calc=(numOne: number, numTwo: number, Todo?: string): number=>{
    if (Todo==='add'){
        return numOne + numTwo}
    else{
        return numOne - numTwo
    }

}

console.log(calc(5,3,'add'))
console.log(calc(5,3))


// Use of Type Aliases with Function Signature
let logdetails: (obj: {name:string, age:number})=> void;
// type aliases for 'person' details
type person = {name:string, age:number};

logdetails =(ninja:person)=>{
      console.log(`${ninja.name} has age of ${ninja.age}`)
}

const myPerson: person = { name: "John", age: 30 };
// Call the function with a person object
logdetails(myPerson); 