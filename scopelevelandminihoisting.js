//var c =300
let a =300
if (true){
    let a =10
    const b =20
    console.log("INNER:".a);
}
// console.log(a);   //300
// console.log(b);
// console.log(c);

function one(){
    const username="Devisha"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
   // two()   //undefined
}

//one()      //Devisha
if (true){
    const username = "Devisha"
    if(username === "Devisha"){
        const website ="   youtube"
        console.log(username + website)    // Devisha  youtube
   }
}

//++++++++++++++++++++++++ interesting ++++++++++++++++++++++

function addone(num){
    return num +1
}
addone(10)

const addtwo = function(num){
    return num + 2
}

addtwo(5)