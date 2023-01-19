alert("Hello, this is an alert");

let d = prompt("Enter your name");
let demo = document.getElementById("demo");


//Use of confirm
let write = confirm("Do you want to See welcome message?");
if(write){
  demo.innerHTML =`Hello ${d} Welcome to our Website`;
}
else{
  demo.innerHTML= `${d} Please allow me to Welcome you!`;
}