//Creating a class of game 
class game1 {
  setPlayerName(givenName, totalKills) {
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
let pubg = new game1();
pubg.setPlayerName("shivam",45);
pubg.killEnemy();
pubg.fly();

//Creating a game freefire in which dhruv is a player
let freefire = new game1();
freefire.setPlayerName("dhruv",23);
freefire.killEnemy();
freefire.fly();
