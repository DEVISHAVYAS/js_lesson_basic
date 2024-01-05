// const userEmail="devi@gmail.com"  //User get emial
// if(userEmail){
//     console.log("User get emial");
// }else{
//     console.log("Don't have user email");
// }

//****************** if use not put any value in const******************************
const userEmail =""           //Don't have user email
if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

//falsy values
//false,0,-0, BigInt 0n, "", null, undefined,NaN

//truthy values
//truth,"0",'false'," ",[],{},function(){}

if (userEmail.length === 0){
    console.log("Array is empty");   //Array is empty
}

const emptyObj = {}           //Object is empty
if (Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

//Nullish coalescing operator(??): null defined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 //10
var1 = undefined ?? 15  //undefined //15
//va11 = undefined ?? 15
val1 = null ?? 10 ?? 15   //10


console.log(var1);   //5

const iceTeaPrice = 100
iceTeaPrice >=80? console.log("less than 80"):console.log
("more tahn 80")           //less than 80


