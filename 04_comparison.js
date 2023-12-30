// console.log(2 > 1);
// console.log(2 >=1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);      //true
console.log("02" > 1);     //true

console.log(null > 0);    //false
console.log(null == 0);   ///false
console.log(null >= 0);   //true

console.log(undefined == 0); //false
console.log(undefined > 0);   //false
console.log(undefined < 0);  //false

// ==
console.log("2" == 2); //true
console.log("2" >= "3"); // false


//######################stack and Heap##########################


//Stack(Primitive), Heap(Non-Primitive)

//let myYoutubename: String
let myYoutubename = "Hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);  //Hiteshchoudharydotcom
console.log(anothername);     //chai or code


 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }
 let usertwo = userone

 usertwo.email="devishavy@google.com"
 console.log(userOne.email);//devishavays@google.com
 console.log(usertwo.email);
