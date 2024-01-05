//Immediately Invoked Function Expressions(IIFE)
// (() => {
//     let firstVariable;
//     let secondVariable;
// })();

// //execute an asynce function
// //async IIFE allow you to use await and for-await

// const getFileStream = async(URL)=>{
//     //implementation
// }

// (async() =>{
//     const strem = await getFileStream("https://domain.name/path/file.ext");
//     for await (const chunk of strem){
//         console.log({ chunk });
//     }
// })();

// let counter = (function () {
//     let i = 0;

//     return {
//         get: function () {
//             return i;
//         },
//         set: function (val) {
//             i = val;
//         },
//         increment: function () {
//             return ++i;
//         }
//     };
// })();

// // These calls access the function properties returned by "counter".
// counter.get();       // 0
// counter.set(3);
// counter.increment(); // 4
// counter.increment(); // 5

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()    //DB CONNECTED

//IIFE  fuction use for global scope polution to remove globalscope variable and declaration they use IIFE variable
(function chai(){                //name iife use name with function 
    console.log(`DB CONNECTED`);
})();     //DB CONNECTED
// ( function aurcode(){
//     console.log('DB CONNECTED TWO'); //DB CONNECTED TWO
// })()

( (name) =>{
    console.log('DB CONNECTED TWO'); //DB CONNECTED TWO
})('Devisha')
//In IIFE function when you have to end one function and start another function first function end with semicolon