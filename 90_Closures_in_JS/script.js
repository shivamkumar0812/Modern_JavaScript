//This is related to scope
// let message = "Good Morning";
// function one(){
//   let message = "Good Morning";
//   {
//     let message = "Good Afternoon";
//     console.log("hello, "+ message);
//   }
//   message = "Good Night";
// }
// one();
// console.log(message);

//OUTPUTS -> Hello, Good Afternoon
//---------> Good Morning,

//This is related to closures.
//Closure refers to a function within another function returns with its lexical environment.(reference of its variable)
function one(){
  let name = "shivam";

  let hello = function two(){
    console.log("hello, "+ name);
  }
  name = "Sudhanshu"
 return hello;
}
let c = one();
c();
//OUTPUT -> Hello, Sudhanshu
//because hello is taking the refernce of name variable.


//MDN Example - 
function init(){
  var name = "Mozilla";
  function displayName(){
    //displayName is an inner function , a closure
    console.log("Hello, "+ name); //will print name by taking the reference of outer function's variable. so if we change the name later then it will reflect in the inner function as well.
  }
  name = "Shivam";
  displayName();
}
init();
//OUTPUT -> Hello, Shivam

//The upper function can also be written as - 
function init2(){
  var name = "MDN";
  let dn = function displayName2(){
    //displayName is an inner function , a closure
    console.log("Hello, "+ name); //will print name by taking the reference of outer function's variable. so if we change the name later then it will reflect in the inner function as well.
  }
  name = "Karan";
  return dn;
}
let answer = init2();
answer();
//OUTPUT -> Hello, Karan