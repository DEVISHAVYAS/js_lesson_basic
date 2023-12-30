// # primitive data type

// ===> 7 types: string, number,boolean, null, undefined,symbol,BigInt

const score =100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //ans is shows false
const bigNumber = 500007845931212578954215n  //Ans shows false

//Reference(NON primitive data type)
// ===> Array,Objects,Functions

const emp = ["Ram", "Samual", "Deborah"];
let myObj={
    name: "Devi",               //False
    age: 23,
}
const myFunction =function(){
    console.log("Hello World");  //False
}

//console.log(typeof outsideTemp);  //object
//console.log(typeof bigNumber);   //bigint
console.log(typeof scoreValue);    // number

console.log(typeof myFunction);    //function

console.log(typeof heros);

    
 
