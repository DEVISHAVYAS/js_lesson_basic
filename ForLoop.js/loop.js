//for loop

// for (let i = 0; i < 10; i++) {     //0,1,2......9
//     const element = i;
//     if(element == 5){
//     console.log("5 is best number");
//     }
// console.log(element);
// }
// for (let i = 0; i <=10; i++) {
//    console.log(`outer loop value:${i}`);
//    for(let j =0;j<=10;j++){
//     //console.log(`inner loop value ${j} and innter loop ${i}`);
//     console.log(i + '*' +j + "-" +i * j);
//    }
    
// }
// let array =["Jay","Aashna","Rucha"]
// console.log(array.length); //3 //Jay,ashna,Rucha
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

//break and continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
       //break
        continue
    }
    console.log(`value of i is ${index}`);
}