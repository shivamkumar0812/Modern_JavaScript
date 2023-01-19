let a = async () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(4);
    },5000)
  })
}

//Normal function which is invoked later 
// let f = async() => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);

// }
// f();

//the upper function can be changed to IIFE using this way - 

(async () =>{
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);

})();
//By using () brackets around the body we are making it a function and using () to invoke the function.
//all the variables automatically gets destroyed after the function gets over.

