//for of

//["","",""]
//[{},[{}],[{}]]

// const arr =[1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }
// const greetings = " Hello world!"
// for(const greet of greetings){
//     console.log(`Each cha is $ {greet}`)
// }
//Maps
// const map = new Map()                               //Map(3){'IN' => 'India','PK' => 'Pakistan','U.S' => 'United stats of America'}
// map.set('IN',"India")
// map.set('PK',"Pakistan")
// map.set('U.S',"United stats of America")
// //console.log(map);
// for(const [key,value]of map){         //IN :- India
//     console.log(key, ':-',value);     //PK :- Pakistan
// }                                     //U.S :- United stats of America
// const myObject = {           // js
//     js:'Javascript',         //cpp
//     cpp:'C++',                //rb
//     rb:'ruby'
// }
// // for(const key in myObject){
// //     console.log(key);
// // }

// for(const key in myObject){                  //js shortcut is for $(object{key})
//     console.log(`${key} shortcut is for $(object{key})`)  // cpp shortcut is for $(object{key})
// }                         //  rb shortcut is for $(object{key})

// const programming =["js","rb","c++","py"]
// for(const key in programming){
//     console.log(key);            //0,1,2,3
// }

const programming =["js","rb","c++","py"]
for(const key in programming){
    console.log(programming[key]);            //js,rb,c++,py
    for(const key in programming){
        console.log(key);            
    }
}