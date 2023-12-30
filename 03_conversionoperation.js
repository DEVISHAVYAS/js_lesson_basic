//let score = "33xyz" //print number without the double quote
let score = null  // ans is 0 
//with double quote it shows on terminal ans string
console.log(typeof score);  //print number
console.log(typeof(score)); //print number

let valueInNumber= Number(score)    //score
console.log(typeof valueInNumber); //number
console.log(valueInNumber);        //33

//boolen true =>1;
//false =>0;
//let isLoggedIn = 1;       //Ans is true
//let isLoggedIn ="Devisha"
let isLoggedIn = "";       //Ans is false
let boolenIsLoggedIn = Boolean(isLoggedIn)
//console.log(boolenIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"Devisha" =>true

let someNumber = 55
let stringNumber = String(someNumber)
console.log(someNumber);                  //Ans is 55