//arrays
// arrays in strings
// const shopping=["Milk","Fruits","Veggies","Beans","Bread"]
// console.log(shopping);          //[ 'Milk', 'Fruits', 'Veggies', 'Beans', 'Bread' ]
// console.log(shopping.length);    //5

const myArr = [1,6,8,48,65,78,100,25]
const myArr2 = new Array(1,2,3,4)
console.log (myArr[4]);             //65


// push method adding the value number


myArr.push(0)
myArr2.push(9)
console.log(myArr);    //[1,   6,  8, 48, 65,78, 100, 25,  0]
console.log(myArr2);     //[ 1, 2, 3, 4, 9 ]


//pop method is removing the last number in sequence
myArr2.pop()
console.log(myArr2);     //[ 1, 2, 3, 4 ]

myArr2.unshift(2)          //[ 1, 2, 3, 4 ]
console.log(myArr2);    //[ 2, 1, 2, 3, 4 ]

console.log(myArr.includes(35));   //false
console.log(myArr2.indexOf(4));     // 4 value available on myArr2

const newArr = myArr.join()
console.log(myArr);     //[ 1,   6,  8, 48, 65, 78, 100, 25,  0]
console.log(newArr);      // 1,6,8,48,65,78,100,25,0

console.log["A",myArr];
const myn1 = myArr.slice(1,3)  //a[6,8]
console.log(myn1);
console.log("B",myArr);      // BB [1,   6,  8, 48, 65, 78, 100, 25,  0]

