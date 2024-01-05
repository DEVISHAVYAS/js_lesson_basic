// const numbers = [1,2,3,4,5,6,7,8,9,10]
// //const newNums=numbers.map( (num) => num +10)
// const newNums = numbers
// .map((num) => num * 10)
// .map((num) =>num + 1)
// .filter((num) => num >=40 )
// console.log(newNums);    //15

// 
console.log(myTotal);
const shoppingCart =[
    {
        itemName:"Js course",
        price:3000
    },
    {
        itemName:"Py course",
        price:5000
    },
    {
        itemName:"Java script",
        price:10000
    },
]
const prictopay=shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(prictopay);