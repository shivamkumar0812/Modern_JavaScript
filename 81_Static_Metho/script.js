class Animal{
  constructor(name){
    this.name = Animal.capitalize(name);
    console.log("This is a constructor");
  }
  walk(){
    alert(`Animal ${this.name} is Walking`);
  }
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

let chimp = new Animal("raju");
chimp.walk();
// chimp.capitalize(); //this will not work
