class Bird{
  constructor(name){
    this._name = name;
  }
  fly(){
    console.log("This Bird is flying");
    
  }
  //getter to get the name
  get name(){
    return this._name;
  }
  set name(givenName){
    this._name = givenName;
  }
}
class pigeon extends Bird {
  nothing(){
    console.log("This method is defined in pigeon class");
  }
}
let bulbul = new Bird("chichi");
console.log(bulbul.name);
let b = new Bird();
b.name = "hoohoo";
let kabootar = new pigeon();
//instance of keyword
//returns true if a variable is an instance of a object.
//otherwise returns false.

//NOTE - a child class can also be a instance of parent class

console.log(bulbul instanceof Bird);
let c = 38;
console.log(c instanceof Bird);
console.log(kabootar instanceof Bird);
