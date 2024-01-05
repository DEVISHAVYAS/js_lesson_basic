// const user ={
//     username: "Hitesh",
//     price:500,

//     wecomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }

//user.wecomeMessage()             //Hitesh, welcome to website
//this function value depands on context it appears function,class,or global method
//Inside a function this value is depands on how to called methods this is hidden parameter of a function 

// function getThis(){
//     return this;
// }
// const obj1 = {name:"obj1"};
// const obj2 = {name:"obj2"};

// obj1.getThis =getThis;
// obj2.getThis=getThis;
// console.log(obj1.getThis()); //{ name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); //{ name: 'obj2', getThis: [Function: getThis] }

// //this value is not the object that function as an own property

// function getThis(){
//     return this;
// }

// //only for demonstration-you should not mutate built in prototypes
// Number.prototype.getThis =getThis;
// console.log(typeof(1).getThis());    //object
// console.log(getThis()===globalThis);  //true

// //callbacks method in this method
// //value of this depands on how the callback is callsed which is determined by the implametor of the api call back
// function logThis(){
//    "use strict";           //undefined
//    console.log(this);      //undefined
// }
// [1,2,3].forEach(logThis);   //undefined

 const user ={
     username: "Hitesh",
     price:500,

    wecomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.wecomeMessage()              //user.wecomeMessage()
// user.username ="Devi"              // //Hitesh, welcome to website
console.log(this);  //{} it show empty method because we run the variable in node and make variable as global
//call this value in function
// function chai(){
//     let username = "Jay"
//     console.log(this.username); // ans is underfined
// }
// chai()

// const chai = () =>{
//     let username = "Jay";
//     console.log(this.username);
// }
// chai()

const addTwo = (num1 ,num2) => {
    return  num1+num2
}

console.log(addTwo(3,4))   //7