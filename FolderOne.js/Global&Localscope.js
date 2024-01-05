const x = "declared outside function";

exampleFunction();

function exampleFunction() {          //  Inside function
    console.log("Inside function");
  console.log(x);                       //declared outside functi
}                                        // Outside function
console.log("Outside function");         // declared outside function
console.log(x); 


// let a =10
// const b = 20
// var c =30
let a = 300

if (true){
    let a =10
    const b = 20
    console.log("INNER:",a); //INNER: 10
  
}

// for (let i =0; i < Array.length; i++){
//     const element =array[i];                //const element =array[i];
// }
console.log(a);  //  300
//console.log(a);  //10   //console.log(a);
//console.log(b);  //20     //console.log(b);  //20
//console.log(c);  //30       //30


                                        