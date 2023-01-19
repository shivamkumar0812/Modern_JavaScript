let arr = [1,5,6,7,2,24,7,2];
let marks = [45, 34, 36, 63, 99];
//Array is similar to String but it can contain any type of data
//An array is mutable means the elements of an array can be changed.
//Index of an array starts with 0 and ends with n -1 where n is the length of the array
console.log(arr);
// Array Methods

console.log(arr[4]);
//output - 2. 
//It returns the element at given index.
console.log(arr[8]);
//it will return undefined because element at 8th index does not exist.

arr[8] = 64;
console.log(arr[8]);
//output - 64....we can add an element later in the array.

arr[0] = 45;
console.log(arr);
//changing the element of an array.

//console.log(arr.concat(marks));
//it is used to append an array to another array.

//normal for loop to loop through an array
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

//for each loop to loop through an array
arr.forEach(element) = () => {
  //console.log(element);
}
//using for in loop to print all the element of an array
for (const key in arr) {
  //console.log(arr[key]);
}

//using for of loop to print all the elements of an array
for (const key of arr) {
  console.log(key);
}
//we can use key in both the loops because const is block scoped.

//Hence the only difference between for in and for of loop is that for in returns key of an object and for of loop returns the values of an object.
let strr = "Shivam";
let newArr = Array.from(strr);
//Array.from method Creates Array from given object.
//It is mostly used in DOM manipulation to create HTML Collection to an array.
console.log(newArr);