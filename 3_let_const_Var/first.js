console.log("In this tutorial we see the difference between let const and var.");

//-------------------------Uncomment all the logs and try code and outupt-----------------

// let and var are used to initialize the variables whose values are going to change later.

//whereas, const are used to initialize those variables whose values is going to remain constant throughout the program.

//now let us see var and let's difference.

//1. var was used till the introduction to ES6. Let was intorduced after ES6.
//2. var is globally scoped and let and const is block scoped.
// it means var can be changed globally from anywhere but let can be changed only in that block.

//for example-

var a = "shivam";
var b = "intelligent";
// console.log(b); //output - intelligent
{
  var b = "lazy";
  // console.log(b); //output - lazy
}
// console.log(b); //output - lazy

let x = 'shivam';
let y = 'honest';
// console.log(y); //output - honest
{
  let y = "lazy";
  // console.log(y); //output - lazy
}
// console.log(y); //output - honest

//3. var can be updated and redeclared in its local scope. and let can only be updated not redeclared.
//for example-
var c = 67;
var c = 87;
// console.log(c); // no error. output - 87;

let harry = "shivam";
harry = "holy"; //ok
// console.log(harry); //ouput - holy;
// but let harry = "holy" will give error.

//4. var variables are intialized with undefined and let and const variable are not initialized with undefined.