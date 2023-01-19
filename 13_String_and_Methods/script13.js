let a = "Shivam";
let b = "Kumar";
//A string is a group of characters whose index starts with 0 and ends with n -1. where n is length of a String.
//Note - a String is immutable - it means that we cannot change the original String.


//String Methods -
console.log(a.charAt(1));
//this method is used to know the character at given index.

a.charAt(3);
console.log(a);
//output - Shivam
//Because a String is immutable.


console.log(a.slice(2, 4));
//this method will slice the string. It will not include the index given in 2nd parameter.

console.log(a.replace("am", "ani"));
//this method will replace the string given in 1st param with the 2nd param. 

console.log(a.indexOf('i'));

//give the index of the character.

console.log(a.trim());

//trims all the extra spaces from the string.
console.log(a.concat(b));
//append the given string in another string.
//+ can also be used to concat a string.

console.log(a.endsWith('m'));
//returns true if string ends with given string and false otherwise.

console.log(a.length);
//Gives the length of the given string.

console.log(a.includes('S'));
//returns true of the string contain given Character.

console.log(a.toLowerCase());
//convert all the characters of a string into LowerCase

console.log(a.toUpperCase());
//convert all the characters of a string into UpperCase

//Chapter 4 - Practice Set
//Extract the amount and store it in a variable from the given string.
let str = "Please give me Rs. 1000";
let amount = Number.parseInt(str.slice("Please give me Rs. ".length));
console.log(amount);
console.log(typeof(amount));