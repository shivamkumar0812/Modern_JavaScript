//Method Overriding -
//When two or more methods have same name but different type and number of parameter, then it is called method overriding
//this can be used to provide dynamic output and expect different output based on the different input given to the computer
//suppose we want to find area of a circle then a user can give the radius of integer type or float type
//so we can override the area method by only changing the type of parameter.

//in JavaScript a child class can override the method of its parent class.
//for ex - 
class Employee{
  //employee's constructor
  constructor(name){
    console.log(`${this.name}- It is Employee's constructor`);
    this.name = name;
  }
  login(){
    console.log("Employee is logging in");
  }
  logout(){
    console.log("Employee is logging out");
  }
  requestsLeave(leaves){
    console.log(`Employee has requested ${leaves} leaves`);
  }
}
class Programmer extends Employee{
  //If we do not define/initialize any constructor then JavaScript automatically creates following constructor
  // constructor(...args){
  //   super(...args);
  // }
  //However, we can define our own constructor in child class.
  //NOTE- We cannot use then before calling super. If we do so, then it will produce an error.
  requestCoffee(x){
    console.log(`Programmer has requested ${x} leaves`);
  }
  //overriding requestLeave method
  requestsLeave(x){
    //if we want same body of requestLeave from its parent class then we use super keyword
    //by using super keyword all the changes in the parent class with render in its child class
    super.requestsLeave(x);

    //suppose we want to give 1 extra leave to a programmer
    // console.log(`Programmer has request ${x+1} Leaves`);
    console.log(`One extra leave is granted`);
  }


}

let shivam = new Programmer("Shivam");
shivam.requestCoffee(1);
shivam.requestsLeave(7);