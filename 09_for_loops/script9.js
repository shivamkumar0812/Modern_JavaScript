//For loops
let i = 100;
for ( i < 0; i--;) {
  // console.log(i);
}

// Example of simple for loop
//Sum of first n natural  numbers is -
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i <=n; i++) {
 sum += i;
  
}
// console.log("Sum of first " + n +" natural numbers is: "+ sum);

// Example of for in loop

let stud = {
  Vikash: 97,
  Shubh: 56,
  Akash: 12,
  Harry: 56,
  Shivam: 100
}
//for in loop can be used for objects to obtain key and values seperately.
for (let a in stud) {
  // console.log(a)
  console.log("Marks of " + a +" are " + stud[a]);
}


// Example of for of loop
//for of is used for only iterable elements like array and strings.
let arr = [1,2,3,4,5];
for (let b in arr) {
  console.log(b);
}