// 1st method - Log
console.log(console);
//It will log anything that we will provide as a parameter.

//2nd method - Error
console.error("this is an error");
//It will produce an error in the console.

//3rd method- Assert
console.assert(555>55);
//It will do nothing if the condition is true otherwise it will produce an error.

//4th method - Warn
console.warn("this is a warning");
//It will produce a warning in the console.

//5th method - Clear
console.clear();
//It will clear the whole console

//6th Method - Table
const obj = {
  a: 1,
  b:2,
  c: 3
}
console.table(obj);
//It will show the object's key value pair in tabular form

//7th Method - Info
console.info("this is an information to the user");
//this method is somewhat similar to log
//the info message can be seen in the info tab of the console.

//8th and 9th method - time and timeEnd methods
let p = 9;
console.time(p);
//It will start calculating time for p process

console.timeEnd(p);
//Now it will give the total time taken to process time and timeEnd methods to run p.

