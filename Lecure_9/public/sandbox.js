"use strict";
// Lecture 9 : Type Aliases
// In order to avoid the duplication in the code and instead of writing things repetadly we can denoote them as aliases
var my_app = (val) => {
    return val;
};
console.log(my_app(5));
console.log(my_app("fg"));
const logdetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
logdetails(123, 'fg');
