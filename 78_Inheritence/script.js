//Inheritence in JS
//a class in JavaScript can inherit methods and properties from another class.
class car{
  constructor(name, color, company){
    this.name = name;
    this.color = color;
    this.company = company;
  }
  break(){
    console.log("Applying Break to "+ this.name);
  }
  accelarate(){
    console.log("Speeding up the "+ this.name);
  }
  printDetails(){
    console.log("Name of the car is "+this.name + " which is in "+this.color + " color having " + this.company + " company")
  }
}
//Creating a super car class that inherits all the properties of a car
class superCar extends car{
  nitro(){
    console.log("Activating the nitro in the "+ this.name);
  }

}
let alto = new car("alto","black","maruti suzuki");
let aventador = new superCar("aventador","yellow","lamborghini");
aventador.accelarate();
aventador.nitro();
alto.printDetails()
aventador.printDetails()
