const marvel_heros =["Thor","Ironman","spiderman","Batman"]
const dc =["Thor","Flash","superman"]

// marvel_heros.push(dc);
// console.log(marvel_heros);   //['Thor','Ironman','spiderman', 'Batman', [ 'Thor', 'Flash', 'superman' ] ]
  
// marvel_heros.concat(dc)
// console.log(marvel_heros);    //[ 'Thor', 'Ironman', 'spiderman', 'Batman' ]

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);                      //['Thor','Ironman','spiderman','Batman','Thor','Flash', 'superman']

// const all_new_heros=[...marvel_heros,...dc]
// console.log(all_new_heros)  //['Thor','Ironman','spiderman','Batman', 'Thor','Flash','superman']

// const another_array= [1,2,3,4[4,5,6],7,8[6,7,[8,4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);   //[ 1, 2, 3, undefined, 7, undefined ]


// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]

//unshift is just work as pop to add an item of the array
// const cities = ["Manchester","Liverpool"];
// cities.unshift("Edinburgh");
// console.log(cities);            //[ 'Edinburgh', 'Manchester', 'Liverpool' ]


//Removing items to remove the last item from the array use pop() method
// const cities = ["Manchester", "Liverpool"];
// cities.pop();
// console.log(cities);   //[ 'Manchester' ]

//to remove the first item from an array use shift(): metod
// const cities =["Manchester","Liverpool"];
// cities.shift();
// console.log(cities);      //[ 'Liverpool' ]

//remove from the array using splice()
// const cities =["Manchester","Liverpool","Edinburgh","Carlisle"];
// const index = cities.indexOf("Liverpool");
// if(index!==-1){
//     cities.splice(index, 1);
// }
// console.log(cities);  //[ 'Manchester', 'Edinburgh', 'Carlisle' ]



