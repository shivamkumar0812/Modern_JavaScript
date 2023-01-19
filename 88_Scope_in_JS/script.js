// let a = 23;
// console.log(a);
//we know that it will print 23.
// let a = 23;
// {
//   console.log(a);
// }
//it will produce also print 23 because now a is global variable.
//But what about following -
// {
//   let a = 23;
// }
// console.log(a);
//It will produce an error because a is a function variable but we are trying to access it from global scope.
// {
//   var a = 23;
// }
// console.log(a);
//output will be 23 because of var.