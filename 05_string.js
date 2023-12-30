const name = "devisha"
const repoCount = 35

console.log(name + repoCount + "Value"); //devisha35Value

console.log('Hello my name is ${name} and my repo Count is ${repoCount}');    //Hello my name is ${name} and my repo Count is ${repoCount}

const gameName = new String('Devisha')

console.log(gameName[0]);         //D
console.log(gameName._proto_);    //undefined

console.log(gameName.length);     //7
console.log(gameName.toUpperCase());   //DEVISHA

console.log(gameName.charAt(4));    //s ans from name devisha
console.log(gameName.indexOf('h')); ///h letter place on number 5

 const newString = gameName.substring(0,5)
 console.log(newString);                // ans is Devis

 const anotherString = gameName.slice(-7,3)
 console.log(anotherString);//Dev

 const newStringOne = "       Devisha      ";   //     Devisha
 console.log(newStringOne);               //Devisha
 console.log(newStringOne.trim());

 const paragraph = "I think Aashna's dog nayla is cute one she is mix with golden retriver and german shaperd";
 console.log(paragraph.replace('Aashna','Aayush'));    //I think Aayush's dog nayla is cute one she is mix with golden retriver and german shaperd
 const regex = /dog/i;
 console.log(paragraph.replace(regex, 'cat'));    //I think Aashna's cat nayla is cute one she is mix with golden retriver and german shaperd


 //const sentence = 'Devisha is working as qa in one of it complany';
 console.log(paragraph.includes('nayla'));     //true
 console.log(paragraph.includes('shimba'));    //false

 const str = 'The quick brown fox jumbs over the woods and lazy dog laying down';
 const words = str.split('');
 console.log(words[5]);             //u

 console.log(gameName.split('_'));    //[ 'Devisha' ]
