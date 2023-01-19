// Normal flow of JS code -
// console.log("I am one");
// setTimeout(() => {
//   console.log("I am two");
// })
// console.log("I am three");

//---------------------------A simple promise -------------------------
let promise = new Promise((resolve, reject) => {
  console.log("I am a simple promise");
  resolve(56);
  //resolve is return when program finished successfully
  //reject is return when program produce error.
})
console.log(promise);

// --------------Then and Catch method--------------------------
promise.then((value) => {
  //if promise is fulfilled then run then method.
  console.log(value);
})
promise.catch((error)=>{
  //if promise is rejected then run catch method
  console.log("Some error occured");
})

//or we can also use this syntax to get the value and catch the error from a single promise
// promise.then((value)=> {
//   console.log(value);
// },(error)=> {
//   console.log(error);
// })

//Chaining .then() calls
let p1 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    console.log("We are running in 2 seconds");
    resolve(4);
  }, 2000)
})

//Writing loadScript method with the help of promises
const loadScript = (src) => {
  let p1 = new Promise((resolve,reject)=>{
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  document.body.appendChild(script);
  script.onload =() => {
    resolve(1);
  }
  script.onerror = () => {
    reject(0);
  }
})
}
let p3 = loadScript("https://localhost:3000/script.js");
p1.then((value)=> {
  console.log("Script loaded successfully");
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
}).then((value)=>{
  console.log("Second script loaded successfully")
})
p3.catch((error)=> {
  console.log("We are having some problem while loading the script");
})

//Attaching multiple .then handlers to same promise
//suppose p1 is the promise in which we want to add multiple handlers
//the order of execution of these handlers will depend on the order we have written these handlers.
p1.then((value)=>{
  console.log("Welcome to first console of multiple handlers");
})
p1.then((value)=>{
  console.log("This is second console of multiple handlers");
})

p1.then((value)=>{
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {resolve("Promise 2")}, 2000)
  })
  return p2;
}).then((value)=> {
  console.log("We are done");
  return 2;
}).then((value)=> {
  console.log("Now we are surely done");
})

//-------------------------Async and Await-------------------------
// async function shivam (){
// let issuingBook = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     // console.log("hurray 1");
//     resolve("Book Realeased from the library");
//   },3000)
// })  
// let takingBook = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     // console.log("hurray 2");
//     resolve("Book Added in the library");
//   },2000)
// })  
// let a = await issuingBook;
// let b = await takingBook;
// //async function always returns promise
// //we can return an array of await promises
// return [a,b];
  
// }
// console.log("Welcome to the library");
// shivam();


//---------------------------------Promise API Methods ---------------------------------


//--------------Promise All---------------------
//let promise_all = promise.all([p1,p2,p3]);
//promise_all.then((value)=>{
//  console.log(value);
//})
//to run all the promises at once. If any promise will be rejected then no promise will run. So, it is necessary to resolve all promises to run all the promises. Otherwise no response will be visible. 
//and the time to run promise_all will depend on the method which takes the longest time to resolve. Because promise.all method returns the result after all the promises will execute.

//----------------All Settled-----------------
//let promise_all = promise.allSettled([p1,p2,p3])
//to run all the settled promise at once - only resolved promises will run, rejected method will not run
//promise.

//-----------------Race Method------------------
// let Race = promise.race([p1,p2,p3]);
//As name suggest there will be a race between all the promises, the promise which executes first will win the race and gets the chance to share his result(resolve or reject method);

//-----------------Any Method------------------

//let Any = promise.any([p1,p2,p3]);
//Similar to race method but race method will return the promise which executes first even if it is rejected, but any method will only return the method which is resolved

//-----------------Resolve Method------------------

//Promise.resolve(value);
//Creates a resolved promise with the given value;

//-----------------Reject Method------------------

//Promise.reject(error);
//Creates a rejected promise with the given error;





