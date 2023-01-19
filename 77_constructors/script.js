// class RailwayStation{
//   //creating a constructor
//   //Constructor with a parameter
//   constructor(stationName){
//     console.log("constructor is running...")
//     this.stationName = stationName;
//   }
//   printStationName(){
//     console.log("Name of this railway station is: " + this.stationName);
//   }
// }

// let kharagpur = new RailwayStation("kharagpur");
// kharagpur.printStationName();


//Creating a class of game 
class game1 {
  //1. Default Constructor
  //A Default constructor does not contain any parameter.
  // constructor() {}
  //2. Constructor with parameter
  //NOTE - JavaScript does not support more than one constructor in a same class.
  constructor(givenName, totalKills) {
    console.log("Game Constructor is Called: ")
    this.name = givenName;
    this.totalKills = totalKills;
  }
  killEnemy() {
    console.log(this.name + ": killed an enemy");
    console.log("Now He has total "+ this.totalKills + " kills");
  }
  fly(){
    console.log(this.name + " is flying in the game");
  }
}
//Creating a game pubg in which shivam is a player
let pubg = new game1("shivam", 45);
pubg.killEnemy();
pubg.fly();

//Creating a game freefire in which dhruv is a player
let freefire = new game1("Dhruv", 23);
freefire.killEnemy();
freefire.fly();
