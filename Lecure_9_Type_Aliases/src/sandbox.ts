// Lecture 9 : Type Aliases
// In order to avoid the duplication in the code and instead of writing things repetadly we can denoote them as aliases

// We need to define them as type
type SorN = string | number;
type my_credentials = {name: string, age: number}

var my_app = (val: SorN) =>{
    return val
}

console.log(my_app(5))
console.log(my_app("fg"))


const logdetails = (uid: SorN, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
}

logdetails(123,'fg');
