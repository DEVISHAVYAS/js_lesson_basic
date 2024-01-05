//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element
const array1 = [1,2,3,4,5];
const initiaValue =0;
const sumWithInitial = array1.reduce((accumulator, currentValue) =>
accumulator+currentValue,initiaValue,);
console.log(sumWithInitial);