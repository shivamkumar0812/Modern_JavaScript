//Creating an object - a
let a = {
  name2: "shivam",
  language: "JavaScript",
  course: "BCA"
}

//Creating a prototype p which contains run method that produces an alert
let p = {
 run: () => {
  console.log("run");
 },
 eat: ()=> {
  console.log("eating");
 }
 //if we want to add more methods then we can add by putting comma like eat method.
}

let anotherProto = {
  name: "Satyam"
}

//Defining that object a has a prototype p.
a.__proto__ = p;
a.run();
//We can create a prototype of another prototype
//as we are doing in this example.
//We have created a prototype - anotherProto and this prototype is a prototype of p.
p.__proto__ = anotherProto;
console.log(a.name);

