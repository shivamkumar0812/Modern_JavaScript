console.log("In this code I have explained all the primitive data types and non primitive data types.");
//--------------------Primitive Data types ------------------------------------
/*
N = number;
N = null;
S = string;
S = symbol;
B = boolean;
B = Bigint (long, float etc.);
U = Undefined;

*/
//for example-
let a = 87;
let b = null;
let c = "shivam";
let d = Symbol("This is a symbol");
let e = true;
let f = BigInt('678');
let g = undefined;
//console.log(a, b, c, ,d, e, f, g);
//console.log(typeof c) //output - string
//-------------------------------Non - Primitive Data Types ----------------------------------
// 1. Objects. ----> Their is only one non-primitive data type that is object.
// Object is a key value pair.
//for exmaple-


const object1 = {
   harry : "shivam",
   rohan : 67,
   shubh : undefined,
}
console.log(object1["rohan"]);
//---------OR---------------
console.log(object1.harry);

object1['friends'] = "sourav";


console.log(object1.friends);

//There are many types of objects like date, array, map, set , class , and other.
