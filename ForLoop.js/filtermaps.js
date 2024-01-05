const myNums=[1,2,3,4,5,6,7,8]
//  let newNums= myNums.filter( (num) => num >5)
//  console.log(newNums);   //[ 6, 7, 8 ]

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);   //[ 5, 6, 7, 8 ]

const books =[
    {title:"Book one", genre:"Fiction",publish:"1981"},
    {title:"Book two", genre:"non-Fiction",publish:"1984"},
    {title:"Book three", genre:"Fiction",publish:"1971"},
    {title:"Book four", genre:"science",publish:"1995"}
];
let userbooks =  books.filter( (bk) =>bk.genre==="Fiction")
userbooks = books.filter((bk) => {return bk.publish>= 2000})
console.log(userbooks);    //[]
