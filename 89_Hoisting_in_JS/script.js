// goodMorning();
// //this will not produce an error because of hoisting
// function goodMorning(){
//   console.log("Good Morning");
// }

//this upper code appears to be like the following code -
// function goodMorning(){
//   console.log("Good Morning");
// }
// goodMorning();
console.log(a); //output - undefined.......because interpreter moves only the declaration to the top, not initialization. 
var a = 9;
console.log(a); //output 9. //a is initialized so now the value of a will change to 9  from undefined.

//but scenes will be different if we use let
//variables declared with let cannot be accessed before initialization
//for ex- 
//console.log(b); //it will produce an error because let variables cannot be accessed before inialization.
let b = 11 ;
console.log(b);

//As we have seen we can access goodMorning before initialization
//But we cannot hoist function expressions and class expressions in JS.
//for ex - 
// goodMorning();
// let goodMorning = function (){
//   console.log("Good Morning");
// }
//this will produce an error
//similarly an arrow function will also produce an error, no surprise whatsoever.
goodMorning1();
let goodMorning1 = () =>{
  console.log("Good Morning");
}