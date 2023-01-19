//A normal arrow function

let sayHello = () => {
  console.log("Hello");
}

//An arrow function with a parameter

let sayHello1 = (name) => {
  console.log("Hello "+ name);
}

sayHello1("Shivam");

//We can also use the upper arrow function in the following way
let sayHello2 = name => console.log("Hello "+ name);
//we can skip paramter's paranthesis and curly bracket for single command.
//if we have more than one line it is recommended to use curly bracket.
//and if we have more than one parameter than it is necessary to use paranthesis.

sayHello2("Shivam");

//Some more use of arrow Function 
 
let obj = {
  name: "Shivam",
  designation: "JS Developer",
  exp: 5,
  show: function(){
    //we have to store this in a variable.
    //If we do not do this then we will get a window object in printName function.
    let that = this;
    function printName ()  {
      //now we can use that
      console.log(`Hello, I am ${that.name}, my designation is ${that.designation} and my experince is ${that.exp} years`)
    }
    printName();
  }
}
obj.show();

let obj2 = {
  name: "Sudhanshu",
  designation: "Java Developer",
  exp: 2,
  show: function(){
    //we do not need to use that variable if we are using arrow function.
    //we can directly use this in printName because of arrow function.
    let printName = () => {
      console.log(`Hello, I am ${this.name}, my designation is ${this.designation} and my experince is ${this.exp} years`)
    }
    printName();
  }
}
obj2.show();
