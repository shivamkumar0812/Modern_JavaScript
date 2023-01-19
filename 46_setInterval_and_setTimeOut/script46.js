// let first = document.getElementById("first");
// first.innerHTML = "hello";

// let a = setTimeout(function() { 
//   alert("Hello, I am inside of setTimeout");
// }, 3000);
// //setTimeout is used to run some set of instructions at a given time of interval.
// //setTimeout returns timerId, which can be later used in clearTimeout method.

// let ans = prompt("Do you want to see the alert?");
// if(ans == "n"){
//   clearTimeout(a);
//   //cleartime out method is used to stop the execution of setTimeout.
// }
//Note - if we cancel the prompt and do not provide any value then setTimeout function will automatically run.

const sum = (a,b,c) => {
  console.log("Sum is running " + (a+b+c));
}
setTimeout(sum, 7000, 1,2,3);
//Message in the console will be shown up after 7 seconds or 7000ms.
let b = setInterval(sum, 7000, 1,2,3);
//this setInterval method is used to run the sum function in every 7seconds for inifinitely.
clearInterval(b);
//clearInterval is similar to clearTimeout.
//clearTimeout is used to stop the execution of setTimeout method, similarly clearInterval is used to stop the execution of setInterval method.


