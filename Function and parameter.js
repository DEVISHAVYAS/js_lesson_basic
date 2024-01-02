function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("I");
}
sayMyName()   //D
              //E
              //V
              //I
//
// // Create a global property with `var`
// var x = 10;

// function createFunction1() {
//   const x = 20;
//   return new Function("return x;"); // this `x` refers to global `x`
// }

// function createFunction2() {
//   const x = 20;
//   function f() {
//     return x; // this `x` refers to the local `x` above
//   }
//   return f;
// }

// const f1 = createFunction1();
// console.log(f1()); // 10
// const f2 = createFunction2();
// console.log(f2()); // 20

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
//addTwoNumbers(10,20)   //30
//addTwoNumbers("10","20")  //1020
//addTwoNumbers("10",20)   //1020
//addTwoNumbers(3,null)  //3
//addTwoNumbers(3,"a")  //3a
// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     return result             //11
// }
// function loginUserMessage(username){
//     return`${username} just loggen in`
// }
//  console.log(loginUserMessage("Devisha"))  //Devisha just loggen in


//  function loginUserMessage(username ="sam"){
//     if(!username){
//         console.log("Please enter a message")
//         return
//     }
//     return`$(username) just logged in`
// }
// console.log(loginUserMessage("Devi")) //Please enter a message
//                                    //undefined
// const result = addTwoNumbers(3,8)//11
// console.log("Result:",result);   //undefined
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))  //[ 200, 300, 400 ]

const user ={
    username: "Devisha",
    prices:300
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is $ {anyobject.price}`);
}

//handleObject(user)  //username is Devisha and price is $ {anyobject.price}
handleObject({
    username:"Devi",
    price:399
})                       //username is Devi and price is $ {anyobject.price}
const myNewArray = [200,300,100,2000]
function returnSecondValu(getArray){
    return getArray[2]
}

console.log(returnSecondValu(myNewArray));   //300






