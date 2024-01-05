// singleton

//object literals
// Object.create
// const mySym = Symbol("Key1")
// const JsUser={
//     name:"Devisha",
//     Age:42,
//     [mySym]:"myKey1",
//     location:"IndianLand",
//     email:"devishavyas@yahoo.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday","Tuesday"]
// }
// console.log(JsUser.email)     //devishavyas@yahoo.com
// console.log(JsUser["email"]) //devishavyas@yahoo.com
// console.log(JsUser["name"])  // Devisha
// console.log(JsUser[mySym])  //myKey1

// JsUser.email="devisha@gmail.com"
// Object.freeze(JsUser)
// JsUser.email ="drvyas0810@gmail.com"
// console.log(JsUser);     //{
//     name: 'Devisha',
//     Age: 42,
//     location: 'IndianLand',
//     email: 'devisha@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     [Symbol(Key1)]: 'myKey1'
//   }
//myArray =["D","E","V","I","S","H","A"]
// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User,${this.name}`);
// }
//  console.log(JsUser.greeting());    //undefined
//  console.log(JsUser.greetingTwo());
