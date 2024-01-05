//if
// if(false){    // if code is false it will not execute

// }

// if(true){          // if code is true it will execute

// }

// const ifUserloggedIn = true
// const temperature = 41                 //less than 50

// if(ifUserloggedIn){                     //temperature is greater than 50
//      console.log("less than 50");
// }
// console.log("temperature is greater than 50");
// //<, >,<=,>=, ==,!=,===,!==

// const ifUserloggedIn = true
// const temperature = 41                 //less than 50

// if(temperature !== 41){                     //executed
//      console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");   //const method use
// const score = 200
// if (score > 100){                 //scope condition
//     const power ="fly"
//     console.log(`User power: ${power}`);//User power: fly
// }
// don't use var metod in if  else
//Global scope: The default scope for all code running in script mode.
//Module scope: The scope for code running in module mode
//Function scope: The scope created with a function
//Block scope: The scope created with a pair of curly braces (a block).
//Blocks only scope let and const declarations, but not var declarations.
//in scope condition if you declare the condition let and const it run in curly brace but as we use var condition it run out of the curly brace

// const score = 200       //let method use
// if (score > 100){                 //scope condition
//     let power ="fly"
//     console.log(`User power: ${power}`);//User power: fly
// }
// console.log(`User power: ${power}`); //power is not defined

// const score = 200
// if (score > 100){                 //scope condition
//     var power ="fly"
//     console.log(`User power: ${power}`);//User power: fly
// }
// console.log(`User power: ${power}`); //User power: fly

//Implicit scope
//this code run in one line ex:
// const balance = 1000
// // if (balance > 500) console.log("test");  // test ans get
// if(balance < 500){
//     console.log("less than");
// } else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 750");
// } else{
//     console.log("less than 1200")   //less than 1200
// }

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle=true
const loggedInFromEmail=false

if (userLoggedIn && debitCard && 2==3){       //when change the statement code is not execute
      console.log("Allow to buy course");    //Allow to buy course
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")         //user logged in
}








