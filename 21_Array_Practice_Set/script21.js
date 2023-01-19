//Practice Problem 1 - 
//Create an array that stores numbers and allow user to enter a number then add this number to the array
// let arr = [1, 2, 3, 5, 6, 7, 23];
// let a = prompt("Enter a number to add in array");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//Practice Problem 2 -
//Create an array and allow user to enter a number until 0 is entered.
let arr2 = [1, 2, 3, 5, 6, 7, 23];
let a2;
do {
  a2 = prompt("Enter a number to add in array");
  a2 = Number.parseInt(a2);
  arr2.push(a2);
} while (a2 !== 0);
console.log(arr2);