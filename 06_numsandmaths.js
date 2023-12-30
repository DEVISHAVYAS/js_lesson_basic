// const score = 400
// console.log(score);  //400

// const balance = new Number(100)
// console.log(balance);        /// [Number: 100]

// console.log(balance.toLocaleString());    //100
// console.log(balance.toFixed(4));      //100.0000
// console.log(balance.toString().length); //3
// console .log(balance.toFixed(1));

// const otherNumber =45.478

// console.log(otherNumber.toPrecision(3)); //45.5
// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Maths$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(Math);   //Object [Math] {}
console.log(Math.abs(4));       //4
console.log(Math.round(4.9));    //5
console.log(Math.ceil(4.2));     //5
console.log(Math.floor(3.8));  //3
console.log(Math.pow(2.8));   //NaN
console.log(Math.max(5,8,4,9)); //9
console.log(Math.min(5,8,4,9));  //4

console.log(Math.random());//0.13501896066669405
console.log(Math.random()*10);  //9.517219218389688
console.log(Math.floor(Math.random()*10)+1); //4.63018078872291

const min =10
const max =20

console.log(Math.floor(Math.random()* (max - min +1)));  ////ans come between 1 to 9
console.log(Math.floor(Math.random()* (max - min +1))+ min); //after adding min ans come between 11 to 19
