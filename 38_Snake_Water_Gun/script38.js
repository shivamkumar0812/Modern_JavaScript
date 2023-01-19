let demo = document.getElementById("demo");

let user = prompt("Enter S, W, or G:");
user = user.toUpperCase();
let cpuInput = Math.floor(Math.random()*3);

let cpu = ["S","W","G"][cpuInput];

let match = ((cpu, user) => {

  if(cpu == user){
    return "Match Tied";
  }
  else if(cpu == "S" && user == "G"){
    return "user won";
  }
  else if(cpu == "S" && user == "W"){
    return "cpu won";
  }
  else if(cpu == "G" && user == "S"){
    return "cpu won";
  }
  else if(cpu == "G" && user == "W"){
    return "user won";
  }
  else if(cpu == "W" && user == "G"){
    return "cpu won";
  }
  else if(cpu == "W" && user == "S"){
    return "user won";
  }
})

let result = match(cpu, user);
demo.innerHTML = `CPU chosed: ${cpu} <br> User chosed: ${user} <br> Result is: ${result.toUpperCase()}`;