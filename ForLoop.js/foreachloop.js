const  coding= ["teamone","teamtwo", "teamthree","teamfour"]

coding.forEach( function  (team){
      console.log(team)
})                                    //teamone
                                       //teamtwo
                                       //teamthree
                                        //teamfour

// coding.forEach((item) =>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{    //teamone 0 [ 'teamone', 'teamtwo', 'teamthree', 'teamfour' ]
    console.log(item,index,arr);         //teamtwo 1 [ 'teamone', 'teamtwo', 'teamthree', 'teamfour' ]
 })                                      //teamthree 2 [ 'teamone', 'teamtwo', 'teamthree', 'teamfour' ]
                                         //teamfour 3 [ 'teamone', 'teamtwo', 'teamthree', 'teamfour' ]