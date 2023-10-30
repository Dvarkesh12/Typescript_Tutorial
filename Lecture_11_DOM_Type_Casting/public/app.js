// Lecture 11: DOM and Type Catsing
// DOM (Document object Model) : Covert static websites to functional.
// Which helps to query elements, button clicks and form submit.
// The <a> tag defines a hyperlink, which is used to link from one page to another.
//const anchor = document.querySelector('a');
// While accessing the anchor, typescript actually deosn't know there is achor tag in index.html page
// during development it doesn't have some kind of special access to index.html page hence it will return "None"
// console.log(anchor);  // It will return that whole line
// While accessing the property ex. href
// iF we directly call console.log(anchor.href) below it will fetch an error that it's data type is null
// In such cases we should first check whether the html anchor is present or not.
// By doing runtime check
// if (anchor){
//     console.log(anchor.href)
// };
// If we are certain as developer that document.querySelector('a') this thing exist
// then we can access by adding "!" at the end.
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// Typescript constains special character for every "DOM" element
// I have one form on index.html page hence able to get 'form' easily
// const form = document.querySelector('form')!;  // Here this is of "HTMLFormElement" type.
// console.log(form);
// Lecture 12: Classes
// class Invoice {
//     // We have defind the parameters of class but they are not initialised
//     client: string;
//     details: string;
//     amount: number;
//     // We will initialise it using the constructer 'method'
//     constructor(c: string, d:string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a; 
//     }
//     // The format method is defined within the class.
//     // It returns a formatted string that describes the invoice details using the values of the class properties.
//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
// }
// const InvOne = new Invoice('dg','work on dg web',400);
// const InvTwo = new Invoice('pg','work on pg web',500);
// // Using classes we could creat arrays
// // We can add object of classes to array
// let invoices : Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);
// // console.log(InvOne,InvTwo);
// // console.log(invoices);
// // Using 'For Each' to traverse over the elements of 'invoices'
// invoices.forEach(inv=>{
//     console.log(inv.client, inv.details, inv.amount, inv.format())
// });
// Lecture 13: Access Modifiers 'Public', 'Private' and 'ReadOnly'.
// a) Public : can access outside class and changed
// b) Private : Can only access inside class and not changed or acessed outside the class.
// c) readonly : Can read inside and outside the class, can not modified baoth inside and outside class.
// Shorthand for defining class, only works if we are using access modifires
// class Invoice{
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount : number
//     ){}
//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
// }
// const InvOne = new Invoice('dg','work on dg web',400);
// const InvTwo = new Invoice('pg','work on pg web',500);
// // Using classes we could creat arrays
// // We can add object of classes to array
// let invoices : Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);
// console.log(InvOne,InvTwo);
// console.log(invoices);
// Using 'For Each' to traverse over the elements of 'invoices'
// invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount, inv.format())
// });
// Lecture 15 : Interfaces
// Interfaces allows us to inforce certain structure of classes and Object.
// interface IsPerson{
//      name: string,
//      age : number,
//      speak(a: string): void,
//      spend(a:number): number
// }
// Defining variable "me" of type "IsPerson"
// We can have multiple objects having structure of type "IsPerson"
// const me: IsPerson= {
//     name: 'ram',
//     age : 30,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount: number): number {
//        console.log('I Spent', amount)
//        return amount;
//     }
//  };
//  console.log(me);
// With Arrow Function
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me)
// Lecture 14: Using Module
// Lecture 16 : Intrerfaces with class
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// This is making sure that whatever Object is stored inside the docOne/docTwo variable
// has to implement this interface 
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('cg','work on cg web',400);
// docTwo = new Payment('mg','work on mg web',600);
// // The structure of "docs" should always be of interface "HasFormatter"
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const InvOne = new Invoice('dg','work on dg web',400);
// const InvTwo = new Invoice('pg','work on pg web',500);
// // Using classes we could creat arrays
// // We can add object of classes to array
// let invoices : Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);
// console.log(InvOne,InvTwo);
// console.log(invoices);
// // Using 'For Each' to traverse over the elements of 'invoices'
// invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount, inv.format())
// });
// Lecture 11: DOM and Type Catsing
// If the page has multiple forms then we can identify it using class.
// Typescript only undersdtanding this class as 'element', however we wanted it to get identified
// as "HTMLFormElement" type and hence we do "TYPECASTING"
// const form = document.querySelector('./new-item-form');  // Here it is of element type
const form = document.querySelector('.new-item-form');
// accessing all children compenents of the form
// console.log(form.children)
// Let's  input to it
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    // This method is used to prevent the default behavior of the form submission, 
    // which would typically cause the page to reload or navigate to a new URL.
    e.preventDefault();
    // Using Lecture 20 concepts : Tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    // let doc : HasFormatter;
    // if (type.value === 'invoice'){
    //     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    // } else {
    //     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    // }
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
// Lecture 13: Access Modifiers 'Public', 'Private' and 'ReadOnly'.
// a) Public : can access outside class and changed
// b) Private : Can only access inside class and not changed or acessed outside the class.
// c) readonly : Can read inside and outside the class, can not modified baoth inside and outside class.
// --------- Mini Project Ended Here --------------- //
// LECTURE 18 : GENERICS  ----
// Generic input is given to this function of type 'OBJECT'
// const addUID =(obj: Object)=>{
//     let uid = Math.floor(Math.random()*100);   // Whenever you define variable first time 'let','const','var'
//     return {...obj,uid};
// }
// let docOne = addUID({name:'raju', age: 9});
// console.log(docOne)
// If I call console.log(docOne.name), it will give error since it is not defined at input.
// The above issue can be resolved using <T>(:T), so it will consider and return "input" of any kind.
// const addUID = <T>(obj: T)=>{
//     let uid = Math.floor(Math.random()*100);   // Whenever you define variable first time 'let','const','var'
//     return {...obj,uid};
// }
// let docOne = addUID({name:'raju', age: 9});
// console.log(docOne.name);
// console.log(docOne);
// Since I have defind <T>(obj: T) i.e. anny parameter hence I can write here it as string also
// let docTwo = addUID('Hello');
// console.log(docTwo);   // Even though I need uid and all that stuff still it also works well with string.
// If I define this type of particular type
// const addUID = <T extends {name: string}> (anyt: T) => {
//     let uid = Math.floor(Math.random()*100);   // Whenever you define variable first time 'let','const','var'
//     return {...anyt,uid};
// }
// Since I have defind it as string and there is string present it will accept it.
// let docOne = addUID({name:'raju', age: 9});
// console.log(docOne.name);
// console.log(docOne);
// +++ Lecture 19 ENUMS : helps to store set of constants or keywords and associate them with numeric values.
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'king' }
};
console.log(docFive);
// Using the UID with String
// For the interfaces since We can defind it may of any kind using <T>
// interface Resource <T>{
//     uid : number,
//     resourcename: string,
//     data : T;
// }
// If we need that 'data' of partcular Type we can write it.
// const docThree: Resource<object>={
//     uid : 1,
//     resourcename: 'person',
//     data :{name: 'king'}
// }
// console.log(docThree);
// const docFour : Resource<string[]>={
//     uid : 1,
//     resourcename: 'person',
//     data :['hakk','lajjj']
// }
// console.log(docFour);
// LECTURE 20 : TUPLES
// Array : Array is unordered list
// Tuple : is like ordered and static, its order can not changed.
// In array once the type of elements will be based on intial array. (other way also to initialse with types)
// We can change order and value in the array.
let arr = ['dg', true, 22];
arr[0] = 'pg';
arr[1] = false;
arr[2] = 45;
arr = [99];
arr = [false, 'pk'];
// But in Tuples once defind it should be in same order and same type.
let tup = ['dg', 22, true];
tup[0] = 'lg';
tup[1] = 30;
