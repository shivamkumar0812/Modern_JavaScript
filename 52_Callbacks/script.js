// Synchronous code -
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// let color = prompt("What is your favourite color?");

// console.log(name+" is " +age+ " years old and has" + color +" favourite color");

// //Ashynchronous code -
// console.log("Start");
// setTimeout(function() {
//   console.log("I am timeout");
// }, 3000)
// console.log("End");

//Callback function - LoadScript function which loads bootstrap's script
function loadScript (src, callback)  {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Script Loaded with SRC: " + src);
    callback(null,src);
  }
  script.onerror = function() {
    console.log("Script Loaded with Error for SRC: " + src);
    callback(new Error("Src got some error"));
  }
  document.body.appendChild(script);
}
function hello (error,src) {
  if(error){
    console.error( error);
    return;
  }
  alert("Hello World!"+ src);
  
}
function goodMorning (src) {
  alert("Good Morning!");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello);