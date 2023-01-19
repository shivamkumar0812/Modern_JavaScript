//Question 1 - Takes age as an input from the user and tell him/her whether he/she can drive or not.
//Answer -
let playAgain = true;

while(playAgain){
  let age = prompt("Enter your age:");
age = Number.parseInt(age);
if(age<0 || age > 130){
  console.error("Enter a valid age");
  break;
}
if(age >=18){
  alert("You can Drive.");
}
else{
  alert("You cannot drive");
}
playAgain = confirm("Do you want to play again?");
}