//We can try any piece of code inside try if we think that it can contain any error.
//for ex -
try{
  console.log(shivam);
  //shivam is not defined so it will produce an error.
}
//later we can catch the error with the help of error method.
//we can print name, message of the error with the whole stack

catch(err){
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);

}

//We can also throw custom errors 
//for eg-
try{
  age = prompt("Enter your age?");
  age = Number.parseInt(age);
  if(age>150){
    throw ReferenceError("This is probably not true");
  }
}
catch(error){
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//Now let's see finally
const f = () => {
try{
 let a = 0;
 console.log(a);
 return;
 //even if we return from a function - finally will always run.
 //finally will run just before the return statement.
//  console.log(aError);
}
catch(error){
  console.log(error.stack);
  // console.log(errorInCatchBlock);
}
//finally block will run irrespective of the result of try and catch blocks.
finally{
  console.log("Shivam is a good boy");
}
//We can think that what's the need of finally block-
//Suppose there is also an error in catch block  then the code after catch block will not run.
//So, we use finally block to run error even if any error occurs in catch block
}
f();
console.log("End of program");
//Finally will run before the End of the program.
