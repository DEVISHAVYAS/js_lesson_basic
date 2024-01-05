//const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name= "Sammy"
// tinderUser.isLoggedIn = false

// //console.log(tinderUser);
// const regularUser= {
//     email: "some@gmail.com",
//     fullname:{
//         usrfullname:{
//             firstname:"devisha",
//             lastname:"vyas"
//         }
//     }
// }
// //console.log(regularUser.fullname);   //{ usrfullname: { firstname: 'devisha', lastname: 'vyas' } }
// console.log(regularUser.fullname.usrfullname.firstname);  //devisha


// const obj1 = {1: "a",2: "b"}
// const obj2 = {3: "a",4: "b"}
// //const obj3 ={ obj1, obj2}
// const obj3 = Object.assign(obj1,obj2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const target = {a:1,b:2};
// const source ={ b:4,c:5};
// const returnedTarget = Object.assign(target,source);
// console.log(target);  //{ a: 1, b: 4, c: 5 }
// console.log(returnedTarget === source);  //false

// const obj1 ={a:0,b:{c:1}};
// const obj2= Object.assign({},obj1);
// console.log(obj2);   //{ a: 0, b: { c: 1 } }

//Object.assign() copies property values.

//Marging object
// const o1 = {a:1};
// const o2 = {b:2};
// const o3 ={c:3};
// const obj = Object.assign(o1,o2,o3);
// console.log(obj);   //{ a: 1, b: 2, c: 3 }


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
const obj3 = {...obj1,...obj2}
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
