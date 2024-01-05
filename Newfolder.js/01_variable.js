const accountId=2666
let accountEmail="devishahvy23@gmail.com"
var accountPassword="devisha@vyas"
accoountCity="Charlotte"
let accountState;


//accountId=2
console.log(accountId);   //when excute one line use the console.log
console.table([accountId,accountEmail,accountPassword,accoountCity,accountState])
/*
perfer not to use var 
because of issue in block scope and functional src
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│    0    │           2666           │
│    1    │ 'devishahvy23@gmail.com' │
│    2    │      'devisha@vyas'      │
│    3    │       'Charlotte'        │
│    4    │        undefined         │ if not mention variable name it shows undefined in jsvascript
└─────────┴──────────────────────────┘
*/