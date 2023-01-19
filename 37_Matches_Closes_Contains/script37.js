//taking id1 and sp1 from body of html and a variable.
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
let box = document.getElementsByClassName("box");
//printing id1 in console.
console.log(id1);
//checking if id1 matches with class
console.log(id1.matches(".class"));
//returns false because id1 does not contain any class with name class

//checking if id1 contains any class with name box, so it returns true
console.log(id1.matches(".box"));

//check if sp1 contains any id with sp1, if yes then return the element otherwise returns null
console.log(sp1.closest("#sp1"));
console.log(sp1.closest("#pp1"));

//checks if sp1 contains any class with name - box, if no then check its ancestor(Parent) if not found in parenct element then check in parent of parent element
console.log(sp1.closest(".box"));
console.log(sp1.closest("#id1"));

//returns true if id1 contains sp1 id or class and returns false if child element 
console.log(id1.contains(sp1));
// console.log(id1.contains(box));
console.log(sp1.contains(id1));
