// LESSON 6: DYNAMIC (ANY) TYPE : USE ANY

// Resverse moving towards the Javascript
// UseCase : When data type is not known to variable.
// You think that you will be changing data type

let age_t: any= 25;

age_t = true;
console.log(age_t)

age_t = "Hello";
console.log(age_t)

age_t = {name_t: 'dg'};
console.log(age_t)


let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false)
console.log(mixed)



