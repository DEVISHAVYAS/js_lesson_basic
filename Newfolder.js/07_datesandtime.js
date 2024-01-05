//Dates
let myDate = new Date()
// console.log(myDate);     //2023-12-31T00:09:02.478Z it shows current date
// console.log(myDate.toString());      //Sat Dec 30 2023 19:12:05 GMT-0500 (Eastern Standard Time)
// console.log(myDate.toISOString());   //2023-12-31T00:13:38.830Z
// console.log(myDate.toJSON());        //2023-12-31T00:14:29.631Z
// console.log(typeof myDate);       //object

//let myCreatedDate = new Date(2024,1, 12)
//console.log(myCreatedDate.toDateString());  //Mon Feb 12 2024
let myCreatedDate = new Date("01-14-2023")
//const start = Date.now()
//console.log('start');
let myTimeStamp = Date.now()
console.log(myTimeStamp);      //1703983205708

console.log(myCreatedDate.getTime());      //1703983348674
                                           //1673672400000

// ans shows in mili second 
console.log(Date.now()/1000);          //1703983560.493
//when we don't need ans in mili second we use code
console.log(Math.floor(Date.now()/1000));   //1703983660 floor method remove number after decimal
let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());   //2023
console.log(newDate.getDay());    //6
console.log(newDate.getDate());    //30

newDate.toLocaleDateString('default',{
    weekday:"narrow"
})
                           